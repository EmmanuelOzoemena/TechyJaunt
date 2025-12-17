import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Signup.css";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    console.log(email);
    console.log(password);
  };

  return (
    <div className="sign-up">
      <Sidebar />

      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Welcome Back</h2>

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

          <p className="agreement-text">
            By continuing you agree with our term service and privacy policy
          </p>

          <button type="submit">Login</button>
        </form>

        <div className="signup-with">
          <span className="line"></span>
          <p>or Login with</p>
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
          Don't have an account? <Link to="/">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
