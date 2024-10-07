import express from "express";
import dialogRouter from "./Routes/dialogRouter.js";

const host = "localhost";
const port = 5001;

const app = express();

app.use("/", express.static("./Public"));
app.use(express.json());
app.use("/dialogflow", dialogRouter);

app.listen(port, host, () => {
  console.log(`servidor rodando em http://${host}:${port}`);
});
