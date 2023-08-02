import express from "express";
import { PORT } from "../config.js";

import {
  default as employeesRoutes,
  default as indexRoutes,
} from "./routes/employees.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.listen(PORT);
console.log("Server running on port", PORT);
