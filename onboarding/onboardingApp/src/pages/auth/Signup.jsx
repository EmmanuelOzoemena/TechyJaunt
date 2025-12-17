import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Validate Email Address
  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue) && emailValue !== "") {
      alert("Please enter a valid email address");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <div className="sign-up">
      <Sidebar />

      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Create an Account</h2>

          {/* Full name */}
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
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
              placeholder="Confirm Password"
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

          <button type="submit">Sign Up</button>
        </form>

        <div className="signup-with">
          <span className="line"></span>
          <p>or Sign up with</p>
          <span className="line"></span>
        </div>

        <div className="social-icons">
          <button className="social google">
            <FaGoogle />
          </button>

          <button className="social facebook">
            <FaFacebookF />
          </button>

          <button className="social x">
            <FaXTwitter />
          </button>
        </div>

        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
