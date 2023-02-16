import React from "react";
import "../../assets/css/backToTop.css";
import BackToTop from "react-back-to-top-button";

export default function MoveToTop() {
  return (
    <>
      <BackToTop
        showOnScrollUp
        showAt={10}
        speed={10000}
        easing="easeInOutQuint"
      >
        <a href="#" className="move">
          <i className="fa fa-arrow-up"></i>
        </a>
      </BackToTop>
    </>
  );
}
