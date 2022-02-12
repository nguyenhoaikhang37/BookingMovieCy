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
                        src="https://gigamall.com.vn/data/2019/05/06/11365490_logo-cgv-500x500.jpg"
                        style={{ backgroundColor: "#fff" }}
                      />
                    </a>
                    <a target="_blank" href="http://bhdstar.vn" title="BHD">
                      <img
                        className="iconConnect"
                        src="https://tenpack.com.vn/wp-content/uploads/2016/02/BHD-cineplex-logo.png"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="http://galaxycine.vn"
                      title="Galaxy"
                    >
                      <img
                        className="iconConnect"
                        src="https://nextphim.com/wp-content/uploads/2018/06/logo-galaxy-cinema.jpg"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="http://cinestar.com.vn"
                      title="Cinestar"
                    >
                      <img
                        className="iconConnect"
                        src="https://cinestar.com.vn/pictures/400x400.png"
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
                        src="https://static.wikia.nocookie.net/logos/images/4/46/MegaGS_Entertainmnt_logo_201x.png/revision/latest?cb=20201216085741&path-prefix=vi"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.betacineplex.vn/"
                      title="Beta"
                    >
                      <img
                        className="iconConnect"
                        src="https://media-exp1.licdn.com/dms/image/C560BAQF_7EzIDdZdsw/company-logo_200_200/0/1605176382098?e=2159024400&v=beta&t=rd5INanC5Fd0PEDK_XK9ZOgd41fRgG3YgC4-vxBp920"
                      />
                    </a>
                    <a target="_blank" href="http://ddcinema.vn" title="DDC">
                      <img
                        className="iconConnect"
                        src="data:image/png;base64,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"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://touchcinema.com/"
                      title="Touch Cinema"
                    >
                      <img
                        className="iconConnect"
                        src="https://static.mservice.io/placebrand/s/momo-upload-api-190807191007-637008018071178512.jpg"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://cinemaxvn.com/"
                      title="Cinemax"
                    >
                      <img
                        className="iconConnect"
                        src="https://ithongtin.com/storage/raps/cinemax.png"
                      />
                    </a>
                    <a target="_blank" href="http://123go.vn" title="123Go">
                      <img
                        className="iconConnect"
                        src="data:image/jpeg;base64,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"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.dcine.vn/"
                      title="Dcine"
                    >
                      <img
                        className="iconConnect"
                        src="https://www.dcine.vn/Content/img/logo-black.png"
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
