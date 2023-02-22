import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { https } from "./configURL";

export let postLogin = (data) => {
  return https.post("/auth/login", data);
};

export let postRegister = (data) => {
  return https.post("/auth/register", data);
};

export let postContact = (data) => {
  return https.post("/contacts", data);
};

export const useGetAllUsers = () => {
  return async () => {
    try {
      const rs = await https.get(`/users`);
      return rs;
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };
};

// find a user
export const useGetUserInfo = (data) => {
  const user = useSelector((state) => {
    return state?.userReducer?.user?.user;
  });
  return https.get(`/users/${user.id}`, data);
};

// update user info
export const useUpdateUserInfo = () => {
  const user = useSelector((state) => {
    return state?.userReducer?.user?.user;
  });

  return async (userInfo) => {
    try {
      const response = await https.patch(`/users/${user.id}`, {
        userInfo,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};
// const navigate = useNavigate();

// export const useUpdateUserInfo = (data) => {
//   const user = useSelector((state) => {
//     return state.userReducer.user.user;
//   });
//   return https.patch(`/users/${user.id}`, data);
// };
