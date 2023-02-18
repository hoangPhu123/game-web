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
              {/* <div className="category__left d-flex">
                <div className="gaming__list">
                  <select style={{ display: "none" }}>
                    <option selected value={1}>
                      Category
                    </option>
                    <option value={2}>Category2</option>
                    <option value={3}>Category3</option>
                    <option value={4}>Category4</option>
                  </select>
                  <div className="category-select" tabIndex={0}>
                    <span className="current">Category</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        Category
                      </li>
                      <li data-value={2} className="option">
                        Category2
                      </li>
                      <li data-value={3} className="option">
                        Category3
                      </li>
                      <li data-value={4} className="option">
                        Category4
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="gaming__list">
                  <select style={{ display: "none" }}>
                    <option selected value={1}>
                      All Platform
                    </option>
                    <option value={2}>Platform2</option>
                    <option value={3}>Platform3</option>
                    <option value={4}>Platform4</option>
                  </select>
                  <div className="category-select" tabIndex={0}>
                    <span className="current">All Platform</span>
                    <ul className="list">
                      <li data-value={1} className="option selected">
                        All Platform
                      </li>
                      <li data-value={2} className="option">
                        Platform2
                      </li>
                      <li data-value={3} className="option">
                        Platform3
                      </li>
                      <li data-value={4} className="option">
                        Platform4
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

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
