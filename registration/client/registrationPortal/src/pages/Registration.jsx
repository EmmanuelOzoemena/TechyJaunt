import "./Registration.css";

const Registration = () => {
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

          <form action="">
            <div className="grid-two">
              {/* First Name */}
              <div className="input-group">
                <label for="firstName">
                  First Name <span>*</span>
                </label>
                <input type="text" required />
                <small className="error-msg-one"></small>
              </div>

              {/* Last Name */}
              <div className="input-group">
                <label for="lastName">
                  Last Name <span>*</span>
                </label>
                <input type="text" required />
                <small className="error-msg-one"></small>
              </div>
            </div>

            {/* Email Address */}
            <div className="grid-one">
              <div className="input-group">
                <label for="email">
                  Email Address <span>*</span>
                </label>
                <input type="email" className="email-address" required />
                <small className="error-msg-one"></small>
              </div>
            </div>

            <div className="grid-two">
              {/* Gender */}
              <div className="input-group">
                <label for="gender">
                  Gender <span>*</span>
                </label>
                <select name="" id="">
                  <option disabled>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <small className="error-msg-one"></small>
              </div>

              {/* Date of Birth */}
              <div className="input-group">
                <label for="dateOfBirth">
                  Date of Birth <span>*</span>
                </label>
                <input type="date" required />
                <small className="error-msg-one"></small>
              </div>
            </div>

            {/* Phone Number */}
            <div className="grid-one">
              <div className="input-group">
                <label for="phoneNumber">
                  Phone Nmuber <span>*</span>
                </label>
                <input type="number" className="email-address" required />
                <small className="error-msg-one"></small>
              </div>
            </div>

            {/* Message */}
            <div className="grid-one">
              <div className="input-group">
                <label for="message">
                  Message <span>*</span>
                </label>
                <textarea rows="6" className="message" required></textarea>
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

            <button
              className="submit-btn"
              type="submit"
              onclick="submitForm(event)"
            >
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
