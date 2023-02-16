import React from "react";
import Button from "../HomePages/Button";
import "../../assets/css/itemDetail.css";

export default function ItemDetail() {
  return (
    <div className="item__detail">
      {/* The Left  */}
      <div className="item__left">
        {/* avatar  */}
        <div className="detailLeft__avatar">
          <img src="/img/player1.png" alt="" />
        </div>

        {/* profile  */}
        <div className="detailLeft__profile">
          <h4 className="profileDetail__title">LION KING</h4>
          <h5 className="profileDetail__level">36 LEVEL COMPLETED</h5>
          <div className="profileDetail__bgBtn">
            <img
              width={351}
              height={126}
              src="https://htmldemo.net/bonx/bonx/assets/img/others/tam-text-shape2.webp"
              alt
            />
          </div>
        </div>
      </div>
      {/* The Left  */}

      {/* The Right  */}
      <div className="item__right">
        <span className="title-tag">PLAYER PROFILE</span>
        <h4>Space Game expert</h4>
        <p>
          It is a long established fact that a reader will be distracted
          readable content page when looking at it layout the point using lorem
          Ipsum that it has more-or-less normal distribution lette desktop
          packages and web page now editors.
        </p>
        <p>
          It is a long established fact that and reader will been distracted
          readable content page when looking at it layout the point using
          desktop packages and web page now editors.
        </p>

        <Button value={"Contact Now"} id={"btnDetail"} />

        {/* social link  */}
        <div className="social-link">
          <a
            href="https://www.twitch.tv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
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
        </div>
      </div>
      {/* The Right  */}
    </div>
  );
}
