import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLocalService } from "../service/localService";
import { useLogout } from "../service/userService";

function UserNav() {
  let user = useSelector((state) => {
    return state.userReducer.user;
  });

  const navigate = useNavigate();
  const handleLogout = async () => {
    // delete data from localStorage
    navigate("/signin");
    userLocalService.remove();
    window.location.reload();
    console.log("logout");
  };

  const renderContent = () => {
    if (user) {
      return (
        <>
          <span>{user.user?.name}</span>
          <button
            className="border-2 border-gray-400 px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-700 font-black"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              window.location.href = "/signin";
            }}
            className="border-2 border-gray-400 px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-700 font-black"
          >
            Login
          </button>

          <button
            onClick={() => {
              window.location.href = "/signup";
            }}
            className="border-2 border-gray-400 px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-700 font-black"
          >
            Sign up
          </button>
        </>
      );
    }
  };

  return (
    <div>
      <span className="space-x-3">{renderContent()}</span>
    </div>
  );
}

export default UserNav;
