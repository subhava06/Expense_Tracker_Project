import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7"
];

const ExpenseChart = ({ categoryTotals }) => {

  const chartData = Object.entries(
    categoryTotals || {}
  ).map(([category, amount]) => ({
    category,
    amount
  }));

  if (chartData.length === 0) return null;

  return (
    <div
      style={{
        background: "white",
        boxShadow:"0 2px 10px rgba(0,0,0,0.08)",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px"
      }}
    >
      <h2>Expenses by Category</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="amount"
            nameKey="category"
            outerRadius={100}
            label
          >
            {chartData.map(
              (_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index %
                        COLORS.length
                    ]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;