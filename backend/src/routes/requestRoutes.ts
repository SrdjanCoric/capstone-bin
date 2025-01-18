import express from "express";

const requestRouter = express.Router();

requestRouter.all("/:id", (req, res) => {
  const headers = req.headers;
  const method = req.method;
  const body = req.body;

  console.log(method, headers, body);

  res.send(200);
});

export default requestRouter;
