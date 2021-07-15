import React from "react";
import SignupPageImage from "../assets/signup.png";

import "../styles/Signin.css";

const Signin = () => {
  return (
    <div>
      <div>
        <div className="row signin-page-container">
          <div className="col-6 signin-form-col">
            <div className="signin-form-container">
              <div className="signin-form" style={{ margin: "0 auto" }}>
                <div className="signin-header mb-3">
                  <h3>Signin</h3>
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
                <div className="signin-btn-container mt-3">
                  <button className="btn btn-primary" type="button">
                    Signin
                  </button>
                </div>
                <div className="alternate-signin">
                  <label>
                    Don't have an account?
                    <strong>Sign up</strong>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 singup-img-col">
            <div className="signin-img-container">
              <img src={SignupPageImage} width="100%" height="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
