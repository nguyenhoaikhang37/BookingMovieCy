import {
  selectTicketList,
  selectTicketStore,
} from "features/TicketRoom/ticketSlice";
import React, { Fragment, memo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./SeatPay.scss";
import useStyles from "./style";

const SeatPay = ({ setPay }) => {
  const { thongTinPhim } = useSelector(selectTicketList);
  const ticketStore = useSelector(selectTicketStore);
  const classes = useStyles();

  useEffect(() => {
    if (ticketStore.length === 0) {
      setPay("");
    }
  }, [ticketStore]);

  const onChangeRadio = (e) => {
    setPay(e.target.value);
  };

  return (
    <div className="seatpay-main">
      <Fragment>
        <div
          className="seatpay-bg"
          style={{
            background: `linear-gradient(to bottom, transparent, #1f1e44), url(${thongTinPhim?.hinhAnh}) top  / cover`,
          }}
        >
          <div className="seatpay-money">
            {ticketStore
              .reduce((total, ticket) => total + ticket.giaVe, 0)
              .toLocaleString()}
            đ
          </div>
        </div>
        <div className="seatpay-info-film">
          <div className="seatpay-info-text">
            <p className="seatpay-text1">Phim:</p>
            <p className="seatpay-text2">{thongTinPhim?.tenPhim}</p>
          </div>
          <div className="seatpay-info-text">
            {ticketStore.length == 0 ? (
              <p className="seatpay-choose">Vui lòng chọn ghế...</p>
            ) : (
              <p className="seatpay-text1">
                Ghế:&nbsp;
                {ticketStore?.map((ticket, index) => (
                  <span key={index}>{ticket.label} </span>
                ))}
              </p>
            )}
            <p className="seatpay-text-money">
              {ticketStore
                .reduce((total, ticket) => total + ticket.giaVe, 0)
                .toLocaleString()}
              đ
            </p>
          </div>
          <div className="seatpay-info-text">
            <p className="seatpay-text1">Ngày giờ chiếu:</p>
            <p className="seatpay-text2">
              {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
            </p>
          </div>
          <div className="seatpay-info-text">
            <p className="seatpay-text1">Cụm rạp:</p>
            <p className="seatpay-text2">{thongTinPhim?.tenCumRap}</p>
          </div>
          <div className="seatpay-info-text">
            <p className="seatpay-text1">Rạp:</p>
            <p className="seatpay-text2">{thongTinPhim?.tenRap}</p>
          </div>
          <div className="seatpay-info-pay">
            <p className="seatpay-text1 seatpay-text-pay">
              Hình thức thanh toán:
            </p>
            {ticketStore.length == 0 ? (
              <p className="seatpay-choose">
                Vui lòng chọn ghế để hiển thị phương thức thanh toán...
              </p>
            ) : (
              <form>
                <div className={classes.formPayment}>
                  <div className={classes.formPaymentItem}>
                    <input
                      onChange={onChangeRadio}
                      className={classes.input}
                      type="radio"
                      name="paymentMethod"
                      value="zalopay"
                    />
                    <img
                      className={classes.img}
                      src="https://movie-booking-project.vercel.app/img/bookticket/zalo.jpg"
                      alt="zalopay"
                    />
                    <label className="input-label">
                      Thanh toán qua ZaloPay
                    </label>
                  </div>
                  <div className={classes.formPaymentItem}>
                    <input
                      className={classes.input}
                      type="radio"
                      name="paymentMethod"
                      value="visa"
                      onChange={onChangeRadio}
                    />
                    <img
                      className={classes.img}
                      src="https://kdq-react-movie-app.surge.sh/images/visa_mastercard.png"
                      alt="visa"
                    />
                    <label className="input-label">Visa, Master, JCB</label>
                  </div>

                  <div className={classes.formPaymentItem}>
                    <input
                      className={classes.input}
                      type="radio"
                      name="paymentMethod"
                      value="tienmat"
                      onChange={onChangeRadio}
                    />
                    <img
                      className={classes.img}
                      src="https://bootstraplogos.com/wp-content/uploads/edd/2018/10/logo-4.png"
                      alt="tienmat"
                    />
                    <label className="input-label">Thanh toán tiền mặt</label>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div className="seatpay-info-note">
            <i
              className="bx bxs-info-circle"
              style={{ color: "#fb4226", fontSize: "14px" }}
            ></i>
            <span>Vé đã mua không thể đổi hoặc hoàn tiền</span>
            <p>
              Mã vé sẽ được gửi qua tin nhắn&nbsp;
              <span className="info-note-text">ZMS</span> (tin nhắn Zalo)
              và&nbsp;
              <span className="info-note-text">Email</span> đã nhập.
            </p>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default memo(SeatPay);
