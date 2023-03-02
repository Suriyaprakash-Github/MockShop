import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../store/LoginContext";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const authCtx = useContext(LoginContext);

  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const signUpHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBR4u_BSaWshZMGUyjNfLnS-mFe_ObreLM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBR4u_BSaWshZMGUyjNfLnS-mFe_ObreLM";
    }
    fetch(
      url,

      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken, data.email);
        history("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form
          onSubmit={submitHandler}
          style={{
            width: "50%",
            backgroundColor: "#343a40",
            padding: "2rem",
            margin: "2rem",
            borderRadius: "0.4rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 style={{ color: "white" }}>{isLogin ? "Login" : "Sign Up"}</h3>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>
          <Form.Group
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {!isLoading && (
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#343a40" }}
              >
                {isLogin ? "Login" : "Create Account"}
              </Button>
            )}
            {isLoading && <p>Loading..</p>}
            <Button
              onClick={signUpHandler}
              style={{ backgroundColor: "#343a40" }}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
