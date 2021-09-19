import Loading from "components/Common/Loading";
import { GET_USER } from "constants/localStorage";
import SeatList from "features/TicketRoom/components/SeatList";
import SeatPay from "features/TicketRoom/components/SeatPay";
import {
  fetchTicketList,
  selectTicketLoading,
} from "features/TicketRoom/ticketSlice";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import useStyles from "./style";
import "./TicketRoomMB.scss";

const Mobile = () => {
  const [isDisableBtnRight, setDisableBtnRight] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const classes = useStyles({ isDisableBtnRight });
  const steps = ["CHỌN GHẾ", "THANH TOÁN"];

  const getContentBtn = () => {
    switch (activeStep) {
      case 0:
        return { left: "A1", right: "TIẾP TỤC" };
      case 1:
        return { left: "QUAY LẠI", right: "ĐẶT VÉ" };
      case 2:
        return { left: "MUA THÊM VÉ PHIM NÀY", right: "QUAY VỀ TRANG CHỦ" };
      default:
        return {};
    }
  };

  return (
    <div className="seatlist-mobile">
      <section className={classes.top}>
        {steps.map((label, i) => (
          <Fragment key={label}>
            {activeStep === i && (
              <p className={classes.stepName}>{`${String(i + 1)}. ${label}`}</p>
            )}
          </Fragment>
        ))}
      </section>

      {/* empty */}
      <div className={classes.empty}></div>

      {/* content: step 1, step2 */}
      <div>
        <div style={{ display: activeStep === 0 ? "block" : "none" }}>
          <SeatList />
        </div>
        <div
          className="seatpay-mobile"
          style={{ display: activeStep === 1 ? "block" : "none" }}
        >
          <SeatPay />
        </div>
        <div style={{ height: 70 }}></div>
      </div>

      {/* bottom */}
      <section className={classes.bottom}>
        <button className={`${classes.btnLeft} ${classes.btnBottom}`}>
          {getContentBtn().left}
        </button>
        <button className={`${classes.btnRight} ${classes.btnBottom}`}>
          {getContentBtn().right}
        </button>
      </section>
    </div>
  );
};

export default memo(Mobile);
