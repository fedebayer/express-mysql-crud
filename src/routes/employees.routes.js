import { Router } from "express";
import {
  getEmployees,
  postEmployees,
  putEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.post("/employees", postEmployees);

router.put("/employees", putEmployee);

router.delete("/employees", deleteEmployee);

export default router;
