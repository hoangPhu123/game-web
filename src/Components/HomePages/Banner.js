import React from "react";
import "../../assets/css/banner.css";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__title">
            <h1>
              Best Game <br /> Playing Game
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eos
              aspernatur ipsum tempore quae, non repellat. Sint illum ea
              necessitatibus, aut, dolores veritatis inventore neque ipsa et
              doloremque ex repellat!
            </p>
          </div>
          <Button value={"Play"} id={"btnPlay"} />
        </div>
      </div>
    </section>
  );
}
