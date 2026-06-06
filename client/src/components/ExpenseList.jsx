import API from "../api/expenseApi";

const ExpenseList = ({
  expenses,
  fetchExpenses,
  setEditingExpense
}) => {

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this expense?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);
      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}
    >
      <h2>Expenses</h2>

      <table
        style={{
          width: "100%",
          marginTop: "10px"
        }}
      >
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>₹ {expense.amount}</td>

              <td>{expense.category}</td>

              <td>{expense.date}</td>

              <td>{expense.note}</td>

              <td>
                <button
                  onClick={() =>
                    setEditingExpense(expense)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(expense.id)
                  }
                  style={{
                    marginLeft: "10px"
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;