import React from "react";

import SignupPageImage from "../assets/signup.png";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="row singup-page-container">
        <div className="col-6 singup-form-col">
          <div className="signup-form-container">
            <div className="signup-form" style={{ margin: "0 auto" }}>
              <div className="signup-header mb-3">
                <h3>Signup</h3>
                <label>
                  Login with your data that you entered during your
                  registration.
                </label>
              </div>
              <div className="mb-3">
                <span>
                  <label> Your e-mail</label>
                </span>
                <span>
                  <input className="form-control" />
                </span>
              </div>
              <div>
                <span>
                  <label> Password</label>
                </span>
                <span>
                  <input className="form-control" />
                </span>
              </div>
              <div className="signup-btn-container mt-3">
                <button className="btn btn-primary" type="button">
                  Signup
                </button>
              </div>
              <div className="alternate-signin">
                <label>
                  Already have an account?
                  <strong>Sign in</strong>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 singup-img-col">
          <div className="signup-img-container">
            <img src={SignupPageImage} width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
