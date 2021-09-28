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
  capNhatThongTinNguoiDung(values) {
    const url = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
    return axiosClient.put(url, values);
  },
};

export default userApi;
