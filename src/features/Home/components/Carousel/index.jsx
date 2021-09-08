import React, { memo } from "react";
import "./Carousel.scss";
import Images from "constants/images";
import Slider from "react-slick";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const arrowRightStyle = {
  position: "absolute",
  right: "5px",
  top: "48%",
  transform: "translateY(-50%)",
  zIndex: 2,
  width: "50px",
  height: "100px",
  color: "#d8d8d8 !important",
  cursor: "pointer",
  transition: "all .2s",
  "&:hover": { color: "#fb4226 !important" },
};

const arrowLeftStyle = {
  position: "absolute",
  left: "5px",
  top: "48%",
  transform: "translateY(-50%)",
  zIndex: 2,
  width: "50px",
  height: "100px",
  color: "#d8d8d8 !important",
  cursor: "pointer",
  transition: "all .2s",
  "&:hover": { color: "#fb4226 !important" },
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <ArrowForwardIosRoundedIcon
      style={arrowRightStyle}
      onClick={onClick}
      className="arrow"
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <ArrowBackIosRoundedIcon
      style={arrowLeftStyle}
      onClick={onClick}
      className="arrow"
    />
  );
}

const Carousel = () => {
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 5000, //speed per sence
    autoplay: false,
    speed: 500,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slickdotsbanner",
  };

  return (
    <section className="hero">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen1}
        videoId="dxWvtMOGAhw"
        onClose={() => setOpen1(false)}
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen2}
        videoId="49RZx5tUKM4"
        onClose={() => setOpen2(false)}
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen3}
        videoId="AntcyqJ6brc"
        onClose={() => setOpen3(false)}
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen4}
        videoId="UBhlqe2OTt4"
        onClose={() => setOpen4(false)}
      />

      <div className="hero-slide">
        {/* SLIDE ITEM */}
        <Slider {...settings}>
          <div className="hero-slide-item">
            <img src={Images.BANNER1_BG} />
            <div className="hero-slide-item-content">
              <div className="item-content-wraper">
                <div className="item-content-title">Black Panther</div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star" />
                    <span>7.3</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time" />
                    <span>135 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description">
                  Black Panther: Chiến binh Báo Đen là một phim của điện ảnh Hoa
                  Kỳ dựa trên nhân vật siêu anh hùng cùng tên của hãng Marvel
                  Comics, sản xuất bởi Marvel Studios và phân phối bởi Walt
                  Disney Studios Motion Pictures.
                </div>

                <div className="item-action">
                  <a
                    className="btnTrailer btn-ani"
                    onClick={() => setOpen1(true)}
                  >
                    <i
                      className="bx bx-play-circle"
                      style={{ color: "#ffffff" }}
                    />
                    <span>watch now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide-item">
            <img src={Images.BANNER2_BG} />
            <div className="hero-slide-item-content">
              <div className="item-content-wraper">
                <div className="item-content-title">Supergirl</div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star" />
                    <span>7.1</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time" />
                    <span>135 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description">
                  Supergirl là một phim truyền hình Mỹ được phát triển bởi Ali
                  Adler, Greg Berlanti và Andrew Kreisberg ban đầu được phát
                  sóng trên CBS và được công chiếu vào ngày 26 tháng 10 năm
                  2015.
                </div>
                <div className="item-action">
                  <a
                    className="btnTrailer btn-ani"
                    onClick={() => setOpen2(true)}
                  >
                    <i
                      className="bx bx-play-circle"
                      style={{ color: "#ffffff" }}
                    />
                    <span>watch now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide-item">
            <img src={Images.BANNER3_BG} />
            <div className="hero-slide-item-content">
              <div className="item-content-wraper">
                <div className="item-content-title">Transformers</div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star" />
                    <span>7.8</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time" />
                    <span>130 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description">
                  Transformers là một loạt phim hành động khoa học viễn tưởng
                  của Mỹ dựa trên loạt phim Transformers bắt đầu từ những năm
                  1980. Michael Bay đã đạo diễn năm bộ phim đầu tiên:
                  Transformers, Revenge of the Fallen, Dark of the Moon, Age of
                  Extinction và The Last Knight.
                </div>
                <div className="item-action">
                  <a
                    className="btnTrailer btn-ani"
                    onClick={() => setOpen3(true)}
                  >
                    <i
                      className="bx bx-play-circle"
                      style={{ color: "#ffffff" }}
                    />
                    <span>watch now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide-item">
            <img src={Images.BANNER4_BG} />
            <div className="hero-slide-item-content">
              <div className="item-content-wraper">
                <div className="item-content-title">WandaVision</div>
                <div className="movie-infos">
                  <div className="movie-info">
                    <i className="bx bxs-star" />
                    <span>7.4</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time" />
                    <span>130 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description">
                  WandaVision là một miniseries truyền hình Mỹ do Jac Schaeffer
                  tạo ra cho dịch vụ phát trực tuyến Disney +, dựa trên các nhân
                  vật Marvel Comics Wanda Maximoff / Scarlet Witch và Vision.
                </div>
                <div className="item-action">
                  <a
                    className="btnTrailer btn-ani"
                    onClick={() => setOpen4(true)}
                  >
                    <i
                      className="bx bx-play-circle"
                      style={{ color: "#ffffff" }}
                    />
                    <span>watch now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* END SLIDE ITEM */}
      </div>
    </section>
  );
};

export default memo(Carousel);
