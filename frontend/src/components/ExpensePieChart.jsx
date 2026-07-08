import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#fb7185"];

export default function ExpensePieChart({ income, expense }) {
  const data = [
    {
      name: "Income",
      value: income,
    },
    {
      name: "Expense",
      value: expense,
    },
  ];

  const total = income + expense;

  return (
    <div
      className="glass float"
      style={{
        padding: 25,
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          fontSize: 22,
        }}
      >
        Income vs Expense
      </h2>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            innerRadius={75}
            outerRadius={110}
            paddingAngle={6}
            animationDuration={1200}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

      <div
        style={{
          marginTop: 20,
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#94a3b8",
          }}
        >
          Total Money
        </div>

        <h1
          style={{
            marginTop: 8,
            color: "#60a5fa",
          }}
        >
          ₹{total.toLocaleString()}
        </h1>
      </div>
    </div>
  );
}