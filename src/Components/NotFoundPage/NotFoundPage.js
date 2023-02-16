import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../HomePages/Button";
import errorImg from "../../assets/img/404.webp";
import "../../assets/css/notFoundPage.css";

function NotFoundPage() {
  return (
    <div className="container notFoundPage__content text-center">
      <div className="notFound__title mb-16">
        <h3 className="text-6xl font-bold uppercase">OPPS...</h3>
        <p className="text-4xl font-bold uppercase">
          SORRY, this page is not found.
        </p>
      </div>
      <div className="notFound__img">
        <img src={errorImg} alt="" />
      </div>
      <div className="notFound__btn">
        <NavLink to="/">
          <Button value={"Go Back Home"} id="btn__notFound" />
        </NavLink>
      </div>
    </div>
  );
}

export default NotFoundPage;
