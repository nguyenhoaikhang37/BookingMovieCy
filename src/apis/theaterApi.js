import axiosClient from "./axiosClient";

const theaterApi = {
  layThongTinHeThongRap() {
    const url = "/QuanLyRap/LayThongTinHeThongRap";
    return axiosClient.get(url);
  },

  layThongTinLichChieuPhim(maPhim) {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return axiosClient.get(url);
  },
};

export default theaterApi;
