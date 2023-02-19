import { message } from "antd";
import { userLocalService } from "../../service/localService";
import {
  postLogin,
  postRegister,
  postContact,
} from "../../service/userService";
import { SET_USER_LOGIN, SET_USER_LOGUP } from "../constant/userConstant";
import swal from "sweetalert";

export const setUserActionService = (values, onSuccess) => {
  return (dispatch) => {
    postLogin(values)
      .then((res) => {
        swal({
          title: "Successfully Login",
          icon: "success",
          timer: 2000,
          button: false,
        });

        dispatch({
          type: SET_USER_LOGIN,
          payload: res.data,
        });

        onSuccess();
        userLocalService.set(res.data);
      })
      .catch((err) => {
        swal({
          title: err.response.data.messages,
          icon: "warning",
          text: "An error occurred, please return to the homepage or try again",
          timer: 2000,
          button: false,
        });
      });
  };
};

export const setUserLogUpActionService = (values, onSuccess) => {
  return (dispatch) => {
    if (values.confirm) {
      delete values.confirm;
    }

    postRegister(values)
      .then((res) => {
        swal({
          title: "Successfully register",
          icon: "success",
          timer: 2000,
          button: false,
        });
        dispatch({
          type: SET_USER_LOGUP,
        });
        onSuccess();
      })
      .catch((err) => {
        swal({
          title: err.response.data.messages,
          icon: "warning",
          text: "An error occurred, please return to the homepage or try again",
          timer: 2000,
          button: false,
        });
      });
  };
};

export const setUserContactActionService = (values, onSuccess) => {
  return (dispatch) => {
    postContact(values)
      .then((res) => {
        swal({
          title: "Successfully send contact",
          icon: "success",
          timer: 2000,
          button: false,
        });
        onSuccess();
      })
      .catch((err) => {
        message.error(err.response.data.message);
      });
  };
};
