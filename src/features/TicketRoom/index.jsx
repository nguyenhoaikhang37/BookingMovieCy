import {
  fetchDetailMovie,
  selectHomeMovieDetail,
} from "features/Home/homeSlice";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
const TicketRoom = ({ match }) => {
  const maLichChieu = match.params.id;
  return (
    <div
      className="container"
      style={{ minHeight: "90vh", marginTop: "15rem" }}
    >
      tick
    </div>
  );
};

export default TicketRoom;
