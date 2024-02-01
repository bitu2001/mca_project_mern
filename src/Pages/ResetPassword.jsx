import React, { useState } from "react";
import "../Styles/Login.css";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic for handling the password reset submission
    if (newPassword === confirmPassword) {
      console.log("Password reset submitted with new password:", newPassword);
      // You can include logic here to update the password
    } else {
      console.log("Passwords do not match");
      // You may want to handle the case where passwords do not match
    }
  };

  return (
    <div className="LoginSignup">
      <div className="login-form gradient-custom1">
        <div className="text">RESET PASSWORD</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              type="password"
              placeholder="Reenter Password"
              value={confirmPassword}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>

        <div className="link">
          Remember your password?
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
