import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import ForgotPassword from "./ForgotPassword";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password)
      return setError("Please enter your email and password.");
    try {
      setLoading(true);
      const { data } = await loginUser({ email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      // Shows exact backend message so you can debug
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif" }}
      className="min-h-screen bg-[#080C14] flex overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .brand-font { font-family:'Syne',sans-serif; }
 
        /* Orbs */
        .orb-blue  { position:absolute; width:480px; height:480px; border-radius:50%; background:radial-gradient(circle,rgba(59,130,246,0.16) 0%,transparent 70%); top:-80px; left:-60px; pointer-events:none; }
        .orb-purple{ position:absolute; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,rgba(139,92,246,0.13) 0%,transparent 70%); bottom:-60px; right:-40px; pointer-events:none; }
 
        /* Dot grid left panel only */
        .grid-bg { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px); background-size:48px 48px; mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%); }
 
        /* Stat pills on left */
        .stat-tile { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:16px 18px; transition:background .2s; }
        .stat-tile:hover { background:rgba(255,255,255,0.07); }
        .feature-pill { display:inline-flex; align-items:center; gap:7px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); border-radius:100px; padding:7px 14px; color:rgba(255,255,255,0.7); font-size:13px; font-weight:500; }
 
      
        .login-card {
          width:100%; max-width:420px;
          background:rgba(11,16,28,0.92);
          border:1px solid rgba(255,255,255,0.09);
          border-radius:20px;
          box-shadow:0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03) inset;
          padding:40px 36px;
        }
 
        /* Fields — KEY FIX: dark bg always, no white flash on focus */
        .field-box { position:relative; }
        .field-box input {
          width:100%; box-sizing:border-box;
          background:#0f1623 !important;          /* stays dark always */
          border:1px solid rgba(255,255,255,0.1);
          border-radius:10px;
          padding:13px 42px;
          color:#fff; font-size:14px; font-family:inherit;
          outline:none;
          transition:border-color .2s;
          -webkit-autofill: unset;
        }
        /* Fix browser autofill blue/white bg */
        .field-box input:-webkit-autofill,
        .field-box input:-webkit-autofill:hover,
        .field-box input:-webkit-autofill:focus {
          -webkit-box-shadow:0 0 0 1000px #0f1623 inset !important;
          -webkit-text-fill-color:#fff !important;
          border-color:rgba(255,255,255,0.1) !important;
        }
        .field-box input::placeholder { color:rgba(255,255,255,0.25); }
        .field-box input:focus { border-color:rgba(99,102,241,0.55); }
        .field-box input:focus + .focus-ring { opacity:1; }
        .focus-ring { position:absolute; inset:-1px; border-radius:11px; border:1px solid rgba(99,102,241,0.45); opacity:0; pointer-events:none; transition:opacity .2s; }
 
        .icon-left  { position:absolute; left:14px; top:50%; transform:translateY(-50%); color:rgba(255,255,255,0.28); font-size:13px; pointer-events:none; }
        .icon-right { position:absolute; right:13px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:rgba(255,255,255,0.3); padding:2px; }
 
        /* Label row */
        .label-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:7px; }
        .field-label { font-size:13px; font-weight:500; color:rgba(255,255,255,0.5); }
        .field-link  { font-size:13px; font-weight:500; color:#818cf8; cursor:pointer; }
        .field-link:hover { opacity:.75; }
 
        /* Submit button */
        .submit-btn {
          width:100%; padding:14px;
          background:linear-gradient(135deg,#3b82f6,#6366f1 55%,#7c3aed);
          border:none; border-radius:10px;
          color:#fff; font-size:15px; font-weight:600; letter-spacing:.2px;
          cursor:pointer; font-family:inherit; position:relative; overflow:hidden;
          box-shadow:0 6px 28px rgba(99,102,241,0.38);
          transition:opacity .2s, transform .15s, box-shadow .2s;
        }
        .submit-btn::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,0.1) 0%,transparent 55%); }
        .submit-btn:not(:disabled):hover { opacity:.9; transform:translateY(-1px); box-shadow:0 10px 36px rgba(99,102,241,0.48); }
        .submit-btn:disabled { opacity:.55; cursor:not-allowed; }
 
        /* Divider */
        .divider { display:flex; align-items:center; gap:10px; margin:20px 0; }
        .divider::before,.divider::after { content:''; flex:1; height:1px; background:rgba(255,255,255,0.07); }
        .divider span { font-size:12px; color:rgba(255,255,255,0.22); }
 
        /* Social buttons */
        .social-btn {
          flex:1; padding:11px 0; display:flex; align-items:center; justify-content:center; gap:8px;
          background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08);
          border-radius:10px; color:rgba(255,255,255,0.65); font-size:13.5px; font-weight:500;
          cursor:pointer; font-family:inherit; transition:background .15s,border-color .15s;
        }
        .social-btn:hover { background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.14); }
 
        /* Error box */
        .err { background:rgba(239,68,68,0.09); border:1px solid rgba(239,68,68,0.22); border-radius:9px; padding:10px 13px; color:#fca5a5; font-size:13px; margin-bottom:16px; }
 
        /* Spinner */
        @keyframes spin { to{transform:rotate(360deg)} }
        .spin { display:inline-block; width:15px; height:15px; border:2px solid rgba(255,255,255,0.25); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; margin-right:8px; vertical-align:middle; }
 
        /* Fade up */
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .fu  { animation:fadeUp .5s cubic-bezier(.22,1,.36,1) both; }
        .d1  { animation-delay:.07s } .d2{ animation-delay:.14s } .d3{ animation-delay:.21s } .d4{ animation-delay:.28s }
      `}</style>

      {/* ── LEFT: brand panel ── */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center px-16 py-12">
        <div className="orb-blue" />
        <div className="orb-purple" />
        <div className="grid-bg" />

        <div className="z-10 w-full max-w-[400px]">
          {/* Beta badge */}
          <div className="fu mb-9">
            <span className="feature-pill">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 7px #4ade80",
                  flexShrink: 0,
                }}
              />
              Now in beta — Free forever
            </span>
          </div>

          <h1
            className="brand-font fu d1 text-white leading-none mb-5"
            style={{
              fontSize: "clamp(50px,5.5vw,68px)",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            Expense<span style={{ color: "#6366f1" }}>Flow</span>
          </h1>

          <p
            className="fu d2 mb-9"
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 340,
            }}
          >
            Track every rupee. Build better financial habits. All in one clean
            dashboard.
          </p>

          {/* Stats */}
          <div
            className="fu d3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 10,
              marginBottom: 28,
            }}
          >
            {[
              { v: "₹2.4L", l: "Avg. savings" },
              { v: "12K+", l: "Active users" },
              { v: "99%", l: "Uptime" },
            ].map((s) => (
              <div key={s.l} className="stat-tile">
                <div
                  className="brand-font"
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 3,
                  }}
                >
                  {s.v}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 500,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div
            className="fu d4"
            style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
          >
            {[
              "💰 Smart Tracking",
              "📊 Analytics",
              "🔔 Budget Alerts",
              "🔒 Secure",
            ].map((f) => (
              <span key={f} className="feature-pill">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: login card — properly centered with padding ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 relative">
        <div className="orb-purple" style={{ opacity: 0.5 }} />

        <form onSubmit={handleSubmit} className="login-card fu relative z-10">
          {/* Header */}
          <div style={{ marginBottom: 28 }}>
            <h2
              className="brand-font"
              style={{
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "-0.5px",
                color: "#fff",
                marginBottom: 5,
              }}
            >
              Welcome back
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
              Sign in to your ExpenseFlow account
            </p>
          </div>

          {/* Error */}
          {error && <div className="err">⚠️ {error}</div>}

          {/* Email */}
          <div style={{ marginBottom: 14 }}>
            <div className="label-row">
              <span className="field-label">Email address</span>
            </div>
            <div className="field-box">
              <FaEnvelope className="icon-left" />
              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              <div className="focus-ring" />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 14 }}>
            <div className="label-row">
              <span className="field-label">Password</span>
              <Link to="/forgot-password" className="field-link" style={{textDecoration: "none",color: "#818cf8",cursor: "pointer",
 }}
>
  Forgot password?
</Link>
            </div>
            <div className="field-box">
              <FaLock className="icon-left" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                style={{ paddingRight: 40 }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              <div className="focus-ring" />
              <button
                type="button"
                className="icon-right"
                onClick={() => setShowPassword((p) => !p)}
              >
                {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 22,
            }}
          >
            <input
              type="checkbox"
              id="remember"
              style={{ accentColor: "#6366f1", width: 14, height: 14 }}
            />
            <label
              htmlFor="remember"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.38)",
                cursor: "pointer",
              }}
            >
              Remember me for 30 days
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spin" />
                Signing in…
              </>
            ) : (
              "Sign In →"
            )}
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { l: "Google", i: "G" },
              { l: "GitHub", i: "⌥" },
            ].map((s) => (
              <button key={s.l} type="button" className="social-btn">
                <span style={{ fontWeight: 700 }}>{s.i}</span>
                {s.l}
              </button>
            ))}
          </div>

          {/* Footer */}
          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              fontSize: 13.5,
              color: "rgba(255,255,255,0.32)",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                color: "#818cf8",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Create one free →
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
