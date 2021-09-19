import axiosClient from "./axiosClient";

const userApi = {
  dangNhap(values) {
    const url = `/QuanLyNguoiDung/DangNhap`;
    return axiosClient.post(url, values);
  },
  dangKy(values) {
    const url = `/QuanLyNguoiDung/DangKy`;
    return axiosClient.post(url, values);
  },
  layThongTinTaiKhoan() {
    const url = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return axiosClient.post(url);
  },
};

export default userApi;
