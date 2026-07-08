import { Trash2 } from "lucide-react";
import {
  ShoppingBag,
  UtensilsCrossed,
  Car,
  Wallet,
  Film,
  HeartPulse,
  Receipt,
  IndianRupee,
} from "lucide-react";

export default function TransactionList({
  transactions,
  removeTransaction,
}) {
  if (transactions.length === 0) {
    return (
      <div
        style={{
          marginTop: 25,
          background: "#111827",
          padding: 40,
          borderRadius: 20,
          textAlign: "center",
          color: "#9ca3af",
        }}
      >
        <h3>No Transactions Yet</h3>
        <p>Add your first income or expense.</p>
      </div>
    );
  }
  const icons = {
  Food: <UtensilsCrossed size={18} />,
  Shopping: <ShoppingBag size={18} />,
  Transport: <Car size={18} />,
  Bills: <Receipt size={18} />,
  Entertainment: <Film size={18} />,
  Health: <HeartPulse size={18} />,
  Salary: <Wallet size={18} />,
  Other: <IndianRupee size={18} />,
};

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
        }}
      >
        Recent Transactions
      </h2>
      {transactions.map((tx) => (
        <div
  key={tx._id}
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px",
    marginBottom: 15,
    borderRadius: 18,
    background: "#1e293b",
    border: "1px solid rgba(255,255,255,.05)",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 15,
    }}
  >
    <div
      style={{
        width: 45,
        height: 45,
        borderRadius: 12,
        background: "rgba(59,130,246,.15)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#60a5fa",
      }}
    >
      {icons[tx.category] || icons.Other}
    </div>

    <div>
      <div
        style={{
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {tx.title}
      </div>

      <div
        style={{
          color: "#94a3b8",
          fontSize: 13,
        }}
      >
        {tx.category}
      </div>
    </div>
  </div>

  <div
    style={{
      textAlign: "right",
    }}
  >
    <div
      style={{
        color:
          tx.type === "income"
            ? "#22c55e"
            : "#ef4444",
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      {tx.type === "income" ? "+" : "-"}₹
      {tx.amount}
    </div>

    <button
      onClick={() => removeTransaction(tx._id)}
      style={{
        marginTop: 8,
        border: "none",
        background: "#ef4444",
        color: "white",
        padding: "6px 12px",
        borderRadius: 8,
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  </div>
</div>
      ))}
    </div>
  );
}