import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="sign-up">
      <div className="left-content">
        <h3>Welcome Back</h3>
        <p>To keep connected with us please login with your personal info</p>

        <Link to="/login" className="sign-in">
          Sign in
        </Link>
      </div>

      <div className="signup-content">
        <form>
          <h2 className="title">Create an Account</h2>

          {/* Full name */}
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Full name" />
          </div>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
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
              placeholder="Confirm Password"
            />
            <span
              className="icon right"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

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
