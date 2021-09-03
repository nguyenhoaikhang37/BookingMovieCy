import React, { Fragment, useState } from "react";
import "./Header.scss";
import Menu from "./components/Menu";
import { Link, useHistory, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const handleMenuClick = () => {
    setIsToggle(!isToggle);
    console.log(isToggle);
  };

  const handleClickLink = async (id) => {
    if (location.pathname === "/home") {
      scroller.scrollTo(id, {
        duration: 400,
        smooth: "easeInOutQuart",
      });
    } else {
      await history.push("/home");
      scroller.scrollTo(id, {
        duration: 400,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <Link to="/" className="logo">
              <img
                src="https://image.flaticon.com/icons/png/512/1779/1779914.png"
                alt="logo"
                className="logo-img"
              />
              Movie<span>.</span>Cy
            </Link>
            <ul className="menu-links">
              <li className="menu-item">
                <a
                  onClick={() => {
                    handleClickLink("search");
                  }}
                  className="menu-link"
                  style={{ cursor: "pointer" }}
                >
                  <i className="bx bx-calendar" style={{ color: "#ffffff" }} />{" "}
                  Lịch chiếu
                </a>
              </li>
              <li className="menu-item">
                <a
                  onClick={() => {
                    handleClickLink("film");
                  }}
                  style={{ cursor: "pointer" }}
                  className="menu-link"
                >
                  <i className="bx bx-film" style={{ color: "#ffffff" }} /> Phim
                </a>
              </li>
              <li className="menu-item">
                <a
                  onClick={() => {
                    handleClickLink("theater");
                  }}
                  className="menu-link"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className="bx bx-camera-movie"
                    style={{ color: "#ffffff" }}
                  />
                  Cụm rạp
                </a>
              </li>
            </ul>
            <div className="menu-login-box">
              <a href="#" className="menu-login">
                <img
                  src="https://tix.vn/app/assets/img/avatar.png"
                  className="login-user"
                />
                Đăng nhập
              </a>
              <div className="menu-login-drop">
                <div className="menu-login-text">
                  <i
                    className="bx bx-log-out-circle menu-login-icon"
                    style={{ color: "#e74c3c" }}
                  />
                  Đăng xuất
                </div>
              </div>
            </div>
            <ul
              className={`${isToggle && "active"} hamburger-menu-links`}
              onClick={handleMenuClick}
            >
              <li className="hamburger-menu-link" />
              <li className="hamburger-menu-link" />
              <li className="hamburger-menu-link" />
            </ul>
          </div>
        </div>
      </header>
      <Menu isToggle={isToggle} setIsToggle={setIsToggle} />
    </Fragment>
  );
};

export default Header;
