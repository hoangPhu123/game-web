import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/ItemPlayer.css";

export default function ItemPlayer({ data, setActivePlayer }) {
  let { name, avatar, level } = data;

  const handleShow = () => {
    setActivePlayer(data);
  };

  return (
    <div className="item__player col-lg-4 col-md-6 col-12 wow">
      {/* Item Title  */}
      <div className="itemPlayer__title">
        <a href="" className="avatar">
          <img src={`/img/player${Math.floor(Math.random() * 5 + 1)}.png`} />
        </a>
        <div className="overplay">
          <div class="social-link">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Item Content  */}
      <NavLink to={"/playerDetail"}>
        <div className="itemPlayer__content" onClick={handleShow}>
          <h4 className="itemContent__title">
            <a href="#">{name}</a>
          </h4>

          <h5 className="level-text">{level}</h5>

          <div className="itemBackground__button">
            <img
              src="https://htmldemo.net/bonx/bonx/assets/img/others/tam-text-shape.webp"
              alt
            />
            <img
              src="https://htmldemo.net/bonx/bonx/assets/img/others/tam-text-shape2.webp"
              alt
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
