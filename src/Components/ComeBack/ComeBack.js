import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/ComeBack.css";

function ComeBack({ src }) {
  const navigate = useNavigate();

  const comeBack = () => {
    navigate(`${src}`);
  };
  return (
    <>
      <button className="comeback ml-9 mt-6" onClick={comeBack}>
        <i className="fa fa-arrow-left text-3xl"></i>
      </button>
    </>
  );
}

export default ComeBack;
