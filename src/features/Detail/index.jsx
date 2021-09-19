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
const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const [overView, setOverView] = useState("active");
  const [review, setReview] = useState("");
  const [showtimes, setShowtimes] = useState("");
  const [cumRap, setCumRap] = useState([]);
  const [date, setDate] = useState([]);
  const maPhim = match.params.maPhim;
  const movieDetail = useSelector(selectHomeMovieDetail);

  useEffect(() => {
    dispatch(fetchDetailMovie(maPhim));
  }, []);
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
  const fetchCumRap = (cumRap) => {
    setCumRap(cumRap);
  };

  return (
    <div
      className="container"
      style={{ minHeight: "90vh", marginTop: "15rem" }}
    >
      <div class="grid-container">
        <div class="grid-item1">
          <img src={movieDetail?.hinhAnh} />
        </div>
        <div class="grid-item2">
          <h1>{movieDetail?.tenPhim.toUpperCase()}</h1>
          <div className="rate">
            <div className="point">
              <span>{movieDetail?.danhGia}</span>/10
            </div>
            <div className="user-rate">Rate this movie :</div>
          </div>
          <div className="info">
            <div className="info-header">
              <ul className="info-header-ul">
                <li
                  className={`info-header-li ${overView}`}
                  onClick={overviewClick}
                >
                  <a>Overview</a>
                </li>
                <li
                  className={`info-header-li ${review}`}
                  onClick={reviewClick}
                >
                  <a>Reviews</a>
                </li>
                <li
                  className={`info-header-li ${showtimes}`}
                  onClick={showtimeClick}
                >
                  <a>showtimes</a>
                </li>
              </ul>
            </div>
            <div className="info-body">
              {overView === "active" ? (
                <p className="info-body-overview">{movieDetail?.moTa}</p>
              ) : (
                ""
              )}
              {review === "active" ? <h1>review</h1> : ""}
              {showtimes === "active" ? (
                <div className="info-body-showtimes">
                  <ul className="info-body-showtimes-ul">
                    {movieDetail.heThongRapChieu.map((item, index) => {
                      return (
                        <li
                          key={index}
                          id="cum-rap"
                          className="info-body-showtimes-item"
                        >
                          <a
                            onClick={() => {
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
                  <div className="info-body-showtimes-main">
                    {cumRap.map((item, index) => {
                      return (
                        <div className="rap-chieu" key={index}>
                          <div className="rap-chieu-info">
                            <img
                              style={{ height: "80px" }}
                              src={item.hinhAnh}
                            />
                            <div className="rap-chieu-content">
                              <h3>{item.tenCumRap}</h3>
                              <p>{item.diaChi}</p>

                              <div className="lich-chieu">
                                {item.lichChieuPhim
                                  .slice(0, 6)
                                  .map((lichChieu, index) => {
                                    return (
                                      <span>
                                        <Link
                                          to={`/ticketroom/${lichChieu.maLichChieu}`}
                                        >
                                          {dayjs(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
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
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
