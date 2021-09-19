import SeatList from "features/TicketRoom/components/SeatList";
import SeatPay from "features/TicketRoom/components/SeatPay";
import StepCheckout from "features/TicketRoom/components/StepCheckout";
import React from "react";
import { memo } from "react";
import "./TicketRoomPC.scss";

const Desktop = () => {
  return (
    <div className="ticket-main">
      <div className="ticket-left">
        <div className="ticket-step">
          <StepCheckout />
        </div>
        <div className="ticket-seat-main">
          <SeatList />
        </div>
      </div>
      <div className="ticket-right">
        <SeatPay />
      </div>
    </div>
  );
};

export default memo(Desktop);
