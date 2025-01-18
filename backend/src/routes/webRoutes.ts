import express from "express";
const webRouter = express.Router();

webRouter.get("/:id", (req, res) => {
  res.send(200);
});

export default webRouter;
