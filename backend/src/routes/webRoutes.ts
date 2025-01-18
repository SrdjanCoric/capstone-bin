import express from "express";

import pgQuery from "../db/models/postgresModel";

const webRouter = express.Router();

const genId = () => {};

webRouter.post("/", async (req, res) => {
  let id = genId();
  try {
    let duplicateCheck;
    let rowCount;
    let tryCount = 3;
    do {
      duplicateCheck = await pgQuery(
        `
      SELECT * FROM bucket
      WHERE uuid = $1;
      `,
        [id],
      );
      tryCount--;

      if (duplicateCheck) {
        rowCount = duplicateCheck.rowCount;
      }
    } while (!rowCount || (rowCount > 0 && tryCount > 0));

    const result = await pgQuery(
      "INSERT INTO TABLE bucket (UUID) VALUES ($1); ",
      [id],
    );

    res.json(id);
    return;
  } catch (e: unknown) {
    res.status(500);
    return;
  }
});

webRouter.get("/:id", async (req, res) => {
  const uuid = req.params.id;
  try {
    const sqlResults = await pgQuery(
      `SELECT
        r.*
    FROM
        bucket b
    JOIN
        request r ON b.id = r.bucket_id
    WHERE
        b.uuid = 1$
    ORDER BY
        r.request_time DESC;`,
      [uuid],
    );

    //iterate through rows and get all mongo_ids
    //query mongo for bodys
    //stitch together mongo and postgres data.
    //return results
  } catch (e: unknown) {
    res.status(500);
    return;
  }
});

export default webRouter;
