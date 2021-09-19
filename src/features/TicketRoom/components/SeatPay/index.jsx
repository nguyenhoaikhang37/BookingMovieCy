import { CircularProgress } from "@material-ui/core";
import ticketApi from "apis/ticketApi";
import {
  selectTicketList,
  selectTicketStore,
} from "features/TicketRoom/ticketSlice";
import React, { Fragment, useState } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { ticketActions } from "../../ticketSlice";
import "./SeatPay.scss";
import useStyles from "./style";

const SeatPay = () => {
  const { thongTinPhim, danhSachGhe } = useSelector(selectTicketList);
  const ticketStore = useSelector(selectTicketStore);
  const classes = useStyles();
  const history = useHistory();
  const [isPay, setPay] = useState("");
  const dsVe = useSelector(selectTicketStore);
  const params = useParams();
  const dispatch = useDispatch();

  const onChangeRadio = (e) => {
    setPay(e.target.value);
  };

  const handlePayClick = () => {
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
            danhSachVe: dsVe.map((ve) => {
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
        <button
          onClick={handlePayClick}
          disabled={isPay === "" ? true : false}
          className={`btn-buy ${isPay && "active"}`}
        >
          <p className="btn-buy-text">Thanh toán</p>
        </button>
      </Fragment>
    </div>
  );
};

export default memo(SeatPay);
