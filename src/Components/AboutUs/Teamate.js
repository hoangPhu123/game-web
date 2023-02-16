import React from "react";
import "../../assets/css/teamate.css";

export default function Teamate({ img, memberName }) {
  // let { img, memberName } = this.props;
  return (
    <div className="game__team">
      <div className="container">
        <div className="gameTeam__content">
          <div className="team__title text-center wow">
            <h2>Meet My Team</h2>
            <p>
              Getting the best results <br /> by attempting new things and
              learning new things gradually.
            </p>
          </div>

          <div className="team__member row justify-content-center">
            <div className="member col-lg-4 col-md-6 col-sm-6">
              <div className="member__content wow">
                <a href="#">
                  <img src={img} alt="" />
                </a>

                <div className="member__position">
                  <h3>
                    <a href="#">{memberName}</a>
                  </h3>
                  <span>Team Member</span>
                </div>
              </div>
            </div>

            <div className="member col-lg-4 col-md-6 col-sm-6">
              <div className="member__content wow">
                <a href="#">
                  <img src={img} alt="" />
                </a>

                <div className="member__position">
                  <h3>
                    <a href="#">{memberName}</a>
                  </h3>
                  <span>Team Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
