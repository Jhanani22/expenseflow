import {
  LayoutDashboard,
  PieChart,
  Wallet,
  Settings,
  LogOut,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const menu = [
    {
      icon: <LayoutDashboard size={20} />,
      title: "Dashboard",
      active: true,
    },
    {
      icon: <PieChart size={20} />,
      title: "Analytics",
    },
    {
      icon: <Wallet size={20} />,
      title: "Budgets",
    },
    {
      icon: <Settings size={20} />,
      title: "Settings",
    },
  ];

  return (
    <div
      style={{
        width: 270,
        minHeight: "100vh",
        padding: "30px 22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg,#111827,#0f172a,#020617)",
        borderRight: "1px solid rgba(255,255,255,.05)",
      }}
    >
      <div>
        <div style={{ marginBottom: 45 }}>
          <h1
            style={{
              color: "#60a5fa",
              margin: 0,
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            ExpenseFlow
          </h1>

          <p
            style={{
              marginTop: 6,
              color: "#94a3b8",
              fontSize: 13,
            }}
          >
            Smart Finance Tracker
          </p>
        </div>

        {menu.map((item) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 18px",
              marginBottom: 14,
              borderRadius: 16,
              cursor: "pointer",
              background: item.active
                ? "linear-gradient(135deg,#2563eb,#4f46e5)"
                : "transparent",
              color: item.active ? "#fff" : "#cbd5e1",
              transition: ".3s",
              border: item.active
                ? "none"
                : "1px solid rgba(255,255,255,.05)",
            }}
            onMouseEnter={(e) => {
              if (!item.active)
                e.currentTarget.style.background =
                  "rgba(255,255,255,.05)";
            }}
            onMouseLeave={(e) => {
              if (!item.active)
                e.currentTarget.style.background = "transparent";
            }}
          >
            {item.icon}

            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div>
        <div
          style={{
            background: "rgba(255,255,255,.04)",
            padding: 16,
            borderRadius: 16,
            marginBottom: 20,
            border: "1px solid rgba(255,255,255,.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <User size={24} />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {user?.name}
              </div>

              <div
                style={{
                  color: "#94a3b8",
                  fontSize: 12,
                }}
              >
                Expense Tracker User
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 16,
            border: "none",
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#ef4444,#dc2626)",
            color: "white",
            fontWeight: 700,
            fontSize: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}