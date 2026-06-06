const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(amount);
};

const SummaryCards = ({ summary }) => {

  if (!summary) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "220px"
        }}
      >
        <h3>Total This Month</h3>

        <p>
          {formatCurrency(
            summary.totalSpentThisMonth
          )}
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "220px"
        }}
      >
        <h3>Highest Expense</h3>

        <p>
          {formatCurrency(
            summary.highestExpense
          )}
        </p>
      </div>
      <div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "250px"
  }}
>
  <h3>Category Totals</h3>

  {Object.entries(
    summary.categoryTotals
  ).map(([category, amount]) => (
    <p key={category}>
      {category}:{" "}
      {formatCurrency(amount)}
    </p>
  ))}
</div>
    </div>

    
  );
};

export default SummaryCards;