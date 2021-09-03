import dayjs from "dayjs";
import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";
import { NavLink } from "react-router-dom";
import { randomCategory } from "utils";

const MovieItem = ({ movie }) => {
  const [isOpen, setOpen] = useState(false);
  //Lấy id cuối của trailer
  const index = movie.trailer.lastIndexOf("/");
  const idTrailer = movie.trailer.slice(index + 1);

  return (
    <Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={idTrailer}
        onClose={() => setOpen(false)}
      />
      <div className="film__item">
        <div className="film__box">
          <div className="film__overlay">
            <i
              className="bx bx-play film-play-icon"
              style={{ color: "#ffffff" }}
              onClick={() => setOpen(true)}
            ></i>
            <NavLink to={`/detail/${movie.maPhim}`}>
              <p className="film__overlay-read">Movie Detail</p>
            </NavLink>
            <p className="film__overlay-date">
              Released: {dayjs(movie.ngayKhoiChieu).format("MMM D, YYYY")}
            </p>
          </div>
          <img src={movie.hinhAnh} className="film__img" />
        </div>
        <div className="film-content">
          <NavLink to={`/detail/${movie.maPhim}`}>
            <h2 className="film__name">{movie.tenPhim}</h2>
          </NavLink>
          <div className="film-footer">
            <p className="film-rating">1hr 25min | {randomCategory()}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieItem;
