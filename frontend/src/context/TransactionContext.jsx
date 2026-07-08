import { createContext, useContext, useEffect, useState } from "react";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "../services/api";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const res = await getTransactions();
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const createTransaction = async (data) => {
    const res = await addTransaction(data);
    setTransactions((prev) => [res.data, ...prev]);
  };

  const removeTransaction = async (id) => {
    await deleteTransaction(id);
    setTransactions((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        createTransaction,
        removeTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
