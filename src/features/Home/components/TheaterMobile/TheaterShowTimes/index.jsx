import React, { useEffect } from "react";
import { randomCategory } from "utils";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const TheaterShowTimes = ({ ds }) => {
  const calculateTimeout = (ngayChieuGioChieu) => {
    const fakeThoiLuong = 110;
    const timeInObj = new Date(ngayChieuGioChieu);
    const timeOutObj = new Date(
      timeInObj.getTime() + fakeThoiLuong * 60 * 1000
    );
    return timeOutObj.toLocaleTimeString([], { hour12: false }).slice(0, 5);
  };

  return (
    <div className="thater_film_box">
      <div className="theater_film_item">
        <div className="theater_film_img">
          <img src={ds.hinhAnh} />
        </div>
        <div className="theater_film_content">
          <div className="film-name-heading">
            {ds.tenPhim} {ds.hot && <span>HOT</span>}
          </div>
          <div className="film-time">
            120 phút - Thể loại: <span>{randomCategory()}</span>
          </div>
        </div>
      </div>
      <h3 className="digital-text">2D Digital</h3>

      <div className="theater_film_time">
        {ds.lstLichChieuTheoPhim.slice(0, 6).map((lst) => (
          <Link
            to={`/ticketroom/${lst.maLichChieu}`}
            key={lst.maLichChieu}
            className="film-time-item"
          >
            {dayjs(lst.ngayChieuGioChieu).format("HH:ss")}
            <span style={{ color: "#949494" }}>
              &nbsp;{` ~ ${calculateTimeout(lst.ngayChieuGioChieu)}`}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TheaterShowTimes;
