import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import Alert from "@material-ui/lab/Alert";

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Username không được bỏ trống!")
    .matches(/^[a-zA-Z0-9]*$/, "Username không được chứa ký tự đặc biệt!"),
  matKhau: yup.string().required("Password không được bỏ trống!"),
});

const SignInForm = ({ setIsSignIn, isSignIn, onSubmit }) => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const handleSignInSubmit = async (values) => {
    try {
      setError("");

      await onSubmit?.(values);
      toast.success("Đăng nhập thành công!");
    } catch (error) {
      setError("Username hoặc Password không đúng!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignInSubmit)}
      className="sign-in-form form"
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
          <div>
            <input
              type="text"
              className="input-field"
              {...register("taiKhoan")}
            />
            <label className="label">Username</label>
          </div>
          <div className="helper-error">{errors.taiKhoan?.message}</div>
        </div>

        <div className="input-wrap">
          <div>
            <input
              type="password"
              className="input-field"
              {...register("matKhau")}
            />
            <label className="label">Password</label>
          </div>
          <div className="helper-error">{errors.matKhau?.message}</div>
        </div>

        {error && (
          <Alert variant="standard" severity="error">
            {error}
          </Alert>
        )}
        <button type="submit" className="sign-btn">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
