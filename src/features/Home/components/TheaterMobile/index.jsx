import {
  fetchTheaterSystem,
  selectHomeTheaterList,
  selectHomeTheaterSystem,
} from "features/Home/homeSlice";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../TheaterPC/Theater.scss";
import "./TheaterMobile.scss";
import TheaterAddress from "./TheaterAddress";
import TheaterIcon from "./TheaterIcon";

const TheaterMobile = () => {
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
          <div>
            <ul className="icon_theater_links_mobile">
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

          <div className="theater-column-mobile">
            {theaterAddressData &&
              theaterAddressData.lstCumRap.map((theater) => (
                <TheaterAddress
                  movieShowTimes={movieShowTimes}
                  isActive={isActiveAddress}
                  setIsActive={setIsActiveAddress}
                  key={theater.maCumRap}
                  theater={theater}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TheaterMobile);
