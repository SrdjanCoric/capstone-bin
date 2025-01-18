import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import webRouter from "./routes/webRoutes";
import requestRouter from "./routes/requestRoutes";

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/web", webRouter);
app.use("/", requestRouter);

app.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
