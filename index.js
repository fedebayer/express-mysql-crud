import express from "express";
import { PORT } from "./config.js";
import { pool } from "./db.js";

const app = express();

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS result");
  res.send(result[0]);
});

app.get("/employees", (req, res) => {
  res.send("Getting employees");
});

app.post("/employees", (req, res) => {
  res.send("Creating employee");
});

app.put("/employees", (req, res) => {
  res.send("Updating employee");
});

app.delete("/employees", (req, res) => {
  res.send("Deleting employee");
});

app.listen(PORT);
console.log("Server running on port", PORT);
