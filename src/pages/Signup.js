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
              <h3>Signup</h3>
              <div>
                <span>
                  <h6> Your e-mail</h6>
                </span>
                <span>
                  <input />
                </span>
              </div>
              <div>
                <span>
                  <h6> Password</h6>
                </span>
                <span>
                  <input />
                </span>
              </div>
              <div className="signup-btn-container">
                <button type="button" className="btn btn-primary">
                  Signup
                </button>
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
