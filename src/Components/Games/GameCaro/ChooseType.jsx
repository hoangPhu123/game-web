import React from "react";
import { useNavigate } from "react-router-dom";
import LocationHeader from "../../SignUp/LocationHeader";

const ChooseType = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          onClick={() => {
            navigate("/offlineCaroGame/");
          }}
          className="px-5 py-2 rounded-full bg-blue-300"
        >
          Offline
        </div>
        <div
          onClick={() => {
            navigate("/caroGame/room/");
          }}
          className="px-5 py-2 rounded-full text-red-500 bg-red-300 mx-2 cursor-pointer"
        >
          {" "}
          Online
        </div>
      </div>
    </div>
  );
};

export default ChooseType;
