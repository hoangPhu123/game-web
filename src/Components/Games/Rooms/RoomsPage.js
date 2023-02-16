import React from "react";
import { NavLink } from "react-router-dom";

function RoomsPage() {
  return (
    <div className="container text-center">
      <h2>Rooms</h2>
      <div>
        <NavLink to={'/caroGame?token=123&roomId=room1'}>
          <div> room 1</div>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/caroGame?token=123&roomId=room2'}>
          <div> room 2</div>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/caroGame?token=123&roomId=room3'}>
          <div> room 3</div>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/caroGame?token=123&roomId=room4'}>
          <div> room 4</div>
        </NavLink>
      </div>
      <div>
        <NavLink to={'/caroGame?token=123&roomId=room5'}>
          <div> room 5</div>
        </NavLink>
      </div>
    </div>
  );
}

export default RoomsPage;
