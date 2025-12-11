import { useState } from "react";
import { registerUser } from "../../apis/registration";
import "./Registration.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  // Submit users registration
  const handleSubmitRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(
        firstName,
        lastName,
        email,
        gender,
        dob,
        phoneNumber
      );

      // console.log("Full API Response:", response?.data);

      if (response?.status === 200) {
        alert("Registration Successful");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.error("Error during request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <main>
        {/* <div className="pop-up">
          <div className="notification">
            <img
              className="icons"
              src="./assets/images/icon-success-check.svg"
              alt="icon-success-check"
            />

            <p className="notification-text">Message Sent!</p>
          </div>

          <p className="pop-up-desc">
            Thanks for completing the form. We'll be in touch soon!
          </p>
        </div> */}

        <div className="container">
          <h2 className="container-title">Registration Form</h2>

          <form onSubmit={handleSubmitRequest}>
            <div className="grid-two">
              {/* First Name */}
              <div className="input-group">
                <label for="firstName">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <small className="error-msg-one"></small>
              </div>

              {/* Last Name */}
              <div className="input-group">
                <label for="lastName">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <small className="error-msg-one"></small>
              </div>
            </div>

            {/* Email Address */}
            <div className="grid-one">
              <div className="input-group">
                <label for="email">
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onBlur={validateEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <small className="error-msg-one"></small>
              </div>
            </div>

            <div className="grid-two">
              {/* Gender */}
              <div className="input-group">
                <label for="gender">
                  Gender <span>*</span>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <small className="error-msg-one"></small>
              </div>

              {/* Date of Birth */}
              <div className="input-group">
                <label for="dateOfBirth">
                  Date of Birth <span>*</span>
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                //   required
                />
                <small className="error-msg-one"></small>
              </div>
            </div>

            {/* Phone Number */}
            <div className="grid-one">
              <div className="input-group">
                <label for="phoneNumber">
                  Phone Nmuber <span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Doe"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <small className="error-msg-one"></small>
              </div>
            </div>

            {/* Message */}
            <div className="grid-one">
              <div className="input-group">
                <label for="message">
                  Message <span>*</span>
                </label>
                <textarea rows="6"></textarea>
                <small className="error-msg-two"></small>
              </div>
            </div>

            <div>
              <div className="consent">
                <input type="checkbox" className="check-box" required />
                <p className="consent-text">
                  I consent to being contacted by the team <span>*</span>
                </p>
              </div>

              <small className="error-msg-three"></small>
            </div>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          Coded by
          <a href="https://www.linkedin.com/in/emmanuelozo/">
            Emmanuel Ozoemena
          </a>
        </div>
      </main>
    </>
  );
};

export default Registration;
