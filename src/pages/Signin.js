import React, { useEffect, useState } from "react";
import { signin } from "../actions/signinAction";
import SignupPageImage from "../assets/signup.png";
import * as signinActions from "../actions/signinAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "../styles/Signin.css";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setshowEmailError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState("");

  const { signin, isAuthenticated } = props;
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/app");
    }
  }, [isAuthenticated]);
  const signIn = (event) => {
    event.preventDefault();
    const userCredentials = {
      email: email,
      password: password,
    };
    signin(userCredentials, history);
  };
  return (
    <div>
      <div>
        <form
          onSubmit={(event) => {
            signIn(event);
          }}
        >
          <div className="row signin-page-container">
            <div className="col-6 signin-form-col">
              <div className="signin-form-container">
                <div className="signin-form" style={{ margin: "0 20%" }}>
                  <div
                    style={{
                      maxWidth: "100%",
                    }}
                  >
                    <h2>TrackB lets you track and analyze your money.</h2>
                    <p>
                      Track and analyze your income and expenditure with TrackB,
                      save more and grow.
                    </p>
                  </div>
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
                      <input
                        className="form-control"
                        type="email"
                        placeholder="email@domain.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </span>
                  </div>
                  <div>
                    <span>
                      <label> Password</label>
                    </span>
                    <span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </span>
                  </div>
                  <div className="signin-btn-container mt-3">
                    <button className="btn btn-primary" type="submit">
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
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userSignin.isAuthUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (userCredentials, history) => {
      dispatch(signinActions.signin(userCredentials, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
