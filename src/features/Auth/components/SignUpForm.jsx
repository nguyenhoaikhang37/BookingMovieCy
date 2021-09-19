import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import Alert from "@material-ui/lab/Alert";

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Username không được bỏ trống!")
    .min(5, "Username chứa ít nhất 5 kí tự!")
    .matches(/^[a-zA-Z0-9]*$/, "Username không được chứa ký tự đặc biệt!"),
  matKhau: yup
    .string()
    .required("Password không được bỏ trống!")
    .max(20, "Password chứa nhiều nhất 20 kí tự!")
    .min(8, "Password chứa ít nhất 8 kí tự!"),
  email: yup
    .string()
    .required("Email không được bỏ trống!")
    .email("Email không đúng định dạng!"),
  soDt: yup
    .string()
    .required("Phone không được bỏ trống!")
    .matches(/^[0-9\-\+]{9,15}$/, "Phone không đúng định dạng!"),
  hoTen: yup.string().required("Full name không được bỏ trống!"),
});

const SignUpForm = ({ setIsSignIn, isSignIn, onSubmit }) => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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

  const handleSignUpSubmit = async (values) => {
    try {
      setError("");
      await onSubmit?.(values);
      toast.success("Đăng ký thành công!");
      reset();
    } catch (error) {
      setError("Email hoặc Username đã tồn tại!");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignUpSubmit)} className="sign-up-form">
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
              {...register("matKhau")}
              type="password"
              className="input-field"
            />
            <label className="label">Password</label>
          </div>
          <div className="helper-error">{errors.matKhau?.message}</div>
        </div>
        <div className="input-wrap">
          <div>
            <input {...register("hoTen")} type="text" className="input-field" />
            <label className="label">Full name</label>
          </div>
          <div className="helper-error">{errors.hoTen?.message}</div>
        </div>
        <div className="input-wrap">
          <div>
            <input {...register("email")} type="text" className="input-field" />
            <label className="label">Email</label>
          </div>
          <div className="helper-error">{errors.email?.message}</div>
        </div>
        <div className="input-wrap">
          <div>
            <input {...register("soDt")} type="text" className="input-field" />
            <label className="label">Phone</label>
          </div>
          <div className="helper-error">{errors.soDt?.message}</div>
        </div>
        {error && (
          <Alert variant="standard" severity="error">
            {error}
          </Alert>
        )}

        <button type="submit" className="sign-btn" disabled={isSubmitting}>
          Sign up
          {isSubmitting && <CircularProgress size={16} color="secondary" />}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
