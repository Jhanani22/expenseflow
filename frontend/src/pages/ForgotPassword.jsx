import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMessage("");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans','Segoe UI',sans-serif",
        background: "#080C14",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .brand-font{
          font-family:'Syne',sans-serif;
        }

        .orb1{
          position:absolute;
          width:420px;
          height:420px;
          background:radial-gradient(circle,rgba(99,102,241,.22),transparent 70%);
          top:-120px;
          left:-80px;
          border-radius:50%;
        }

        .orb2{
          position:absolute;
          width:350px;
          height:350px;
          background:radial-gradient(circle,rgba(139,92,246,.18),transparent 70%);
          bottom:-100px;
          right:-80px;
          border-radius:50%;
        }

        .card{
          width:420px;
          background:rgba(13,18,30,.88);
          backdrop-filter:blur(24px);
          border:1px solid rgba(255,255,255,.08);
          border-radius:24px;
          padding:38px;
          box-shadow:0 30px 80px rgba(0,0,0,.6);
          z-index:2;
        }

        .field{
          position:relative;
          margin-top:20px;
        }

        .field input{
          width:100%;
          padding:14px 14px 14px 44px;
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          border-radius:12px;
          color:white;
          outline:none;
          font-size:14px;
        }

        .field input:focus{
          border-color:#6366f1;
        }

        .icon{
          position:absolute;
          left:15px;
          top:50%;
          transform:translateY(-50%);
          color:rgba(255,255,255,.4);
        }

        .btn{
          width:100%;
          margin-top:24px;
          padding:14px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          font-size:15px;
          font-weight:600;
          color:white;
          background:linear-gradient(135deg,#3b82f6,#6366f1,#8b5cf6);
          transition:.25s;
        }

        .btn:hover{
          transform:translateY(-2px);
          box-shadow:0 12px 35px rgba(99,102,241,.4);
        }

        .success{
          margin-top:18px;
          color:#4ade80;
          text-align:center;
          font-size:14px;
        }

        .error{
          margin-top:18px;
          color:#f87171;
          text-align:center;
          font-size:14px;
        }

        .back{
          margin-top:24px;
          display:flex;
          justify-content:center;
          align-items:center;
          gap:8px;
          color:#818cf8;
          text-decoration:none;
          font-size:14px;
        }

      `}</style>

      <div className="orb1"></div>
      <div className="orb2"></div>

      <div className="card">

        <h1
          className="brand-font"
          style={{
            fontSize:30,
            color:"white",
            marginBottom:8
          }}
        >
          Expense<span style={{color:"#6366f1"}}>Flow</span>
        </h1>

        <h2
          style={{
            color:"white",
            fontSize:22,
            marginBottom:10
          }}
        >
          Forgot Password
        </h2>

        <p
          style={{
            color:"rgba(255,255,255,.45)",
            fontSize:14,
            lineHeight:1.6
          }}
        >
          Enter the email address associated with your account.
          We'll send you instructions to reset your password.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="field">
            <FaEnvelope className="icon"/>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <button className="btn">
            Send Reset Link
          </button>

        </form>

        {message && <div className="success">{message}</div>}

        {error && <div className="error">{error}</div>}

        <Link to="/" className="back">
          <FaArrowLeft/>
          Back to Sign In
        </Link>

      </div>

    </div>
  );
}