import { useState } from "react";
import API from "../api/expenseApi";

const categories = [
  "Food",
  "Transport",
  "Bills",
  "Entertainment",
  "Other"
];

const ExpenseForm = ({ fetchExpenses }) => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.amount) <= 0) {
      alert("Amount must be positive");
      return;
    }

    if (!formData.category) {
      alert("Category is required");
      return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();

    if (selectedDate > today) {
      alert("Future dates not allowed");
      return;
    }

    try {
      await API.post("/", formData);

      setFormData({
        amount: "",
        category: "",
        date: "",
        note: ""
      });

      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}
    >
      <h2>Add Expense</h2>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">
          Select Category
        </option>

        {categories.map(category => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

      <br /><br />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;