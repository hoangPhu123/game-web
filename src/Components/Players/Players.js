import React, { useEffect, useState } from "react";
import "../../assets/css/Players.css";
import { useGetAllUsers } from "../../service/userService";
import ConnectUs from "../HomePages/ConnectUs";
import LocationHeader from "../SignUp/LocationHeader";
import ItemPlayer from "./ItemPlayer";

export default function Players() {
  const [listUsers, setListUsers] = useState([]);
  const [listUsersTemp, setListUsersTemp] = useState([]);

  const [values, setValues] = useState("");
  const onGetAllUser = useGetAllUsers();

  useEffect(() => {
    onGetAllUser().then((rs) => {
      if (rs) {
        setListUsers(rs?.data?.results);
        setListUsersTemp(rs?.data?.results);
      }
    });
  }, []);

  const renderListPlayer = (list) => {
    return list.map((item, index) => {
      return <ItemPlayer data={item} key={index} />;
    });
  };

  const handleChange = (e) => {
    setValues(e.target.value);
    if (e.target.value !== "") {
      const filterUsers = listUsers.filter((item) => {
        return item.name.toLowerCase().includes(values.toLowerCase());
      });
      return setListUsers(filterUsers);
    } else {
      return setListUsers(listUsersTemp);
    }
  };

  return (
    <div>
      <LocationHeader title={"Players"} location={"Players"} />

      <div className="players__content">
        <div className="container">
          <div className="user_search ">
            <input
              placeholder="Search here"
              type="text"
              onChange={handleChange}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="players__list row mt-12">
            {renderListPlayer(listUsers)}
          </div>
        </div>
      </div>

      <ConnectUs />
    </div>
  );
}
