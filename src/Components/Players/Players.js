import React from "react";
import "../../assets/css/Players.css";
import ConnectUs from "../HomePages/ConnectUs";
import LocationHeader from "../SignUp/LocationHeader";
import ItemPlayer from "./ItemPlayer";

export const players = [
  {
    id: 1,
    name: "THUNDERMAN",
    avatar: "/img/player1.png",
    level: "80 LEVEL COMPLETED",
  },
  {
    id: 2,
    name: "LION KING",
    avatar: "/img/player2.png",
    level: "36 LEVEL COMPLETED",
  },
  {
    id: 3,
    name: "WOLF SMART",
    avatar: "/img/player3.png",
    level: "40 LEVEL COMPLETED",
  },
  {
    id: 4,
    name: "JOHNNYBRAVO",
    avatar: "/img/player4.png",
    level: "90 LEVEL COMPLETED",
  },
  {
    id: 5,
    name: "GAMER_XBOY",
    avatar: "/img/player5_2.png",
    level: "75 LEVEL COMPLETED",
  },
  {
    id: 6,
    name: "WARRIOR-782",
    avatar: "/img/player6.png",
    level: "102 LEVEL COMPLETED",
  },
];

export default function Players() {
  const renderListPlayer = () => {
    return players.map((item, index) => {
      return <ItemPlayer data={item} key={index} />;
    });
  };

  return (
    <div>
      <LocationHeader title={"Players"} location={"Players"} />

      <div className="players__content">
        <div className="container">
          <div className="players__list row ">{renderListPlayer()}</div>
        </div>
      </div>

      <ConnectUs />
    </div>
  );
}
