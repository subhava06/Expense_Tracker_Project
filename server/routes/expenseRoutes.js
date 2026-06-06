const express = require("express");

const router = express.Router();

const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  getSummary,
  exportCSV,
} = require("../controllers/expenseController");

router.get("/summary", getSummary);

router.get("/export/csv", exportCSV);

router.get("/", getExpenses);

router.post("/", addExpense);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);




module.exports = router;