import React from "react";
import { useState } from "react";
import EventSeatRoundedIcon from "@material-ui/icons/EventSeatRounded";
import { useDispatch } from "react-redux";
import { ticketActions } from "features/TicketRoom/ticketSlice";
import { memo } from "react";
const SeatItem = ({ ghe, index }) => {
  const [seatActive, setSeatActive] = useState(false);
  const dispatch = useDispatch();
  const handleSeatClick = () => {
    if (ghe.daDat) return;
    setSeatActive(!seatActive);
    dispatch(ticketActions.addTicketStore(ghe));
  };
  return (
    <div
      onClick={handleSeatClick}
      className={`seat-item ${
        ghe.daDat
          ? "seat-item-sold"
          : seatActive
          ? "seat-item-active"
          : ghe.loaiGhe == "Vip" && "seat-item-vip"
      }`}
    >
      {(index === 0 || index % 16 === 0) && (
        <p className="seat-label">{ghe.label.slice(0, 1)}</p>
      )}
      <p className="seat-number">
        {ghe.daDat ? (
          <i className="bx bx-x seat-icon-x"></i>
        ) : (
          seatActive && ghe.label.slice(1)
        )}
      </p>
      <EventSeatRoundedIcon style={{ fontSize: "16px" }} />
    </div>
  );
};

export default memo(SeatItem);
