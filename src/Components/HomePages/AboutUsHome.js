import React from "react";
import "../../assets/css/aboutUsHome.css";
import aboutImg from "../../assets/img/about.png";
import Button from "./Button";

export default function () {
  return (
    <section className="about">
      <div className="container">
        <div id="homeAbout__content">
          {/* data-wow-duration: "2s" data-wow-delay: ".2s" */}
          <div className="about__left wow">
            <img src={aboutImg} alt={aboutImg} />
          </div>
          {/* data-wow-duration: "2s" data-wow-delay: ".2s" */}
          <div className="about__right wow">
            <div className="about__title">
              <p>About Us</p>
              <h2>
                Build Your <br />
                Game Website <br />
                Better
              </h2>
            </div>
            <p>
              Proin laoreet leo vel enim gravida, at porttitor metus ultricies.
              Cras eu velit enim. Vivamus blandit, dolor ut aliquet rutrum, ex
              elit mattis sapien, non molestie felis neque et nulla. Sed euismod
              turpis id nibh suscipit semper. Pellentesque dapibus risus arcu.
            </p>
            <ul>
              <li>
                <i className="fa fa-check" />
                We support programs that create advancement opportunities for
                people.
              </li>
              <li>
                <i className="fa fa-check" />
                Get a view of events and trends. Be updated on our recent news.
              </li>
              <li>
                <i className="fa fa-check" />
                Finally, it all comes down to people. Creating a winning team.
              </li>
              <li>
                <i className="fa fa-check" />
                Get a view of events and trends. Be updated on our recent news.
              </li>
            </ul>
            <Button value={"Learn More"} />
          </div>
        </div>
      </div>
    </section>
  );
}
