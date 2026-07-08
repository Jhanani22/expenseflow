import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  try {

    const {
  title,
  amount,
  type,
  category,
} = req.body;

    const transaction = await Transaction.create({
  title,
  amount,
  type,
  category,
  user: req.user.id,
});

    res.status(201).json(transaction);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export const getTransactions = async (req, res) => {
  try {

    const transactions = await Transaction.find({
      user: req.user.id
    });

    res.status(200).json(transactions);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
export const deleteTransaction = async (req, res) => {
  try {

    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found"
      });
    }

    if (transaction.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    await Transaction.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Transaction Deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
export const getSummary = async (req, res) => {

  const transactions = await Transaction.find({
    user: req.user.id
  });

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  res.json({
    income,
    expense,
    balance
  });
};