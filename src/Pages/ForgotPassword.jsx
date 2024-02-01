import React, { useState } from "react";
import "../Styles/Login.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // Added OTP state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the forgot password submission
    console.log("Forgot Password submitted for email:", email);
    // You can include logic here to send a reset password email
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the OTP submission
    console.log("OTP submitted:", otp);
    // You can include logic here to verify the entered OTP
  };

  return (
    <div className="LoginSignup">
      <div className="login-form gradient-custom1">
        <div className="text">FORGOT PASSWORD</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="field">
            <div className="fas fa-key"></div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <button type="submit">RESET PASSWORD</button>
        </form>
        
        <div className="link">
          Already have an account?
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
