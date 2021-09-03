import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

const Footer = () => {
  return (
    <Fragment>
      <div>
        {/* <div className="footer-banner" /> */}
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="footer-main">
                <div className="footer-column">
                  <Link to="/" className="logo">
                    <img
                      src="https://image.flaticon.com/icons/png/512/1779/1779914.png"
                      alt="logo"
                      className="logo-img"
                    />
                    Movie<span>.</span>Cy
                  </Link>
                  <div className="footer-desc text">
                    Movie.Cy giúp bạn mua vé trực tuyến và cập nhật thường xuyên
                    các thông tin như trailer, tin tức, thông tin rạp, sất
                    chiếu, các đánh giá phim, chương trình khuyến mãi từ các rạp
                    và của riêng Movie.Cy dành cho người sử dụng
                  </div>
                  <div className="social">
                    <a href="#" className="social-item">
                      <i className="bx bxl-facebook-circle" />
                    </a>
                    <a href="#" className="social-item">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="social-item">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="social-item">
                      <i className="bx bxl-youtube" />
                    </a>
                  </div>
                </div>
                <div className="footer-column">
                  <h3 className="footer-heading second-font">Đối tác</h3>
                  <div className="footer-partner">
                    <a target="_blank" href="https://www.cgv.vn/" title="CGV">
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/cgv.png"
                        style={{ backgroundColor: "#fff" }}
                      />
                    </a>
                    <a target="_blank" href="http://bhdstar.vn" title="BHD">
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/bhd.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="http://galaxycine.vn"
                      title="Galaxy"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/galaxycine.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="http://cinestar.com.vn"
                      title="Cinestar"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/cinestar.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="http://lottecinemavn.com"
                      title="Lotte Cinema"
                    >
                      <img
                        className="iconConnect"
                        src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.megagscinemas.vn"
                      title="MegaGS"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/megags.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.betacineplex.vn/"
                      title="Beta"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/bt.jpg"
                      />
                    </a>
                    <a target="_blank" href="http://ddcinema.vn" title="DDC">
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/dongdacinema.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://touchcinema.com/"
                      title="Touch Cinema"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/TOUCH.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://cinemaxvn.com/"
                      title="Cinemax"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/cnx.jpg"
                      />
                    </a>
                    <a target="_blank" href="http://123go.vn" title="123Go">
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/123go.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.dcine.vn/"
                      title="Dcine"
                    >
                      <img
                        className="iconConnect"
                        src="https://tix.vn/app/assets/img/icons/dcine.png"
                      />
                    </a>
                  </div>
                </div>
                <div className="footer-column">
                  <h3 className="footer-heading second-font">
                    Hỗ trợ khách hàng
                  </h3>
                  <ul className="footer-links">
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Trung tâm hỗ trợ
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Chính sách bảo mật
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Quy chế hoạt động
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Quyền lợi thành viên
                      </a>
                    </li>
                    <li className="footer-item">
                      <a href="#" className="footer-link">
                        Câu hỏi thường gặp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container footer-container">
              <a
                onClick={() => {
                  scroll.scrollToTop({
                    duration: 800,
                    smooth: "ease",
                  });
                }}
                className="footer-rocket"
                style={{ cursor: "pointer" }}
              >
                <i
                  className="bx bxs-rocket bx-tada bx-flip-horizontal"
                  style={{ color: "#ffffff" }}
                />
              </a>
              <p>Copyright © 2021 Movie.Cy, All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
