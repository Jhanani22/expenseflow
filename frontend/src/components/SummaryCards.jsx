import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Receipt,
} from "lucide-react";

export default function SummaryCards({
  balance,
  income,
  expense,
  count,
}) {
  const cards = [
    {
      title: "Balance",
      value: balance,
      color: "#3b82f6",
      icon: <Wallet size={24} />,
    },
    {
      title: "Income",
      value: income,
      color: "#22c55e",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Expense",
      value: expense,
      color: "#ef4444",
      icon: <TrendingDown size={24} />,
    },
    {
      title: "Transactions",
      value: count,
      color: "#8b5cf6",
      icon: <Receipt size={24} />,
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
        marginTop: 25,
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            padding: 22,
            borderRadius: 20,
            background:
              "linear-gradient(145deg,#111827,#1f2937)",
            border: "1px solid rgba(255,255,255,.05)",
            boxShadow: "0 8px 25px rgba(0,0,0,.35)",
            transition: ".3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-6px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0px)";
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              background: card.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginBottom: 15,
            }}
          >
            {card.icon}
          </div>

          <div
            style={{
              color: "#9ca3af",
              fontSize: 14,
            }}
          >
            {card.title}
          </div>

          <h2
            style={{
              marginTop: 10,
              fontSize: 28,
              marginBottom: 0,
            }}
          >
            {card.title === "Transactions"
              ? card.value
              : `₹${Number(card.value).toLocaleString()}`}
          </h2>
        </div>
      ))}
    </div>
  );
}