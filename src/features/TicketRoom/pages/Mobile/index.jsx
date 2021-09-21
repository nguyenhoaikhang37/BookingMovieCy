import SeatList from "features/TicketRoom/components/SeatList";
import SeatPay from "features/TicketRoom/components/SeatPay";
import {
  selectTicketStore,
  ticketActions,
} from "features/TicketRoom/ticketSlice";
import React, { Fragment, memo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import "./TicketRoomMB.scss";
import Swal from "sweetalert2";
import ticketApi from "apis/ticketApi";
import { useHistory, useParams } from "react-router";

const Mobile = () => {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const ticketStore = useSelector(selectTicketStore);
  const [activeStep, setActiveStep] = useState(0);
  const [isPay, setPay] = useState("");

  const steps = ["CHỌN GHẾ", "THANH TOÁN"];

  const getContentBtn = () => {
    switch (activeStep) {
      case 0:
        return {
          left: ticketStore.map((ticket) => `${ticket.label} `),
          right: "TIẾP TỤC",
        };
      case 1:
        return { left: "QUAY LẠI", right: "ĐẶT VÉ" };
      default:
        return {};
    }
  };

  const handleBackButton = () => {
    setActiveStep(0);
  };

  const handleNextButton = () => {
    setActiveStep(1);
    if (activeStep === 1) {
      Swal.fire({
        title: "Thông tin đặt vé sẽ được gửi qua email",
        text: "Hãy kiểm tra thông tin trước khi xác nhận!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng ý",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            ticketApi.datVe({
              maLichChieu: params.id,
              danhSachVe: ticketStore.map((ve) => {
                return { maGhe: ve.maGhe, giaVe: ve.giaVe };
              }),
            });

            dispatch(ticketActions.removeTicketStore());

            await Swal.fire("Success!", "Đặt vé thành công!", "success");

            history.push("/home");
          } catch (error) {
            console.log("Failed to dat ve", error);
          }
        }
      });
    }
  };

  const handleCloseClick = () => {
    Swal.fire({
      title: "Thông báo!",
      text: "Bạn chắc chắn muốn thoát khỏi trang đặt vé?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          history.push("/home");
          window.location.reload();
        } catch (error) {
          console.log("Failed to close", error);
        }
      }
    });
  };

  return (
    <div className="seatlist-mobile">
      <section className={classes.top}>
        <i onClick={handleCloseClick} className="fas fa-times icon-close"></i>
        {steps.map((label, i) => (
          <Fragment key={label}>
            {activeStep === i && (
              <p className={classes.stepName}>{`${String(i + 1)}. ${label}`}</p>
            )}
          </Fragment>
        ))}
        <div></div>
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
          <SeatPay setPay={setPay} />
        </div>
        <div style={{ height: 70 }}></div>
      </div>

      {/* bottom */}
      <section className={classes.bottom}>
        <button
          onClick={handleBackButton}
          className={`${classes.btnLeft} ${classes.btnBottom} btn-Left`}
        >
          {getContentBtn().left}
        </button>
        {activeStep === 0 ? (
          <button
            disabled={ticketStore.length === 0 ? true : false}
            onClick={handleNextButton}
            className={`${classes.btnRight} ${classes.btnBottom} ${
              ticketStore.length !== 0 && classes.btnRightActive
            }`}
          >
            {getContentBtn().right}
          </button>
        ) : (
          <button
            disabled={ticketStore.length !== 0 && isPay ? false : true}
            onClick={handleNextButton}
            className={`${classes.btnRight} ${classes.btnBottom} ${
              ticketStore.length !== 0 && isPay && classes.btnRightActive
            }`}
          >
            {getContentBtn().right}
          </button>
        )}
      </section>
    </div>
  );
};

export default memo(Mobile);
