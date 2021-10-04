import userApi from "apis/userApi";
import React, { useState } from "react";
import "./Auth.scss";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";

import { useDispatch } from "react-redux";
import { authActions } from "./authSlice";
import { history } from "../../App";
import { GET_USER } from "constants/localStorage";
import { Redirect } from "react-router";
const userLS = localStorage.getItem(GET_USER);
const Auth = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignInSubmit = async (formValues) => {
    const { content } = await userApi.dangNhap(formValues);
    dispatch(authActions.setUser(content));
    localStorage.setItem(GET_USER, JSON.stringify(content));
    history.goBack();
  };

  const handleSignUpSubmit = async (formValues) => {
    const newFormValues = { ...formValues, maNhom: "GP00" };
    await userApi.dangKy(newFormValues);
    setIsSignIn(!isSignIn);
  };

  if (userLS) return <Redirect to="/home" />;

  return (
    <main className={`${isSignIn && "sign-up-mode"}`}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {/* SIGN IN */}
            <SignInForm
              isSignIn={isSignIn}
              setIsSignIn={setIsSignIn}
              onSubmit={handleSignInSubmit}
            />

            {/* SIGN UP */}
            <SignUpForm
              isSignIn={isSignIn}
              setIsSignIn={setIsSignIn}
              onSubmit={handleSignUpSubmit}
            />
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
