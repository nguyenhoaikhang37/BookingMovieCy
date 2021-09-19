import {
  fetchDetailMovie,
  selectHomeMovieDetail,
} from "features/Home/homeSlice";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import axios from "axios";
import "./TicketRoom.scss";
// import numeral from "numeral";
const TicketRoom = ({ match }) => {
  const maLichChieu = match.params.id;
  const [thongTinPhim, setThongTinPhim] = useState([]);
  const [listGhe, setListGhe] = useState([]);
  const [gheDaDat, setGheDaDat] = useState([]);
  const [cssSelected, setCssSelected] = useState("");
  const [tongTien, setTongTien] = useState(0);
  useEffect(() => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk",
      },
    })
      .then((res) => {
        setListGhe(res.data.content.danhSachGhe);
        setThongTinPhim(res.data.content.thongTinPhim);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const addGhe = (ghe) => {
    const gheDaDatClone = [...gheDaDat];
    const index = gheDaDatClone.findIndex((item) => item.maGhe === ghe.maGhe);
    if (index === -1) {
      gheDaDatClone.push(ghe);
      setCssSelected("active");
    } else if (index !== -1) {
      gheDaDatClone.splice(index, 1);
      setCssSelected("");
    }
    let thanhTien = 0;
    if (gheDaDatClone.length !== 0) {
      for (let item of gheDaDatClone) {
        thanhTien += item.giaVe;
        setTongTien(thanhTien);
      }
    } else {
      setTongTien(0);
    }

    setGheDaDat(gheDaDatClone);
  };
  return (
    <div
      className="container"
      style={{ minHeight: "90vh", marginTop: "15rem" }}
    >
      <div className="main">
        <div className="main-left">
          <div className="monitor">
            <div className="monitor-light"></div>
          </div>
          <div className="list-ghe">
            {listGhe.map((item) => {
              let findIndex = gheDaDat.findIndex(
                (ghe) => ghe.maGhe === item.maGhe
              );
              let cssDangDat = findIndex !== -1 ? "ghe-dang-dat" : "";
              let cssDaDat = item.daDat ? "ghe-da-dat" : "";
              let cssVip = item.loaiGhe == "Vip" ? "ghe-vip" : "";
              return (
                <button
                  type="button"
                  disabled={item.daDat}
                  onClick={() => {
                    addGhe(item);
                  }}
                  key={item.maGhe}
                  className={`ghe ${cssSelected} ${cssDaDat} ${cssVip} ${cssDangDat}`}
                >
                  {item.daDat ? "x" : item.tenGhe}
                </button>
              );
            })}
          </div>
        </div>
        <div className="main-right">
          <h1>{thongTinPhim.tenPhim}</h1>

          <p>Địa điểm : {thongTinPhim.diaChi}</p>
          <p>
            Ngày chiếu :{" "}
            {dayjs(thongTinPhim.ngayChieuGioChieu).format("DD/MM/YYYY hh:mm A")}
            {" : "}
            {thongTinPhim.tenRap}
          </p>

          <div
            className="ghe-info"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h2>Ghế : </h2>
            <div className="list-ghe-da-dat">
              {gheDaDat.map((item) => {
                return (
                  <span className="ghe-da-dat">
                    <button
                      type="button"
                      onClick={() => {
                        addGhe(item);
                      }}
                    >
                      {item.tenGhe} Giá : {console.log(typeof item.giaVe)}
                      {/* {numeral(Number(item.giaVe)).format("0,0")} Đ */}
                    </button>
                  </span>
                );
              })}
            </div>
          </div>

          <p>Thông tin emai cuar user</p>

          <p>Thông tin phone cuar user</p>
          <h1 style={{ textAlign: "left" }} className="total-cash">
            {/* Tổng tiền : {numeral(Number(tongTien)).format("0,0")} Đ */}
          </h1>
          <button type="button" className="dat-ve">
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketRoom;
