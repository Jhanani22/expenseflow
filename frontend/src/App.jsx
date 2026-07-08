import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import { TransactionProvider } from "./context/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
        </Routes>
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;