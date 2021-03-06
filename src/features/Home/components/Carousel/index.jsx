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
                  Black Panther: Chi???n binh B??o ??en l?? m???t phim c???a ??i???n ???nh Hoa
                  K??? d???a tr??n nh??n v???t si??u anh h??ng c??ng t??n c???a h??ng Marvel
                  Comics, s???n xu???t b???i Marvel Studios v?? ph??n ph???i b???i Walt
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
                  Supergirl l?? m???t phim truy???n h??nh M??? ???????c ph??t tri???n b???i Ali
                  Adler, Greg Berlanti v?? Andrew Kreisberg ban ?????u ???????c ph??t
                  s??ng tr??n CBS v?? ???????c c??ng chi???u v??o ng??y 26 th??ng 10 n??m
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
                  Transformers l?? m???t lo???t phim h??nh ?????ng khoa h???c vi???n t?????ng
                  c???a M??? d???a tr??n lo???t phim Transformers b???t ?????u t??? nh???ng n??m
                  1980. Michael Bay ???? ?????o di???n n??m b??? phim ?????u ti??n:
                  Transformers, Revenge of the Fallen, Dark of the Moon, Age of
                  Extinction v?? The Last Knight.
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
                  WandaVision l?? m???t miniseries truy???n h??nh M??? do Jac Schaeffer
                  t???o ra cho d???ch v??? ph??t tr???c tuy???n Disney +, d???a tr??n c??c nh??n
                  v???t Marvel Comics Wanda Maximoff / Scarlet Witch v?? Vision.
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
