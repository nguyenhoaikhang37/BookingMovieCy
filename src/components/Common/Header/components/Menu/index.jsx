import React, { Fragment } from "react";
import "./Menu.scss";
import { scroller } from "react-scroll";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthUser } from "features/Auth/authSlice";
const Menu = ({ isToggle, setIsToggle }) => {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector(selectAuthUser);

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

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Fragment>
      <div
        className={`${isToggle && "show"} overlay`}
        onClick={() => setIsToggle(false)}
      ></div>
      <div className={`${isToggle && "is-active"} menu`}>
        <ul className="menu-list">
          {!user ? (
            <li className="menu-item2">
              <Link to="/login" className="menu-link menu-signin">
                <img
                  src="https://tix.vn/app/assets/img/avatar.png"
                  className="login-user"
                />
                Đăng nhập
              </Link>
            </li>
          ) : (
            <li className="menu-item2">
              <Link to="/profile" className="menu-link menu-signin">
                <img
                  src="https://picsum.photos/200/300?random=1"
                  className="login-user"
                />
                <div className="menu-login-info">
                  <div>{user.hoTen}</div>
                  <div className="menu-login-email">{user.email}</div>
                </div>
              </Link>
            </li>
          )}
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
          {user && (
            <li className="menu-item2">
              <span onClick={handleLogOut} className="menu-link menu-logout">
                <i className="bx bx-log-out menu-login-icon " />
                Log out
              </span>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
