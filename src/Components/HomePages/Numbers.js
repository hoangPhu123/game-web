import React from "react";
import "../../assets/css/numbers.css";
import CountUp from "react-countup";

export default function Numbers() {
  return (
    <section className="number">
      <div className="container">
        <div className="number__content">
          <div className="number__item number1">
            <i className="fa fa-smile-beam" />
            <p>
              <CountUp end={27} duration={5} className="countNumber" /> MI
            </p>
            <p>Satisfied Clients</p>
          </div>
          <div className="number__item number2">
            <i className="fa fa-chart-line" />
            <p>
              <CountUp end={75} duration={5} className="countNumber " /> MI
            </p>
            <p>Total Games</p>
          </div>
          <div className="number__item number3">
            <i className="fa fa-rocket" />
            <p>
              <CountUp end={2000} duration={5} className="countNumber " /> MI
            </p>
            <p>Youtube Streams</p>
          </div>
          <div className="number__item number4">
            <i className="fa fa-birthday-cake" />
            <p>
              <CountUp end={99} duration={5} className="countNumber" />
            </p>
            <p>Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
