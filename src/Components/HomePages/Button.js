import React from "react";
import "../../assets/css/button.css";

export default function Button({ id, value }) {
  return (
    <div className="btnTem">
      <a href="#" className="btn btn-link" id={id}>
        {value}
      </a>
    </div>
  );
}
