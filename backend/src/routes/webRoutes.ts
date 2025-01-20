import express from "express";

import pgQuery from "../db/models/postgresModel";
import Body from "../db/models/mongoModel";

import { genId } from "../utils/utils";

const webRouter = express.Router();

webRouter.post("", async (req, res) => {
  try {
    let attempts = 3;

    while (attempts > 0) {
      const id = genId();

      // Check for existing ID
      const existingCheck = await pgQuery<{ uuid: string }>(
        "SELECT uuid FROM bucket WHERE uuid = $1",
        [id],
      );

      // Retry if found duplicate found
      if (!existingCheck || existingCheck.rows.length > 0) {
        attempts--;
        continue;
      } else {
        // Insert UUID when unique
        const result = await pgQuery<{ uuid: string }>(
          "INSERT INTO bucket (uuid) VALUES ($1) RETURNING uuid",
          [id],
        );

        // Check insert was successful
        if (!result || result.rows.length === 0) {
          attempts--;
          continue;
        }

        // Respond with new UUID
        res.json(result.rows[0].uuid);
        return;
      }
    }

    throw new Error("Failed to generate unique ID after multiple attempts");
  } catch (e: unknown) {
    console.log(e);
    res.status(500).send();
  }
});

webRouter.get("/:id", async (req, res) => {
  const uuid = req.params.id;
  try {
    const queryResult = await pgQuery(
      `SELECT
          r.*
       FROM
          bucket b
       JOIN
          request r ON b.id = r.bucket_id
       WHERE
          b.uuid = $1
       ORDER BY
          r.request_time DESC;`,
      [uuid],
    );

    if (!queryResult) {
      res.status(404).send();
      return;
    }
    // get all mongo ids
    const mongoIds = queryResult.rows.map((row) => row["mongo_id"]);

    // query mongodb for body documents
    const bodyDocuments = await Body.find({ _id: { $in: mongoIds } });

    // reconcile mongo data with postgres data
    const requests = [];
    for (let i = 0; i < queryResult.rows.length; i++) {
      let current = queryResult.rows[i];
      let currentBody = bodyDocuments.find((b) => b.id === current["mongo_id"]);
      requests.push({
        id: current["id"],
        url: current["url"],
        method: current["method"],
        requestTime: current["request_time"],
        headers: JSON.stringify(current["headers"]),
        body: currentBody ? currentBody.body : "{}",
      });
    }

    res.json(requests);
  } catch (e: unknown) {
    res.status(500).send();
    return;
  }
});

export default webRouter;
