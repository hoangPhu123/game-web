import React from "react";
import "../../assets/css/popularGame.css";
import GameList from "./GameList";

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
              img={
                "https://htmldemo.net/bonx/bonx/assets/img/others/popular-game-thumb1.webp"
              }
              route="/caroGame/room"
              title={"Caro Game"}
            />
            <GameList
              name={"portfolio__item item__pic2 wow"}
              img={
                "https://htmldemo.net/bonx/bonx/assets/img/others/popular-game-thumb1.webp"
              }
              route="/colorBlastGame"
              title={"Color Blast"}
            />
            <GameList
              name={"portfolio__item item__pic3 wow"}
              img={
                "https://htmldemo.net/bonx/bonx/assets/img/others/popular-game-thumb1.webp"
              }
              route="/menjaGame"
              title={"Fruit Ninja"}
            />
            <GameList
              name={"portfolio__item item__pic4 wow"}
              img={
                "https://htmldemo.net/bonx/bonx/assets/img/others/popular-game-thumb1.webp"
              }
              route="/twoGame"
              title={"Two Game"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
