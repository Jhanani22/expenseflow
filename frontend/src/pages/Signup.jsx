import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../services/api";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      return setError("Please fill in all fields.");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    if (form.password !== form.confirm) {
      return setError("Passwords do not match.");
    }

    try {
      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const fields = [
    {
      name: "name",
      label: "Full name",
      placeholder: "Rahul Sharma",
      type: "text",
      icon: FaUser,
      show: null,
      toggle: null,
    },
    {
      name: "email",
      label: "Email address",
      placeholder: "you@example.com",
      type: "email",
      icon: FaEnvelope,
      show: null,
      toggle: null,
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Min. 6 characters",
      type: showPassword ? "text" : "password",
      icon: FaLock,
      show: showPassword,
      toggle: () => setShowPassword((p) => !p),
    },
    {
      name: "confirm",
      label: "Confirm password",
      placeholder: "Repeat your password",
      type: showConfirm ? "text" : "password",
      icon: FaLock,
      show: showConfirm,
      toggle: () => setShowConfirm((p) => !p),
    },
  ];

  return (
    <div
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
      className="min-h-screen bg-[#080C14] flex overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap');
 
        .brand-font { font-family: 'Syne', sans-serif; }
 
        .orb-1 {
          position: absolute; width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%);
          top: -100px; left: -80px; pointer-events: none;
        }
        .orb-2 {
          position: absolute; width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%);
          bottom: -80px; right: -60px; pointer-events: none;
        }
        .grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }
        .pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 100px; padding: 8px 16px;
          color: rgba(255,255,255,0.75); font-size: 13.5px; font-weight: 500;
          backdrop-filter: blur(8px);
        }
        .card {
          background: rgba(13, 18, 30, 0.85);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          backdrop-filter: blur(24px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.04) inset,
            0 32px 80px rgba(0,0,0,0.6),
            0 0 120px rgba(99,102,241,0.06);
        }
        .field-wrap { position: relative; border-radius: 12px; transition: all 0.2s; }
        .field-wrap.active { box-shadow: 0 0 0 2px rgba(99,102,241,0.5); }
        .field-input {
          width: 100%; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px; padding: 13px 44px;
          color: #fff; font-size: 14px;
          outline: none; transition: border-color 0.2s, background 0.2s;
          font-family: inherit; box-sizing: border-box;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.28); }
        .field-input:focus { border-color: rgba(99,102,241,0.6); background: rgba(255,255,255,0.07); }
        .field-icon-left {
          position: absolute; left: 15px; top: 50%; transform: translateY(-50%);
          color: rgba(255,255,255,0.3); font-size: 13px; pointer-events: none; transition: color 0.2s;
        }
        .field-wrap.active .field-icon-left { color: rgba(99,102,241,0.8); }
        .sign-btn {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
          border: none; border-radius: 12px;
          color: #fff; font-size: 15px; font-weight: 600;
          cursor: pointer; position: relative; overflow: hidden;
          transition: opacity 0.2s, transform 0.15s; font-family: inherit;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .sign-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
        }
        .sign-btn:hover { opacity: 0.92; transform: translateY(-1px); box-shadow: 0 12px 40px rgba(99,102,241,0.45); }
        .sign-btn:active { transform: translateY(0); }
        .error-box {
          background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25);
          border-radius: 10px; padding: 10px 14px;
          color: #fca5a5; font-size: 13px; margin-bottom: 16px;
        }
        .step-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.15); transition: background 0.2s;
        }
        .step-dot.done { background: #6366f1; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .delay-1 { animation-delay: 0.08s; }
        .delay-2 { animation-delay: 0.16s; }
        .delay-3 { animation-delay: 0.24s; }
      `}</style>

      {/* LEFT — Brand panel */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center px-16">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="grid-bg" />

        <div className="z-10 max-w-md">
          <div className="animate-fadeUp mb-10">
            <span className="pill">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 6px #4ade80",
                }}
              ></span>
              Join 12,000+ users saving smarter
            </span>
          </div>

          <h1
            className="brand-font animate-fadeUp delay-1 text-white leading-none mb-6"
            style={{
              fontSize: "clamp(48px, 5.5vw, 68px)",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            Expense<span style={{ color: "#6366f1" }}>Flow</span>
          </h1>

          <p
            className="animate-fadeUp delay-2 text-lg leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.5)", maxWidth: 360 }}
          >
            Create your free account and take control of every rupee you earn
            and spend.
          </p>

          {/* Steps */}
          <div
            className="animate-fadeUp delay-3"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              {
                icon: "🎯",
                title: "Set your budget goals",
                sub: "Define limits for each spending category",
              },
              {
                icon: "📊",
                title: "Track in real time",
                sub: "Every transaction logged instantly",
              },
              {
                icon: "💡",
                title: "Get smart insights",
                sub: "Weekly reports sent to your inbox",
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 14,
                  padding: "14px 18px",
                }}
              >
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.38)",
                      fontSize: 13,
                      marginTop: 2,
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT — Signup card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 relative">
        <div className="orb-2" style={{ opacity: 0.5 }} />

        <div className="card w-full max-w-[420px] p-10 animate-fadeUp relative z-10">
          {/* Progress dots */}
          <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`step-dot ${form.name && i === 0 ? "done" : ""} ${form.email && i === 1 ? "done" : ""} ${form.password && i === 2 ? "done" : ""} ${form.confirm && i === 3 ? "done" : ""}`}
              />
            ))}
          </div>

          {/* Header */}
          <div className="mb-7">
            <h2
              className="brand-font text-white mb-1.5"
              style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.5px" }}
            >
              Create your account
            </h2>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14 }}>
              Free forever. No credit card required.
            </p>
          </div>

          {/* Error */}
          {error && <div className="error-box">⚠️ {error}</div>}

          {/* Fields */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            {fields.map(
              ({
                name,
                label,
                placeholder,
                type,
                icon: Icon,
                show,
                toggle,
              }) => (
                <div key={name}>
                  <label
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.55)",
                      display: "block",
                      marginBottom: 7,
                    }}
                  >
                    {label}
                  </label>
                  <div
                    className={`field-wrap ${focused === name ? "active" : ""}`}
                  >
                    <Icon className="field-icon-left" />
                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      className="field-input"
                      style={toggle ? { paddingRight: 44 } : {}}
                      value={form[name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(name)}
                      onBlur={() => setFocused(null)}
                    />
                    {toggle && (
                      <button
                        type="button"
                        onClick={toggle}
                        style={{
                          position: "absolute",
                          right: 14,
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "rgba(255,255,255,0.3)",
                          padding: 2,
                        }}
                      >
                        {show ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                      </button>
                    )}
                  </div>
                </div>
              ),
            )}

            {/* Terms */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 9,
                marginTop: 2,
              }}
            >
              <input
                type="checkbox"
                id="terms"
                required
                style={{
                  accentColor: "#6366f1",
                  marginTop: 2,
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                }}
              />
              <label
                htmlFor="terms"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.5,
                }}
              >
                I agree to the{" "}
                <span style={{ color: "#818cf8", cursor: "pointer" }}>
                  Terms of Service
                </span>{" "}
                and{" "}
                <span style={{ color: "#818cf8", cursor: "pointer" }}>
                  Privacy Policy
                </span>
              </label>
            </div>

            <button type="submit" className="sign-btn" style={{ marginTop: 6 }}>
              Create Free Account →
            </button>
          </form>

          {/* Footer */}
          <p
            style={{
              textAlign: "center",
              marginTop: 24,
              fontSize: 13.5,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/"
              style={{
                color: "#818cf8",
                fontWeight: 600,
                textDecoration: "none",
              }}
              className="hover:opacity-75 transition-opacity"
            >
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
