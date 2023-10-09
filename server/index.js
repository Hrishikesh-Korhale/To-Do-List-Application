import express from "express";
import Connection from "./Database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./Routes/route.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);

const PORT = 8000;

app.listen(PORT, () => console.log("Server is running on PORT", PORT));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
