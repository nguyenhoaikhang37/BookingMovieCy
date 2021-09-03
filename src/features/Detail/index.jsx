import {
  fetchDetailMovie,
  selectHomeMovieDetail,
} from "features/Home/homeSlice";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const maPhim = match.params.maPhim;
  const movieDetail = useSelector(selectHomeMovieDetail);

  useEffect(() => {
    dispatch(fetchDetailMovie(maPhim));
  }, []);

  return (
    <div
      className="container"
      style={{ minHeight: "90vh", marginTop: "15rem" }}
    >
      detail page
    </div>
  );
};

export default Detail;
