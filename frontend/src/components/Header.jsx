import { Plus } from "lucide-react";

export default function Header({ user, onAdd }) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 35,
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: 34,
            fontWeight: "700",
          }}
        >
          👋 {greeting},
          <span
            style={{
              color: "#60a5fa",
            }}
          >
            {" "}
            {user?.name || "User"}
          </span>
        </h1>

        <p
          style={{
            marginTop: 10,
            color: "#9ca3af",
            fontSize: 16,
          }}
        >
          Track every rupee. Save smarter. Spend wisely.
        </p>
      </div>

      <button
        onClick={onAdd}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white",
          border: "none",
          padding: "14px 22px",
          borderRadius: "14px",
          cursor: "pointer",
          fontSize: 15,
          fontWeight: "600",
          boxShadow:
            "0 8px 25px rgba(59,130,246,.35)",
        }}
      >
        <Plus size={18} />
        Add Transaction
      </button>
    </div>
  );
}