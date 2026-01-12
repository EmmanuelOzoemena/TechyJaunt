import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { signup } from "../../apis/auth.api";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setShowOtp(true);

    try {
      const response = await signup(name, email, password);

      if (response?.status === 201) {
        alert("Registration Successful");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.error("Error during request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // Auto-submit when last digit is entered
    if (value && index === otp.length - 1) {
      const enteredOtp = newOtp.join("");
      handleSubmitOtp(enteredOtp);
    }
  };

  const handleSubmitOtp = (enteredOtp) => {
    console.log("OTP submitted:", enteredOtp);

    // TODO: call verify OTP API here

    setShowOtp(false);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    if (showOtp) {
      inputsRef.current[0]?.focus();
    }
  }, [showOtp]);

  return (
    <div className="sign-up">
      <Sidebar
        title="Welcome Back"
        description="To keep connected with us please login with your personal info"
        buttonLink="Sign in"
        linkDestination="/login"
      />

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
              required
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
              required
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
              placeholder="Confirm Password"
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

          <button type="submit">Sign Up</button>
        </form>

        {showOtp && (
          <div className="otp-overlay">
            <div className="otp-modal">
              <h3>Verify Your Email</h3>

              <p>
                We've sent an email to <br /> <strong>{email}</strong>
              </p>

              <p>
                Enter the verification code sent to your email address. If you
                can't find it, check your spam folder.
              </p>

              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                  />
                ))}
              </div>

              <Link className="not-recieved">Didn't receive an email?</Link>
            </div>
          </div>
        )}

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
