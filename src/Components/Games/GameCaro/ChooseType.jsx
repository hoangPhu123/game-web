import React from "react";
import { useNavigate } from "react-router-dom";
import ComeBack from "../../ComeBack/ComeBack";

const ChooseType = () => {
  const navigate = useNavigate();
  return (
    <>
      <ComeBack src={"/allGames"} />
      <div className="flex justify-center items-center typeCaro">
        <div
          onClick={() => {
            navigate("/offlineCaroGame/");
          }}
          className="offLineType"
        >
          Offline
        </div>
        <div
          onClick={() => {
            navigate("/caroGame/room/");
          }}
          className="onlLineType"
        >
          {" "}
          Online
        </div>
      </div>
    </>
  );
};

export default ChooseType;
