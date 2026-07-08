import { useState } from "react";

export default function AddTransactionModal({
  onClose,
  createTransaction,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createTransaction({ 
        title,
        amount:Number(amount),
        type,
            category,
});

      onClose();
    } catch (err) {
      console.log(err);
      alert("Failed to add transaction");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#111827",
          padding: 30,
          borderRadius: 15,
          width: 400,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <h2>Add Transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "none",
          }}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "none",
          }}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            padding: 12,
            borderRadius: 8,
            border: "none",
          }}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Category */}
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    style={{
      padding: 12,
      borderRadius: 8,
      border: "none",
    }}
  >
    <option value="Food">🍔 Food</option>
    <option value="Shopping">🛒 Shopping</option>
    <option value="Transport">🚕 Transport</option>
    <option value="Bills">💡 Bills</option>
    <option value="Entertainment">🎬 Entertainment</option>
    <option value="Health">❤️ Health</option>
    <option value="Salary">💼 Salary</option>
    <option value="Other">📦 Other</option>
  </select>

        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              flex: 1,
              padding: 12,
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            style={{
              flex: 1,
              padding: 12,
              border: "none",
              borderRadius: 8,
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}