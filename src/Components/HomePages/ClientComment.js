import React from "react";
import TestSwiper from "./TestSwiper";
import "../../assets/css/Testimonial.css";

export default function ClientComment() {
  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="testimonial__content">
          <div className="testimonial__title">
            <p>Testimonial</p>
            <h2>What Our Clients Say’s</h2>
          </div>

          <div className="testimonial__detail">
            <TestSwiper />
          </div>
        </div>
      </div>
    </section>
  );
}
