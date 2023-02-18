import React, { useEffect, useState } from "react";
import "../../assets/css/playerDetail.css";
import ConnectUs from "../HomePages/ConnectUs";
import Numbers from "../HomePages/Numbers";
import ItemPlayer from "../Players/ItemPlayer";
import LocationHeader from "../SignUp/LocationHeader";
import ItemDetail from "./ItemDetail";
import { useGetAllUsers } from "../../service/userService";

export default function PlayerDetail() {
  const [listUsers, setListUsers] = useState([]);
  const [activePlayer, setActivePlayer] = useState();

  const renderListPlayerInfo = (list) => {
    return list?.map((item, index) => {
      return (
        <ItemPlayer data={item} key={index} setActivePlayer={setActivePlayer} />
      );
    });
  };
  useEffect(() => {
    setActivePlayer(listUsers[0]);
  }, [listUsers]);

  const onGetAllUser = useGetAllUsers();
  useEffect(() => {
    onGetAllUser().then((rs) => {
      if (rs) {
        setListUsers(rs?.data?.results);
      }
    });
  }, []);

  return (
    <div>
      <LocationHeader title={"Player Detail"} location={"Player Detail"} />

      <div className="player__detail">
        <div className="container">
          <div className="playerDetail__content">
            <ItemDetail data={activePlayer} />
          </div>
        </div>
      </div>

      <div className="players__content playerDetail__list">
        <div className="container">
          <div className="players__list row ">
            {renderListPlayerInfo(listUsers)}
          </div>
        </div>
      </div>

      <Numbers />
      <ConnectUs />
    </div>
  );
}
