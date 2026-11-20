import "dotenv/config";
import express from "express";
import cors from "cors";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
  })
);
app.use(express.json());

Hello(app);
Lab5(app);

app.listen(process.env.PORT || 4000);
