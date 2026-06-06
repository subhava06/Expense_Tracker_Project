import { useEffect, useState } from "react";
import API from "../api/expenseApi";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCards from "../components/SummaryCards";
import ExpenseChart from "../components/ExpenseChart";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {

  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] =
    useState(null);
  const [summary, setSummary] =
  useState(null);
  const [categoryFilter,
setCategoryFilter] =
useState("All");
const [dateFilter,
setDateFilter] =
useState("all");

const fetchExpenses = async () => {
  try {

    let query =
      `/?category=${categoryFilter}`;

    const today = new Date();

    if (dateFilter === "thisMonth") {

      const startDate =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          1
        )
          .toISOString()
          .split("T")[0];

      query +=
        `&startDate=${startDate}`;

    }

    if (dateFilter === "lastMonth") {

      const firstDayLastMonth =
        new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );

      const lastDayLastMonth =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        );

      query +=
        `&startDate=${
          firstDayLastMonth
            .toISOString()
            .split("T")[0]
        }`;

      query +=
        `&endDate=${
          lastDayLastMonth
            .toISOString()
            .split("T")[0]
        }`;

    }

    const res =
      await API.get(query);

    setExpenses(res.data);

  } catch (error) {
    console.log(error);
  }
};
const fetchSummary = async () => {
  try {
    const res = await API.get("/summary");

    setSummary(res.data);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchExpenses();
    fetchSummary();

  }, [
    categoryFilter,
     dateFilter
    ]);

  

  return (
    <div
      style={{
        padding: "30px"
      }}
    >
      <h1>Mini Expense Tracker</h1>

       <SummaryCards
  summary={summary}
/>

<ExpenseChart
  categoryTotals={
    summary?.categoryTotals
  }
/>

<FilterBar
  categoryFilter={categoryFilter}
  setCategoryFilter={setCategoryFilter}
  dateFilter={dateFilter}
  setDateFilter={setDateFilter}
/>


      <ExpenseForm
        fetchExpenses={fetchExpenses}
        editingExpense={editingExpense}
        setEditingExpense={setEditingExpense}
      />

      <h3
        style={{
          marginTop: "20px"
        }}
      >
        Total Expenses: {expenses.length}
      </h3>

      <ExpenseList
        expenses={expenses}
        fetchExpenses={fetchExpenses}
        setEditingExpense={setEditingExpense}
      />
    </div>
  );
};

export default Dashboard;