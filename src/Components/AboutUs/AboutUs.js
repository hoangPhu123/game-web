import React from "react";
import Button from "../HomePages/Button";
import ClientComment from "../HomePages/ClientComment";
import ConnectUs from "../HomePages/ConnectUs";
import Numbers from "../HomePages/Numbers";
import LocationHeader from "../SignUp/LocationHeader";
import Teamate from "./Teamate";
import "../../assets/css/aboutUs.css";

export default function AboutUs() {
  return (
    <>
      <LocationHeader title={"About Us"} location={"About Us"} />

      <div className="aboutUsPage">
        <div className="container">
          <div className="aboutUsPage__content row align-items-center">
            <div className="itemAboutPage__left col-lg-6 wow">
              <div className="aboutImage">
                <img
                  src="https://htmldemo.net/bonx/bonx/assets/img/others/about-thumb.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="itemAboutPage__right col-lg-6 wow">
              <div className="itemAbout__title" id="aboutPage__title">
                <h5>About us</h5>
                <h2>Website for all gamers</h2>
              </div>

              <div className="itemAbout__desc" id="aboutPage__desc">
                <p>
                  It is a long established fact that a reader will be distracted
                  the readable content of page when looking at it layout the
                  point using lorem Ipsum is that it has a more-or-less normal
                  distribution.
                </p>

                <p>
                  It is a long established fact that a reader will be distracted
                  the readable content of page when looking at it layout the
                  point using lorem Ipsum is that it has a more-or-less normal
                  distribution.
                </p>

                <Button value={"Play Now"} id={"btnAbout"} />
              </div>
            </div>
          </div>

          <Numbers />

          <Teamate
            img={"https://htmldemo.net/bonx/bonx/assets/img/others/team1.webp"}
            memberName={"Le Trinh Hoang Phu"}
          />
        </div>
      </div>

      <ClientComment />
      <ConnectUs />
    </>
  );
}
