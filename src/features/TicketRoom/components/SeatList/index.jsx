import React, { Fragment } from "react";
import "./SeatList.scss";
import Countdown from "../Countdown";
import { useSelector } from "react-redux";
import { selectTicketList } from "features/TicketRoom/ticketSlice";
import SeatItem from "../SeatItem";
import EventSeatRoundedIcon from "@material-ui/icons/EventSeatRounded";
import { getColorText, imageCinema } from "utils";
import { memo } from "react";

const SeatList = () => {
  const { thongTinPhim, danhSachGhe } = useSelector(selectTicketList);
  const getId = thongTinPhim?.tenCumRap.slice(0, 3).toLowerCase();
  let initCode = 64;
  const seatListEdit = danhSachGhe?.map((seat, i) => {
    // thêm label A01, thêm flag selected: false
    if (i % 16 === 0) initCode++;
    const txt = String.fromCharCode(initCode);
    const number = ((i % 16) + 1).toString().padStart(2, 0);
    return { ...seat, label: txt + number };
  });

  return (
    <div className="seat-list-main">
      <div className="seat-top">
        <div className="theater_address_item active seat_address_item">
          <div className="theater_address_img">
            <img src={imageCinema(getId)} />
          </div>

          <div className="theater_address_content">
            <div className="address-name">
              <span style={{ color: getColorText(getId) }}>
                {thongTinPhim?.tenCumRap.slice(
                  0,
                  thongTinPhim?.tenCumRap.indexOf("-")
                )}
              </span>
              {thongTinPhim?.tenCumRap.slice(
                thongTinPhim?.tenCumRap.indexOf("-")
              )}
            </div>
            <div className="address-address">{thongTinPhim?.diaChi}</div>
          </div>
        </div>

        <div className="seat-top-right">
          <div className="time-seat">Thời gian giữ ghế</div>
          <div>
            <Countdown />
          </div>
        </div>
      </div>
      <div className="seat-content">
        <div className="seat-box">
          <div className="seat-box-content">
            <div className="screen" />
            <div className="seat-list">
              {seatListEdit?.map((ghe, i) => (
                <Fragment key={ghe.maGhe}>
                  <SeatItem ghe={ghe} index={i} />

                  {(i + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="seat-note">
          <div className="seat-item seat-item-note">
            <EventSeatRoundedIcon />
            <p>Ghế thường</p>
          </div>
          <div className="seat-item seat-item-vip seat-item-note">
            <EventSeatRoundedIcon />
            <p>Ghế Vip</p>
          </div>
          <div className="seat-item seat-item-active seat-item-note">
            <EventSeatRoundedIcon />
            <p>Ghế đang chọn</p>
          </div>
          <div className="seat-item seat-item-sold seat-item-note">
            <EventSeatRoundedIcon />
            <p>Ghế được mua</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SeatList);
