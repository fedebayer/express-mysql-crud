import { Router } from "express";
import {
  deleteEmployees,
  getEmployeeById,
  getEmployees,
  postEmployees,
  putEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeById);

router.post("/employees", postEmployees);

router.put("/employees", putEmployees);

router.delete("/employees", deleteEmployees);

export default router;
