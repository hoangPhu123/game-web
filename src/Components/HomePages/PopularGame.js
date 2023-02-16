import React from "react";
import "../../assets/css/popularGame.css";
import GameList from "./GameList";
import colorBlastImg from "../../assets/img/colorblast.jpg";
import Fruit from "../../assets/img/FruitNinja.jpg";
import Caro from "../../assets/img/Caro.jpg";
import TwoGame from "../../assets/img/2048.jpg";

export default function PopularGame() {
  return (
    <section className="popularGame">
      <div className="container">
        <div className="popularGame__content">
          <div className="popularGame__title text-center">
            <h2>POPULAR GAME</h2>
            <p>
              When unknown printer took type and scrambled it to make <br />
              type specimen book centuries,
            </p>
          </div>
          <div className="gameList row">
            <GameList
              name={"portfolio__item item__pic1 wow"}
              img={Caro}
              route="/caroGame/room"
              title={"Caro Game"}
            />
            <GameList
              name={"portfolio__item item__pic2 wow"}
              img={colorBlastImg}
              route="/colorBlastGame"
              title={"Color Blast"}
            />
            <GameList
              name={"portfolio__item item__pic3 wow"}
              img={Fruit}
              route="/menjaGame"
              title={"Fruit Ninja"}
            />
            <GameList
              name={"portfolio__item item__pic4 wow"}
              img={TwoGame}
              route="/twoGame"
              title={"Two Game"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
