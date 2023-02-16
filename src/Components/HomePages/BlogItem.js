import React from "react";
import "../../assets/css/blogItem.css";

export default function BlogItem({ img }) {
  return (
    <div className="item__blog col-lg-6 d-flex align-items-center">
      <div className="itemBlog__left">
        <a href="#">
          <img src={img} alt />
        </a>
      </div>

      <div className="itemBlog__right">
        <div className="itemRight__date">
          <span>
            <i className="fa-regular fa-calendar-days" /> 20 December 2022
          </span>
        </div>
        <h3>
          <a className="h3_title" href="#">
            if you have seen Apple's recent jabs.
          </a>
        </h3>
        <a className="readMore" href="#">
          READ MORE
        </a>
      </div>
    </div>
  );
}
