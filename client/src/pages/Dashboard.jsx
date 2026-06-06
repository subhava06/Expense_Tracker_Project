import { useEffect, useState } from "react";
import API from "../api/expenseApi";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCards from "../components/SummaryCards";
import ExpenseChart from "../components/ExpenseChart";

const Dashboard = () => {

  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] =
    useState(null);
  const [summary, setSummary] =
  useState(null);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/");
      setExpenses(res.data);
      fetchSummary();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSummary = async () => {
  try {

    const res = await API.get(
      "/summary"
    );

    setSummary(res.data);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchExpenses();
    fetchSummary();
  }, []);

  

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
       <SummaryCards
  summary={summary}
/>

<ExpenseChart
  categoryTotals={
    summary?.categoryTotals
  }
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