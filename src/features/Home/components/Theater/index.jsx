import React from "react";
import "./Theater.scss";

const Theater = () => {
  return (
    <section id="theater" className="theater">
      <div className="container">
        <h2 className="heading__title">Cụm rạp</h2>
        <div className="theater-main">
          <div className="theater-column">
            <ul className="icon_theater_links">
              <li className="icon_theater_item">
                <a title="CGV">
                  <img
                    className="iconTheater active"
                    src="https://tix.vn/app/assets/img/icons/cgv.png"
                    style={{ backgroundColor: "#fff" }}
                  />
                </a>
              </li>
              <li className="icon_theater_item">
                <a title="BHD">
                  <img
                    className="iconTheater"
                    src="https://tix.vn/app/assets/img/icons/bhd.png"
                  />
                </a>
              </li>
              <li className="icon_theater_item">
                <a title="Cinestar">
                  <img
                    className="iconTheater"
                    src="https://tix.vn/app/assets/img/icons/cinestar.png"
                  />
                </a>
              </li>
              <li className="icon_theater_item">
                <a title="Lotte Cinema">
                  <img
                    className="iconTheater"
                    src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                  />
                </a>
              </li>
              <li className="icon_theater_item">
                <a title="MegaGS">
                  <img
                    className="iconTheater"
                    src="https://tix.vn/app/assets/img/icons/megags.png"
                  />
                </a>
              </li>
              <li className="icon_theater_item">
                <a title="Beta">
                  <img
                    className="iconTheater"
                    src="https://tix.vn/app/assets/img/icons/bt.jpg"
                  />
                </a>
              </li>
              <li className="icon_theater_item">
                <a title="DDC">
                  <img
                    className="iconTheater"
                    src="https://tix.vn/app/assets/img/icons/dongdacinema.png"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="theater-column">
            <div className="theater_address_item active">
              <div className="theater_address_img">
                <img src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" />
              </div>
              <div className="theater_address_content">
                <div className="address-name">
                  <span>BHD Start</span> - Bitexco
                </div>
                <div className="address-address">
                  L3-Bitexco Icon 68, 2 Hải Triều, Hải Triều,
                </div>
                <div className="address-detail">[chi tiết]</div>
              </div>
            </div>
          </div>
          <div className="theater-column">
            <div className="thater_film_box">
              <div className="theater_film_item">
                <div className="theater_film_img">
                  <img src="./images/movies/end-game.jpg" />
                </div>
                <div className="theater_film_content">
                  <div className="film-name-heading">
                    End game <span>HOT</span>
                  </div>
                  <div className="film-time">
                    115 phút - Khởi chiếu: 29/08/2021
                  </div>
                </div>
              </div>
              <h3 className="digital-text">2D Digital</h3>
              <div className="theater_film_time">
                <div className="film-time-item">10:10</div>
                <div className="film-time-item">10:10</div>
                <div className="film-time-item">10:10</div>
                <div className="film-time-item">10:10</div>
                <div className="film-time-item">10:10</div>
                <div className="film-time-item">10:10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theater;
