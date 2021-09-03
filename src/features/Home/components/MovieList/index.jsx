import { Button, CircularProgress } from "@material-ui/core";
import {
  selectHomeLoading,
  selectHomeMovieList,
} from "features/Home/homeSlice";
import React from "react";
import { useSelector } from "react-redux";
import "./MovieList.scss";

import MovieItem from "../MovieItem";
import { useState } from "react";

const MovieList = () => {
  const isLoading = useSelector(selectHomeLoading);
  const movieList = useSelector(selectHomeMovieList);
  const [isShowing, setIsShowing] = useState("showing");
  const [loadMore, setLoadMore] = useState(10);

  const newMovieList = movieList.filter((movie) => {
    return isShowing == "showing"
      ? movie.dangChieu == true
      : movie.dangChieu == false;
  });

  const handleShowingClick = () => {
    setIsShowing("showing");
    setLoadMore(10);
  };

  const handleComingClick = () => {
    setIsShowing("coming");
    setLoadMore(10);
  };

  const loadMoreMovie = () => {
    console.log("more button");
    setLoadMore((prev) => prev + 5);
  };

  return (
    <section id="film" className="film">
      <div className="container">
        <div className="film-heading">
          <h3
            onClick={handleShowingClick}
            className={`film-title ${isShowing == "showing" && "active"}`}
          >
            <i
              className="bx bx-timer film-icon"
              style={{ color: "#ffffff" }}
            ></i>
            Đang chiếu
          </h3>
          <h3
            onClick={handleComingClick}
            className={`film-title ${isShowing == "coming" && "active"}`}
          >
            <i
              className="bx bx-time-five film-icon film-past-icon"
              style={{ color: "#ffffff" }}
            ></i>
            Sắp chiếu
          </h3>
        </div>
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress
              size={20}
              color="primary"
              style={{ margin: "10rem auto", textAlign: "center" }}
            />
          </div>
        ) : (
          <div className="film-list">
            {newMovieList.slice(0, loadMore).map((movie) => (
              <MovieItem key={movie.maPhim} movie={movie} />
            ))}
          </div>
        )}
        {loadMore < newMovieList.length && (
          <Button
            style={{
              fontSize: "1.3rem",
              margin: "2rem auto",
              display: "block",
            }}
            color="primary"
            variant="outlined"
            onClick={loadMoreMovie}
          >
            Xem thêm
          </Button>
        )}
      </div>
    </section>
  );
};

export default MovieList;
