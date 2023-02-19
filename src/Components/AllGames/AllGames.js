import React, { useEffect, useMemo, useState } from "react";
import LocationHeader from "../SignUp/LocationHeader";
import GameList from "../HomePages/GameList";
import Numbers from "../HomePages/Numbers";
import ConnectUs from "../HomePages/ConnectUs";
import Caro from "../../assets/img/Caro.jpg";
import colorBlastImg from "../../assets/img/colorblast.jpg";
import Fruit from "../../assets/img/FruitNinja.jpg";
import Snake from "../../assets/img/Snakes.jpg";
import TwoGame from "../../assets/img/2048.jpg";
import "../../assets/css/allGames.css";

const gameArray = [
  {
    img: Caro,
    route: "/caroGame/room",
    title: "Caro Game Online",
  },
  {
    img: colorBlastImg,
    route: "/colorBlastGame",
    title: "Color Blast",
  },
  {
    img: Fruit,
    route: "/menjaGame",
    title: "Fruit Ninja",
  },
  {
    img: Snake,
    route: "/snakeGame",
    title: "Snake",
  },
  {
    img: TwoGame,
    route: "/twoGame",
    title: "Two Game",
  },
];

export default function AllGames() {
  const [values, setValues] = useState("");

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const filteredGameArray = useMemo(() =>
    gameArray.filter((game) => game.title.toLowerCase().includes(values))
  );

  return (
    <>
      <LocationHeader title={"All games"} location={"All games"} />

      <div className="container">
        {/* Category  */}
        <div className="allGames__category">
          <form action="#">
            <div className="category__content d-flex justify-content-between">
              <div className="category__right_search">
                <input
                  onChange={handleChange}
                  placeholder="Search here"
                  type="text"
                />
                <button>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* All Games  */}
        <div className="allGames__list row">
          {filteredGameArray.map((item, index) => (
            <GameList
              name={`portfolio__item wow item__pic${index}`}
              img={item.img}
              route={item.route}
              title={item.title}
            />
          ))}
        </div>
      </div>

      <Numbers />
      <div className="space"></div>
      <ConnectUs />
    </>
  );
}
