import React, { Component } from "react";
import "../../../assets/css/colorBlastGame.css";

export default class ColorBlast extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      maxEnemies: 6,
    };
  }
  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="game-wrap mt-44 mb-28">
            <h1 className="title text-center mt-4 mb-4">
              <span>C</span>
              <span>o</span>
              <span>l</span>
              <span>o</span>
              <span>r</span>
              <span> </span>
              <span>B</span>
              <span>l</span>
              <span>a</span>
              <span>s</span>
              <span>t</span>
            </h1>
            <canvas width={1100} height={440} id="game" />
            <article className="content mt-5">
              <p>
                Use the <code>Left</code> and <code>Right</code> Arrows or{" "}
                <code>A</code> and <code>D</code> keys to move,{" "}
                <code>Spacebar</code> to shoot.
              </p>
              <div
                className=""
                onClick={() => console.log(this?.handleLoad()?.Game)}
              >
                {" "}
                Easy{" "}
              </div>
              <div className="" onClick={() => this.getMaxEnemies()}>
                {" "}
                Normal{" "}
              </div>
              <div
                className=""
                onClick={() => this.handleLoad.Game.maxEnemies === 9}
              >
                {" "}
                Hard{" "}
              </div>
              <div
                className=""
                onClick={() => console.log(this.handleLoad?.Game)}
              >
                {" "}
                HCMUTE{" "}
              </div>
            </article>
          </div>
        </div>
      </>
    );
  }
}
