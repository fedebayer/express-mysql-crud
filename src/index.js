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

app.listen(PORT);
console.log("Server running on port", PORT);
