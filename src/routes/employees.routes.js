import { Router } from "express";

const router = Router();

router.get("/employees", (req, res) => {
  res.send("Getting employees");
});

router.post("/employees", (req, res) => {
  res.send("Creating employee");
});

router.put("/employees", (req, res) => {
  res.send("Updating employee");
});

router.delete("/employees", (req, res) => {
  res.send("Deleting employee");
});

export default router;
