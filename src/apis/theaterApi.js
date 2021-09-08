import axiosClient from "./axiosClient";

const theaterApi = {
  layThongTinLichChieuHeThongRap() {
    const url = `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`;
    return axiosClient.get(url);
  },

  layThongTinLichChieuPhim(maPhim) {
    const url = `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return axiosClient.get(url);
  },
};

export default theaterApi;
