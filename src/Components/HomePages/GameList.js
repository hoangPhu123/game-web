import React from "react";
import "../../assets/css/gameList.css";
import { NavLink } from "react-router-dom";

export default function GameList({ name, img, route, title }) {
  console.log(route, "route");
  return (
    <NavLink to={route}>
      <div className="gameList__content col-lg-10 col-md-7 col-sm-10">
        <div className={name}>
          <a href={route}>
            <img src={img} alt />
          </a>

          <div className="overplay">
            <div className="folio__icon">
              <a href="#" className="btn btn-link">
                <i className="fa fa-plus" />
              </a>
            </div>
            <div className="folio__text">
              <h3>{title}</h3>
              <p>By Hoang Phu</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
