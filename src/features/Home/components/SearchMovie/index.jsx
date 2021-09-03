import React from "react";
import "./SearchMovie.scss";

const SearchMovie = () => {
  return (
    <section id="search" className="booking">
      <div className="container">
        <h2 className="heading__title">Đặt vé</h2>
        <div className="booking-main">
          <div className="booking-item">
            <select>
              <option selected value="0">
                Phim
              </option>
              <option value="1">No Wrapper</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
            </select>
          </div>
          <div className="booking-item">
            <select>
              <option selected value="0">
                Rạp
              </option>
              <option value="1">No Wraper</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
            </select>
          </div>
          <div className="booking-item">
            <select>
              <option selected value="0">
                Ngày xem
              </option>
              <option value="1">No Wrapper</option>
              <option value="2">No JS</option>
              <option value="3">Nice!</option>
            </select>
          </div>
          <div className="booking-item">
            <select>
              <option selected value="0">
                Xuất chiếu
              </option>
              <option value="1">No Wrapper</option>
              <option value="2">No JSNo JSNo JSNo JSNo JSNo JS</option>
              <option value="3">Nice!</option>
            </select>
          </div>
          <div className="booking-item">
            <a className="btnTrailer booking-btn">
              <span> MUA VÉ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchMovie;
