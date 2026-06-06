const express = require("express");

const router = express.Router();

const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  getSummary,
} = require("../controllers/expenseController");

router.get("/summary", getSummary);

router.get("/", getExpenses);

router.post("/", addExpense);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);


module.exports = router;