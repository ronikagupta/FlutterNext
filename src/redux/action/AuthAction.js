import setAuthorizationToken from "../../utils/setAutorization";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_ERROR,
  SET_CURRENT_USER,
  SIGNOUT_USER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
} from "../constant/AuthConstant";
const axios = require("axios");

export const signinUser = (email, password) => {
  return function (dispatch) {
    dispatch({
      type: SIGNIN_USER_REQUEST,
      payload: true,
    });
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/login/`,
      method: "POST",
      data: {
        email: email,
        password: password,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        const msg = res.data.msg;
        if (msg === "User Login Successfully") {
          const token = res.data.data.token;
          localStorage.setItem("token", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(jwtDecode(token)));
          dispatch({
            type: SIGNIN_USER_SUCCESS,
            payload: false,
            isSigninIn: true,
            msg: res.data.msg,
          });
          toast.success("Admin Logged In!");
        } else {
          dispatch({
            type: SIGNIN_USER_ERROR,
            payload: false,
            isSigninIn: false,
            msg: res.data.msg,
          });
          toast.error("Admin Login Fail!");
        }
      })
      .catch((error) => {
        dispatch({
          type: SIGNIN_USER_ERROR,
          loading: false,
          payload: false,
          message: error.message,
        });
        toast.success("Admin Login Fail!");
      });
  };
};

export const signOut = () => {
  return function (dispatch) {
    dispatch({
      type: SIGNIN_USER_REQUEST,
      payload: true,
    });
    localStorage.removeItem("token");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    dispatch({
      type: SIGNOUT_USER,
      payload: false,
    });
    toast.success("Admin Logout!");

    dispatch({
      type: SIGNIN_USER_ERROR,
      loading: false,
      payload: "",
    });
    window.location.href = "/";
  };
};
// SET CURRENT USER ACTION
export const setCurrentUser = (result) => {
  return {
    type: SET_CURRENT_USER,
    payload: result,
  };
};

// Register User
export const register = (email, password, confirm_password, mobile) => {
  return function (dispatch) {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/register/`,
      method: "POST",
      data: {
        email,
        password,
        confirm_password,
        mobile,
      },

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createBannerPre(res.data));
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      })

      .catch((error) => {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: false,
          error: error,
          isSignUp: error.success,
          msg: "Failed to create user registration",
        });
        toast.error(error.msg);
      });
  };
};
export const createBannerPre = (data) => {
  toast.success(data.msg);
  return {
    type: USER_REGISTER_SUCCESS,
    isSignUp: data.success,
    result: data,
    payload: false,
    msg: data.msg,
  };
};
