import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

function Login() {
  return (
    <div className="LoginSignup">
      <div className="login-form gradient-custom1">
        <div className="text">LOGIN</div>
        <form>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input type="text" placeholder="Email or Phone" />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input type="password" placeholder="Password" />
          </div>
          <button>LOGIN</button>
          <div class="d-flex justify-content-center text-center mt-4 pt-1">
            <a href="#!" class="text-white">
              <i class="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-google fa-lg"></i>
            </a>
          </div>
          <div className="link">
            <a href="#">Forgot Password</a>
          </div>
          <div className="link">
            Not a member?
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
