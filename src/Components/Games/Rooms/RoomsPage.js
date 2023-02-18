import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/RoomsPage.css";

function RoomsPage() {
  return (
    <div className="container roomGame text-center">
      <h2 className="roomGame__title">Rooms</h2>
      <div className="roomGame__content">
        <NavLink to={"/caroGame?token=123&roomId=room1"}>
          <div>room 1</div>
        </NavLink>

        <NavLink to={"/caroGame?token=123&roomId=room2"}>
          <div>room 2</div>
        </NavLink>

        <NavLink to={"/caroGame?token=123&roomId=room3"}>
          <div>room 3</div>
        </NavLink>

        <NavLink to={"/caroGame?token=123&roomId=room4"}>
          <div>room 4</div>
        </NavLink>

        <NavLink to={"/caroGame?token=123&roomId=room5"}>
          <div>room 5</div>
        </NavLink>

        <NavLink to={"/caroGame?token=123&roomId=room6"}>
          <div>room 6</div>
        </NavLink>
      </div>
    </div>
  );
}

export default RoomsPage;
