import { Router } from "express";
import {
  deleteEmployeeById,
  getEmployeeById,
  getEmployees,
  postEmployees,
  updateEmployeeById,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeById);

router.post("/employees", postEmployees);

router.patch("/employees/:id", updateEmployeeById);

router.delete("/employees/:id", deleteEmployeeById);

export default router;
