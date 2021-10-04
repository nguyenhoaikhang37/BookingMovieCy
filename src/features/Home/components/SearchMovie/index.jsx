import {
  fetchDetailMovie,
  selectHomeMovieDetail,
  selectHomeMovieOptions,
} from "features/Home/homeSlice";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchMovie.scss";
import dayjs from "dayjs";
import { useHistory } from "react-router";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchSelect, setSearchSelect] = useState({
    movieSelect: undefined,
    theaterSelect: undefined,
    dateSelect: undefined,
    timeSelect: undefined,
  });
  const movieOptions = useSelector(selectHomeMovieOptions);
  const movieDetail = useSelector(selectHomeMovieDetail);
  const arrTheater = movieDetail?.heThongRapChieu.map((x) => x.cumRapChieu);
  // Tách mảng lồng mảng
  const theaterOptions = arrTheater?.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  const dateOptions = theaterOptions?.filter(
    (th) => th.maCumRap == searchSelect?.theaterSelect
  )[0]?.lichChieuPhim;

  useEffect(() => {
    if (!searchSelect.movieSelect) return;
    dispatch(fetchDetailMovie(searchSelect.movieSelect));
  }, [searchSelect.movieSelect]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setSearchSelect({
      ...searchSelect,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`ticketroom/${searchSelect.timeSelect}`);
  };

  return (
    <section id="search" className="booking">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h2 className="heading__title">Đặt vé</h2>
          <div className="booking-main">
            <div className="booking-item">
              <select
                name="movieSelect"
                value={searchSelect.movieSelect || ""}
                onChange={handleChange}
              >
                <option value="" selected>
                  Phim
                </option>
                {movieOptions.map((movie, index) => (
                  <option key={index} value={movie.value}>
                    {movie.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="booking-item">
              <select
                name="theaterSelect"
                value={searchSelect.theaterSelect || ""}
                onChange={handleChange}
              >
                <option value="" selected>
                  Rạp
                </option>
                {!searchSelect.movieSelect ? (
                  <option value="vui long chon phim" disabled>
                    Vui lòng chọn phim
                  </option>
                ) : (
                  <>
                    {theaterOptions?.map((theater, index) => (
                      <option key={index} value={theater.maCumRap}>
                        {theater.tenCumRap}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="booking-item">
              <select
                name="dateSelect"
                value={searchSelect.dateSelect || ""}
                onChange={handleChange}
              >
                <option value="" selected>
                  Ngày chiếu
                </option>
                {!searchSelect.theaterSelect ? (
                  <option value="vui long chon phim" disabled>
                    Vui lòng chọn phim và rạp
                  </option>
                ) : (
                  <>
                    {dateOptions?.map((date, index) => (
                      <option key={index} value={date.maLichChieu}>
                        {dayjs(date.ngayChieuGioChieu).format("DD/MM/YYYY")}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="booking-item">
              <select
                name="timeSelect"
                value={searchSelect.timeSelect || ""}
                onChange={handleChange}
              >
                <option value="" selected>
                  Giờ chiếu
                </option>
                {!searchSelect.dateSelect ? (
                  <option value="vui long chon gio" disabled>
                    Vui lòng chọn phim, rạp và giờ chiếu
                  </option>
                ) : (
                  <>
                    {dateOptions?.map((date, index) => (
                      <option key={index} value={date.maLichChieu}>
                        {dayjs(date.ngayChieuGioChieu).format("	h:mm A")}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="booking-item">
              <button
                disabled={!searchSelect.timeSelect}
                type="submit"
                className={`${
                  !searchSelect.timeSelect && "btn-disable"
                } booking-btn btnTrailer`}
              >
                <span> MUA VÉ</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default memo(SearchMovie);
