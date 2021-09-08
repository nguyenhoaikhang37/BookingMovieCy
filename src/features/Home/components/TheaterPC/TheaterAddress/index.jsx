import React, { memo, useEffect } from "react";
import { imageCinema, getColorText } from "utils";

const TheaterAddress = ({ theater, isActive, setIsActive }) => {
  const getId = theater.maCumRap.slice(0, 3);

  const handleClickAddress = () => {
    setIsActive(theater.maCumRap);
  };

  return (
    <div
      onClick={handleClickAddress}
      className={`theater_address_item ${
        theater.maCumRap == isActive && "active"
      }`}
    >
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
  );
};

export default memo(TheaterAddress);
