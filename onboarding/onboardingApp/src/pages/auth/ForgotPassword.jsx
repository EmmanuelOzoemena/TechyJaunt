import { FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    setShowOtp(true);

    console.log(email);
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
      navigate("/reset-password");
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
        title="Forgot Password"
        description="We’ll help you get back into your account quickly and safely.."
        buttonLink="Sign in"
        linkDestination="/login"
      />

      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Forgot Password</h2>

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

          <Link className="another-way">Try another way</Link>

          <button type="submit" className="send-btn">
            Send
          </button>
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
      </div>
    </div>
  );
};

export default ForgotPassword;
