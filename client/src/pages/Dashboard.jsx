import { useEffect, useState } from "react";
import API from "../api/expenseApi";

const Dashboard = () => {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await API.get("/");
      setExpenses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{padding:"30px"}}>
      <h1>Mini Expense Tracker</h1>

      <h3 style={{marginTop:"20px"}}>
        Total Expenses: {expenses.length}
      </h3>

      {expenses.map(expense => (
        <div
          key={expense.id}
          style={{
            background:"white",
            padding:"10px",
            marginTop:"10px",
            borderRadius:"10px"
          }}
        >
          <h4>{expense.category}</h4>

          <p>₹ {expense.amount}</p>

          <p>{expense.note}</p>

          <p>{expense.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;