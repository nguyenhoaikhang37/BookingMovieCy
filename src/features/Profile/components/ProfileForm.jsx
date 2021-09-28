import { yupResolver } from "@hookform/resolvers/yup";
import { CircularProgress } from "@material-ui/core";
import userApi from "apis/userApi";
import { GET_USER } from "constants/localStorage";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";

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
  hoTen: yup.string().required("Full name không được bỏ trống!"),
});

const ProfileForm = ({ user }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { ...user },
    resolver: yupResolver(schema),
  });
  const userLS = localStorage.getItem(GET_USER);

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

  const handleUpdateProfile = async (formValues) => {
    try {
      const { loaiNguoiDung, thongTinDatVe, ...newFormValues } = formValues;
      await userApi.capNhatThongTinNguoiDung(newFormValues);
      toast.success("Cập nhật thông tin thành công!");
    } catch (error) {
      console.log(error);
    }
  };

  if (!userLS) return <Redirect to="/login" />;

  return (
    <form onSubmit={handleSubmit(handleUpdateProfile)}>
      <div className="actual-form">
        <div className="input-wrap">
          <div>
            <label htmlFor="firstname" className="text-sm">
              Tài khoản
            </label>
            <input
              disabled
              {...register("taiKhoan")}
              id="firstname"
              type="text"
              placeholder="Tài khoản"
              className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-gray-900"
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.taiKhoan?.message}
          </div>
        </div>
        <div className="input-wrap">
          <div>
            <label htmlFor="mk" className="text-sm">
              Mật khẩu
            </label>
            <input
              id="mk"
              {...register("matKhau")}
              type="text"
              placeholder="Mật khẩu"
              className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-gray-900"
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.matKhau?.message}
          </div>
        </div>
        <div className="input-wrap">
          <div>
            <label htmlFor="hoTen" className="text-sm">
              Họ tên
            </label>
            <input
              id="hoTen"
              {...register("hoTen")}
              type="text"
              placeholder="Họ tên"
              className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-gray-900"
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.hoTen?.message}
          </div>
        </div>
        <div className="input-wrap">
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              type="text"
              placeholder="Email"
              className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-coolGray-300 text-gray-900"
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.email?.message}
          </div>
        </div>
        <button
          type="submit"
          className="h-12 px-7 mt-3  text-white transition-colors duration-150 bg-red-400 rounded-lg focus:shadow-outline hover:bg-red-500"
          disabled={isSubmitting}
        >
          Update
          {isSubmitting && <CircularProgress size={16} color="secondary" />}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
