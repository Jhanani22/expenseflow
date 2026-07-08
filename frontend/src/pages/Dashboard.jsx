import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import TransactionList from "../components/TransactionList";
import AddTransactionModal from "../components/AddTransactionModel";
import ExpensePieChart from "../components/ExpensePieChart";

import { useTransactions } from "../context/TransactionContext";

export default function Dashboard() {
  const navigate = useNavigate();

  const {
    transactions,
    loading,
    createTransaction,
    removeTransaction,
  } = useTransactions();

  const user = JSON.parse(localStorage.getItem("user"));

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#080C14",
          color: "white",
          fontSize: 22,
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#080C14",
        color: "white",
      }}
    >
      <Sidebar />

      <div
  className="fade-in"
  style={{
    flex: 1,
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  }}
>
        <Header
          user={user}
          onAdd={() => setShowModal(true)}
        />

        <SummaryCards
  balance={balance}
  income={totalIncome}
  expense={totalExpense}
  count={transactions.length}
/>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    alignItems: "start",
  }}
>
  <ExpensePieChart
    income={totalIncome}
    expense={totalExpense}
  />

  <TransactionList
    transactions={transactions.filter((tx) =>
      tx.title.toLowerCase().includes(search.toLowerCase())
    )}
    removeTransaction={removeTransaction}
  />
</div>

        {showModal && (
          <AddTransactionModal
            onClose={() => setShowModal(false)}
            createTransaction={createTransaction}
          />
        )}
      </div>
    </div>
  );
}