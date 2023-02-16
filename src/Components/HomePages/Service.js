import React from "react";
import "../../assets/css/service.css";

export default function Service() {
  return (
    <section class="service">
      <div class="container">
        <div class="service__title">
          <p>What We Do Best</p>
          <h2>Our Digital Services</h2>
        </div>

        <div class="service__content">
          <div class="service__item item1">
            <img
              className="ml-14"
              src="https://htmldemo.net/bonx/bonx/assets/img/others/gaming-world2.webp"
              alt="service__image"
            />
            <h3>Live Streaming</h3>
            <p>
              Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
              lacus magna, rhoncus quis magna quis.
            </p>
          </div>

          <div class="service__item item2">
            <img
              className="ml-14"
              src="https://htmldemo.net/bonx/bonx/assets/img/others/gaming-world2.webp"
              alt="service__image"
            />
            <h3>Game news</h3>
            <p>
              Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
              lacus magna, rhoncus quis magna quis.
            </p>
          </div>

          <div class="service__item item3">
            <img
              className="ml-14"
              src="https://htmldemo.net/bonx/bonx/assets/img/others/gaming-world2.webp"
              alt="service__image"
            />
            <h3>Game tournaments</h3>
            <p>
              Vestibulum a efficitur ex. Ut iaculis dapibus iaculis. Praesent
              lacus magna, rhoncus quis magna quis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
