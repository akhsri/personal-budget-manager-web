import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as signupActions from "../actions/signupAction";

import SignupPageImage from "../assets/signup.png";
import "../styles/Signup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastr } from "react-redux-toastr";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setshowEmailError] = useState(false);
  const [showPasswordError, setshowPasswordError] = useState("");
  const [open, setOpen] = useState(false);

  const { userSignUpStatus } = props;

  useEffect(() => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    if(userSignUpStatus){
      setOpen(true);
    }
  }, [userSignUpStatus]);
  const signUp = (event) => {
    const { signup } = props;
    event.preventDefault();
    const userCredentials = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    signup(userCredentials)
      .then((res) => {
        toastr.success("User created");
      })
      .catch((err) => {
        toast.error("Error occured");
        toastr.error("error occured");
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div className="row singup-page-container">
        <div className="col-6 signup-form-col">
          <div className="signup-form-container">
            <form
              onSubmit={(event) => {
                signUp(event);
              }}
            >
              <div className="signup-form" style={{ margin: "0 18%" }}>
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
                <div className="signup-header mb-3">
                  <h3>Signup</h3>
                  <label>
                    Login with your data that you entered during your
                    registration.
                  </label>
                </div>
                <div>
                  <span>
                    <label> Your first name</label>
                  </span>
                  <span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <label> Your last name</label>
                  </span>
                  <span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  </span>
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
                <div className="signup-btn-container mt-3">
                  <button className="btn btn-primary" type="submit">
                    Signup
                  </button>
                </div>
                <div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      Signup successfull, you may login now!
                    </Alert>
                  </Snackbar>
                </div>
                <div className="alternate-signin">
                  <label>
                    Already have an account?
                    <strong>Sign in</strong>
                  </label>
                </div>
              </div>
            </form>
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

const mapStateToProps = (state) => {
  return {
    userSignUpStatus: state.userSignup.signupStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (uesrCredentials) =>
      dispatch(signupActions.signup(uesrCredentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
