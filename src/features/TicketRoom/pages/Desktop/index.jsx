import ticketApi from "apis/ticketApi";
import SeatList from "features/TicketRoom/components/SeatList";
import SeatPay from "features/TicketRoom/components/SeatPay";
import StepCheckout from "features/TicketRoom/components/StepCheckout";
import { selectTicketStore } from "features/TicketRoom/ticketSlice";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
import { ticketActions } from "../../ticketSlice";
import "../../components/SeatPay/SeatPay.scss";
import "./TicketRoomPC.scss";

const Desktop = () => {
  const history = useHistory();
  const [isPay, setPay] = useState("");
  const dsVe = useSelector(selectTicketStore);
  const params = useParams();
  const dispatch = useDispatch();

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
        <SeatPay setPay={setPay} />
        <button
          onClick={handlePayClick}
          disabled={dsVe.length !== 0 && isPay ? false : true}
          className={`btn-buy ${isPay && dsVe.length !== 0 && "active"}`}
        >
          <p className="btn-buy-text">Thanh toán</p>
        </button>
      </div>
    </div>
  );
};

export default memo(Desktop);
