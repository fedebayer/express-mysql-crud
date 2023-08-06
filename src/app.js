import express from "express";

import {
  default as employeesRoutes,
  default as indexRoutes,
} from "./routes/employees.routes.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
