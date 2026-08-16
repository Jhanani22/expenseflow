import axios from "axios";

// Base instance
const API = axios.create({
  baseURL: "https://expenseflow-6s85.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});
 
// ─── Request interceptor — attach JWT to every request automatically ──────────
// Instead of manually adding the token in every component, we do it once here.
// Every API call gets: Authorization: Bearer <token>
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
 
// ─── Response interceptor — handle errors globally ───────────────────────────
// If the server returns 401 (token expired / invalid), log the user out
// and redirect to login. No need to handle this in every component.
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/"; // Redirect to login
    }
    return Promise.reject(error);
  }
);
 
// ─── Auth ─────────────────────────────────────────────────────────────────────
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser    = (data) => API.post("/auth/login", data);
 
// ─── Transactions ─────────────────────────────────────────────────────────────
export const getTransactions    = ()     => API.get("/transactions");
export const addTransaction     = (data) => API.post("/transactions", data);
export const deleteTransaction  = (id)   => API.delete(`/transactions/${id}`);
 
// ─── Budgets ──────────────────────────────────────────────────────────────────
export const getBudgets    = ()     => API.get("/budgets");
export const addBudget     = (data) => API.post("/budgets", data);
export const updateBudget  = (id, data) => API.put(`/budgets/${id}`, data);
export const deleteBudget  = (id)   => API.delete(`/budgets/${id}`);
 
// ─── Dashboard summary ────────────────────────────────────────────────────────
export const getSummary = () => API.get("/transactions/summary");
 
export default API;