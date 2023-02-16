import React from "react";
import { useSelector } from "react-redux";
import { userLocalService } from "../service/localService";

function UserNav() {
  let user = useSelector((state) => {
    return state.userReducer.user;
  });

  const handleLogout = () => {
    // delete data from localStorage
    userLocalService.remove();
    window.location.reload();
  };

  const renderContent = () => {
    if (user) {
      return (
        <>
          <span>{user?.hoTen}</span>
          <button
            className="border-2 border-gray-400 px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-700 font-black"
            onClick={handleLogout}
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
