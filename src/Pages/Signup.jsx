import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const handleSubmit = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    // Passwords do not match, handle this case (e.g., show an error message).
    console.error("Passwords do not match");
  } else {
    console.log("Signup successful");
  }
};


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    const isValid = isEmailValid(inputValue);

    setIsValidEmail(isValid);
    setEmail(inputValue);
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const isValidNumber = /^\d{10}$/.test(inputValue);

    setIsValidPhoneNumber(isValidNumber);
    setPhoneNumber(inputValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    } else {
      console.log("Signup successful");
    }

  
  };

  return (
    <div className="LoginSignup">
      <div className="login-form gradient-custom1">
        <div className="text">SIGN UP</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="fas fa-user"></div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{ borderColor: isValidEmail ? "" : "red" }}
            />
          </div>
          {!isValidEmail && (
            <div style={{ color: "red", marginTop: "5px" }}>
              Enter a valid email address.
            </div>
          )}
          <div className="field">
            <div className="fas fa-mobile-alt"></div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              style={{ borderColor: isValidPhoneNumber ? "" : "red" }}
            />
          </div>
          {!isValidPhoneNumber && (
            <div style={{ color: "red", marginTop: "5px" }}>
              Enter a 10-digit phone number.
            </div>
          )}
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              type="password"
              placeholder="Re-enter Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {password !== confirmPassword && (
            <div style={{ color: "red", marginTop: "5px" }}>
              Password does not match{" "}
            </div>
          )}
          <button type="submit">SIGN UP</button>
          <div className="d-flex justify-content-center text-center mt-4 pt-1">
            <a href="#!" className="text-white">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-google fa-lg"></i>
            </a>
          </div>
          <div className="link">
            Already have an account?
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

