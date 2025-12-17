import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useRef } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setShowOtp(true);

    console.log(password);
    console.log(confirmPassword);
  };

  useEffect(() => {
    if (showOtp) {
      inputsRef.current[0]?.focus();
    }
  }, [showOtp]);

  return (
    <div className="sign-up">
      <Sidebar
        title="Reset Password"
        description="Choose a strong password that you haven’t used before to secure your account."
        buttonLink="Sign in"
        linkDestination="/login"
      />

      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Reset Your Password</h2>

          {/* Password */}
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              required
            />
            <span
              className="icon right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              required
            />
            <span
              className="icon right"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && <p className="error">{error}</p>}

          <p className="agreement-text">
            By continuing you agree with our term service and privacy policy
          </p>

          <button
            type="submit"
            className="send-btn"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
