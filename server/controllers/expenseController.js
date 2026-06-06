const { v4: uuidv4 } = require("uuid");
const {
  readExpenses,
  writeExpenses,
} = require("../utils/fileHelper");

const getExpenses = (req, res) => {
  let expenses = readExpenses();

  const { category } = req.query;

  if (category && category !== "All") {
    expenses = expenses.filter(
      expense => expense.category === category
    );
  }

  expenses.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  res.json(expenses);
};

const addExpense = (req, res) => {
  const { amount, category, date, note } = req.body;

  if (!amount || amount <= 0) {
    return res
      .status(400)
      .json({ message: "Amount must be positive" });
  }

  if (!category) {
    return res
      .status(400)
      .json({ message: "Category is required" });
  }

  const today = new Date();
  const expenseDate = new Date(date);

  if (expenseDate > today) {
    return res
      .status(400)
      .json({ message: "Future date not allowed" });
  }

  const expenses = readExpenses();

  const newExpense = {
    id: uuidv4(),
    amount: Number(amount),
    category,
    date,
    note: note || "",
    createdAt: new Date().toISOString(),
  };

  expenses.push(newExpense);

  writeExpenses(expenses);

  res.status(201).json(newExpense);
};

const updateExpense = (req, res) => {
  const { id } = req.params;

  const expenses = readExpenses();

  const index = expenses.findIndex(
    (expense) => expense.id === id
  );

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "Expense not found" });
  }

  expenses[index] = {
    ...expenses[index],
    ...req.body,
  };

  writeExpenses(expenses);

  res.json(expenses[index]);
};

const deleteExpense = (req, res) => {
  const { id } = req.params;

  const expenses = readExpenses();

  const filteredExpenses = expenses.filter(
    (expense) => expense.id !== id
  );

  writeExpenses(filteredExpenses);

  res.json({
    message: "Expense deleted successfully",
  });
};

const getSummary = (req, res) => {
  const expenses = readExpenses();

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyExpenses = expenses.filter(
    (expense) => {
      const expenseDate = new Date(expense.date);

      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    }
  );

  const totalSpentThisMonth = monthlyExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const categoryTotals = {};

  monthlyExpenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      expense.amount;
  });

  const highestExpense =
    expenses.length > 0
      ? Math.max(
          ...expenses.map(
            (expense) => expense.amount
          )
        )
      : 0;

  res.json({
    totalSpentThisMonth,
    categoryTotals,
    highestExpense,
  });
};

module.exports = {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  getSummary,
};