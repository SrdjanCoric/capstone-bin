import express from "express";

const requestRouter = express.Router();

requestRouter.all("/:id", (req, res) => {
  res.send(200);
});

export default requestRouter;
