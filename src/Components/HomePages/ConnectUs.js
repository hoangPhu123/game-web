import React from "react";
import Button from "./Button";
import "../../assets/css/connectUs.css";

export default function ConnectUs() {
  return (
    <section className="connect__withUs">
      <div className="container">
        <div className="withUs__content d-flex align-items-center justify-content-between">
          <div className="withUs__left">
            <h2>
              Connect with us <br />
              for gamING update.
            </h2>
          </div>
          <div className="withUs__right">
            <Button value={"Connect Now"} id="btn__connectUs" />
          </div>
        </div>
      </div>
    </section>
  );
}
