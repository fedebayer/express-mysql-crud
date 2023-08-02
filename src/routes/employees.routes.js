import { Router } from "express";
import {
  deleteEmployees,
  getEmployees,
  postEmployees,
  putEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.post("/employees", postEmployees);

router.put("/employees", putEmployees);

router.delete("/employees", deleteEmployees);

export default router;
