import express from "express";
import pgQuery from "../db/models/postgresModel";

const requestRouter = express.Router();

requestRouter.all("/:id", async (req, res) => {
  const uuid = req.params.id;
  try {
    const bucketRow = await pgQuery("SELECT id FROM bucket WHERE uuid = 1$", [
      uuid,
    ]);

    if (!bucketRow) {
      res.status(404);
      return;
    }

    const body = req.body;
    // add body
    let mongoID; // =  add body to mongo recieve id
    const headers = req.headers;
    const method = req.method;
    const result = await pgQuery(
      `INSERT INTO TABLE requests (bucket_id, method, headers, mongo_id)
      values (1$, 2$, 3$, 4$);`,
      [bucketRow, method, headers, mongoID],
    );

    res.send(200);
  } catch (e: unknown) {
    res.send(500);
  }
});

export default requestRouter;
