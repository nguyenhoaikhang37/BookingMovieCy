import {
  fetchTheaterSystem,
  selectHomeTheaterList,
  selectHomeTheaterSystem,
} from "features/Home/homeSlice";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Theater.scss";
import TheaterAddress from "./TheaterAddress";
import TheaterIcon from "./TheaterIcon";
import TheaterShowTimes from "./TheaterShowTimes";

const TheaterPC = () => {
  const dispatch = useDispatch();
  const theaterSystem = useSelector(selectHomeTheaterSystem);
  const [isActiveLogo, setIsActiveLogo] = useState("BHDStar");
  const theaterAddressData = theaterSystem.find(
    (x) => x.maHeThongRap == isActiveLogo
  );

  const [isActiveAddress, setIsActiveAddress] = useState();
  const movieShowTimes = theaterAddressData?.lstCumRap.find(
    (x) => x.maCumRap == isActiveAddress
  );

  useEffect(() => {
    dispatch(fetchTheaterSystem());
  }, []);

  useEffect(() => {
    setIsActiveAddress(theaterAddressData?.lstCumRap[0].maCumRap);
  }, [theaterAddressData]);

  return (
    <section id="theater" className="theater">
      <div className="container">
        <h2 className="heading__title">Cụm rạp</h2>
        <div className="theater-main">
          <div className="theater-column">
            <ul className="icon_theater_links">
              {theaterSystem.map((theater) => (
                <TheaterIcon
                  isActive={isActiveLogo}
                  setIsActive={setIsActiveLogo}
                  key={theater.maHeThongRap}
                  theater={theater}
                />
              ))}
            </ul>
          </div>
          <div className="theater-column">
            {theaterAddressData &&
              theaterAddressData.lstCumRap.map((theater) => (
                <TheaterAddress
                  isActive={isActiveAddress}
                  setIsActive={setIsActiveAddress}
                  key={theater.maCumRap}
                  theater={theater}
                />
              ))}
          </div>
          <div className="theater-column">
            {movieShowTimes?.danhSachPhim.map((ds, index) => (
              <TheaterShowTimes key={index} ds={ds} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TheaterPC);
