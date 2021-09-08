import React, { memo, useEffect, useState } from "react";
import { imageCinema, getColorText } from "utils";
import TheaterShowTimes from "../TheaterShowTimes";

const TheaterAddress = ({ theater, isActive, setIsActive, movieShowTimes }) => {
  const getId = theater.maCumRap.slice(0, 3);
  const [isShow, setIsShow] = useState(false);
  const handleClickAddress = () => {
    setIsActive(theater.maCumRap);
    setIsShow(!isShow);
  };

  return (
    <div
      onClick={handleClickAddress}
      className={`theater_address_item theater_address_item_mobile ${
        theater.maCumRap == isActive && "active"
      }`}
    >
      <div className="theater_address_box_mobile">
        <div className="theater_address_img">
          <img src={imageCinema(getId)} />
        </div>
        <div className="theater_address_content">
          <div className="address-name">
            <span style={{ color: getColorText(getId) }}>
              {theater.tenCumRap.slice(0, theater.tenCumRap.indexOf("-"))}
            </span>
            {theater.tenCumRap.slice(theater.tenCumRap.indexOf("-"))}
          </div>
          <div className="address-address">{theater.diaChi}</div>
          <div className="address-detail">[chi tiết]</div>
        </div>
      </div>
      <div
        className={`theater-column-mobile2  theater-column-mobile-children ${
          isShow && "show"
        }`}
      >
        {movieShowTimes?.danhSachPhim.map((ds, index) => (
          <TheaterShowTimes key={index} ds={ds} />
        ))}
      </div>
    </div>
  );
};
export default memo(TheaterAddress);
