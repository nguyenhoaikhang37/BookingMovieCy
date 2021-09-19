import axiosClient from "./axiosClient";

const movieApi = {
  layDanhSachPhim() {
    const url = "/QuanLyPhim/LayDanhSachPhim?maNhom=GP09";
    return axiosClient.get(url);
  },
  layDanhSachPhongVe(maLichChieu) {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return axiosClient.get(url);
  },
  layThongTinPhim(maPhim) {
    const url = `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return axiosClient.get(url);
  },
};

export default movieApi;
