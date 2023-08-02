import express from "express";

const app = express();
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

app.listen(3000);
console.log("Server running on port 3000");
