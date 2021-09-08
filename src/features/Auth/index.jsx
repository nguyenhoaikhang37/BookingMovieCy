import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";
const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-field");

    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
      });
    });
  }, []);
  console.log(isSignIn);
  return (
    <main className={`${isSignIn && "sign-up-mode"}`}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <Link to="/" className="logo">
                <img
                  src="https://image.flaticon.com/icons/png/512/1779/1779914.png"
                  alt="logo"
                  className="logo-img"
                />
                Movie<span>.</span>Cy
              </Link>
              <div className="heading">
                <h2>Sign in</h2>
                <h6>Not registered yet?</h6>
                <span
                  onClick={() => {
                    setIsSignIn(!isSignIn);
                  }}
                  className="toggle"
                >
                  Sign up
                </span>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>
                <button type="submit" className="sign-btn">
                  Sign in
                </button>
              </div>
            </form>
            <form
              action="index.html"
              autoComplete="off"
              className="sign-up-form"
            >
              <Link to="/" className="logo">
                <img
                  src="https://image.flaticon.com/icons/png/512/1779/1779914.png"
                  alt="logo"
                  className="logo-img"
                />
                Movie<span>.</span>Cy
              </Link>
              <div className="heading">
                <h2>Sign up</h2>
                <h6>Already have an account?</h6>
                <span
                  onClick={() => {
                    setIsSignIn(!isSignIn);
                  }}
                  className="toggle"
                >
                  Sign in
                </span>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Username</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Full name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Phone</label>
                </div>

                <button type="submit" className="sign-btn">
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="https://wallpaperaccess.com/full/24832.jpg"
                className="image img-1 show"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
