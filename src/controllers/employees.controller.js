import { pool } from "../db.js";

export const getEmployees = (req, res) => {
  res.send("Getting employees");
};

export const postEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee(name, salary) VALUES (?, ?)",
    [name, salary]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const putEmployees = (req, res) => {
  res.send("Updating employee");
};

export const deleteEmployees = (req, res) => {
  res.send("Deleting employee");
};
