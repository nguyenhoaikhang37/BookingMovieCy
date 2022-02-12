import React, { Fragment, useEffect, useState } from "react";
import "./Header.scss";
import Menu from "./components/Menu";
import { Link, useHistory, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { selectAuthUser } from "features/Auth/authSlice";
import { useSelector } from "react-redux";
import Images from "constants/images";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const user = useSelector(selectAuthUser);

  const handleMenuClick = () => {
    setIsToggle(!isToggle);
  };

  const handleClickLink = async (id) => {
    if (location.pathname === "/home") {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: "ease",
      });
    } else {
      await history.push("/home");

      setTimeout(() => {
        scroller.scrollTo(id, {
          duration: 800,
          smooth: "ease",
        });
      }, 50);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Fragment>
      <header id="header" className="header">
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
              {!user ? (
                <div>
                  <Link to="/login" className="menu-login">
                    <img src={Images.UN_AVARTA} className="login-user" />
                    Đăng nhập
                  </Link>
                </div>
              ) : (
                <div>
                  <div className="menu-login">
                    <img
                      src={`https://i.pravatar.cc/300?u=${user.hoTen}`}
                      className="login-user"
                    />
                    {user.hoTen}
                  </div>
                  <div className="menu-login-drop">
                    <div className="menu-login-name">
                      <img
                        src={`https://i.pravatar.cc/300?u=${user.hoTen}`}
                        className="login-user"
                      />
                      <div className="menu-login-info">
                        <div>{user.hoTen}</div>
                        <div className="menu-login-email">{user.email}</div>
                      </div>
                    </div>
                    <Link to="/profile" className="menu-login-text">
                      <i className="bx bx-user menu-login-icon " />
                      Profile
                    </Link>
                    <div onClick={handleLogOut} className="menu-login-text ">
                      <i className="bx bx-log-out menu-login-icon " />
                      Log out
                    </div>
                  </div>
                </div>
              )}
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
