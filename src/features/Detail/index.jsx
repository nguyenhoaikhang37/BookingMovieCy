import {
  fetchDetailMovie,
  selectHomeMovieDetail,
} from "features/Home/homeSlice";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import "./Detail.scss";
import { Link } from "react-router-dom";
import {
  fetchTicketList,
  selectTicketList,
} from "features/TicketRoom/ticketSlice";
const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(0);
  const [cumRap, setCumRap] = useState([]);
  const [height6, setHeight6] = useState("");
  const maPhim = match.params.maPhim;
  const movieDetail = useSelector(selectHomeMovieDetail);

  useEffect(() => {
    dispatch(fetchDetailMovie(maPhim));
    window.scrollTo(0, 0);
    // fetch API layThongTinLichChieuPhim
  }, []);
<<<<<<< HEAD
  console.log(movieDetail);

  const overviewClick = () => {
    setOverView("active");
    setReview("");
    setShowtimes("");
  };
  const reviewClick = () => {
    setReview("active");
    setOverView("");
    setShowtimes("");
  };
  const showtimeClick = () => {
    setShowtimes("active");
    setReview("");
    setOverView("");
  };
=======
  useEffect(() => {
    if (movieDetail?.heThongRapChieu.length === 6) {
      setHeight6("info-body-showtimes-height6");
    } else {
      setHeight6("");
    }
    setCumRap(movieDetail?.heThongRapChieu.slice(0, 1)[0].cumRapChieu);
  }, [movieDetail]);
  //tét
>>>>>>> detail-movie
  const fetchCumRap = (cumRap) => {
    setCumRap(cumRap);
  };
  console.log("cumrap", height6);
  return (
    <div
      className="container"
      style={{ minHeight: "90vh", marginTop: "15rem" }}
    >
      <div className="grid-container">
        <div className="grid-item1">
          <img src={movieDetail?.hinhAnh} />
        </div>
        <div className="grid-item2">
          <h1>{movieDetail?.tenPhim.toUpperCase()}</h1>
          <div className="rate">
            <div className="point">
              <span>{movieDetail?.danhGia}</span>/10
            </div>
            <div className="user-rate">Rate this movie :</div>
          </div>
          <p>{movieDetail?.moTa}</p>
        </div>
      </div>

      <div className="info">
        <div className="info-header">
          <ul className="info-header-ul">
            <li className={`info-header-li`}>
              <a>showtimes</a>
            </li>
          </ul>
        </div>
        <div className="info-body">
          <div className="info-body-showtimes">
            <ul className="info-body-showtimes-ul">
              {movieDetail?.heThongRapChieu.map((item, index) => {
                return (
                  <li
                    key={index}
                    id="cum-rap"
                    className={`info-body-showtimes-item ${
                      isActive === index ? "activeCumRap" : ""
                    }`}
                  >
                    <a
                      onClick={() => {
                        setIsActive(index);
                        fetchCumRap(item.cumRapChieu);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <img src={item.logo} />
                      {item?.tenHeThongRap}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className={`info-body-showtimes-main ${height6}`}>
              {cumRap?.map((item, index) => {
                return (
                  <div className="rap-chieu" key={index}>
                    <div className="rap-chieu-info">
                      <img style={{ height: "80px" }} src={item.hinhAnh} />
                      <div className="rap-chieu-content">
                        <h3>{item.tenCumRap}</h3>
                        <p>{item.diaChi}</p>

                        <div className="lich-chieu">
                          {item.lichChieuPhim
                            .slice(0, 6)
                            .map((lichChieu, index) => {
                              return (
                                <span key={index}>
                                  <Link
                                    to={`/ticketroom/${lichChieu.maLichChieu}`}
                                  >
                                    {dayjs(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </Link>
                                </span>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
