import React, { Fragment } from "react";
import "./Menu.scss";
import { scroller } from "react-scroll";
import { useHistory, useLocation } from "react-router-dom";

const Menu = ({ isToggle, setIsToggle }) => {
  const history = useHistory();
  const location = useLocation();

  const handleClickLink = async (id) => {
    setIsToggle(false);
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

  return (
    <Fragment>
      <div
        className={`${isToggle && "show"} overlay`}
        onClick={() => setIsToggle(false)}
      ></div>
      <div className={`${isToggle && "is-active"} menu`}>
        <ul className="menu-list">
          <li className="menu-item2">
            <a href="" className="menu-link menu-signin">
              <img
                src="https://tix.vn/app/assets/img/avatar.png"
                className="login-user"
              />
              Đăng nhập
            </a>
          </li>
          <li className="menu-item2">
            <a
              onClick={() => {
                handleClickLink("search");
              }}
              className="menu-link"
            >
              <i
                className="bx bx-calendar menu-icon"
                style={{ color: "#ffffff" }}
              ></i>
              Lịch chiếu
            </a>
          </li>

          <li className="menu-item2">
            <a
              onClick={() => {
                handleClickLink("film");
              }}
              className="menu-link"
            >
              <i
                className="bx bx-film menu-icon"
                style={{ color: "#ffffff" }}
              ></i>
              Phim
            </a>
          </li>
          <li className="menu-item2">
            <a
              onClick={() => {
                handleClickLink("theater");
              }}
              className="menu-link"
            >
              <i
                className="bx bx-camera-movie menu-icon"
                style={{ color: "#ffffff" }}
              ></i>
              Cụm rạp
            </a>
          </li>
          <li className="menu-item2">
            <a href="" className="menu-link menu-logout">
              <i
                className="bx bx-log-out-circle menu-icon"
                style={{ color: "#e74c3c" }}
              ></i>
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
