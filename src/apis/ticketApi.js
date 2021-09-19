import axiosClient from "./axiosClient";

const ticketApi = {
  layDanhSachPhongVe(maLichChieu) {
    const url = `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return axiosClient.get(url);
  },
  datVe(ve) {
    const url = "/QuanLyDatVe/DatVe";
    return axiosClient.post(url, ve);
  },
};

export default ticketApi;
