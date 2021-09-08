import React, { memo } from "react";

const TheaterIcon = ({ theater, isActive, setIsActive }) => {
  const handleClickIcon = () => {
    setIsActive(theater.maHeThongRap);
  };

  return (
    <li
      onClick={handleClickIcon}
      className={`icon_theater_item ${
        isActive == theater.maHeThongRap && "active"
      }`}
    >
      <a title={theater.maHeThongRap}>
        <img className="iconTheater " src={theater.logo} />
      </a>
    </li>
  );
};

export default memo(TheaterIcon);
