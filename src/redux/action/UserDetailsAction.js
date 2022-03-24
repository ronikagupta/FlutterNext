import {
  ADD_USER_DETAIL_FAIL,
  ADD_USER_DETAIL_REQUEST,
  ADD_USER_DETAIL_SUCCESS,
  DELETE_USER_DETAIL_FAIL,
  DELETE_USER_DETAIL_REQUEST,
  DELETE_USER_DETAIL_SUCCESS,
  GET_ALL_USER_DETAIL_FAIL,
  GET_ALL_USER_DETAIL_REQUEST,
  GET_ALL_USER_DETAIL_SUCCESS,
  GET_SINGLE_USER_DETAIL_FAIL,
  GET_SINGLE_USER_DETAIL_REQUEST,
  GET_SINGLE_USER_DETAIL_SUCCESS,
  UPDATE_USER_DETAIL_FAIL,
  UPDATE_USER_DETAIL_REQUEST,
  UPDATE_USER_DETAIL_SUCCESS,
  USER_DETAIL_CHANGE_STATUS_FAIL,
  USER_DETAIL_CHANGE_STATUS_REQUEST,
  USER_DETAIL_CHANGE_STATUS_SUCCESS,
} from "../constant/UserDetailsConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the User Details

const loadAllUserDetails = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_USER_DETAIL_REQUEST,
      payload: true,
    });

    let OPTION = {
      // url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllUserDetailsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_USER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllUserDetailsPre = (data) => {
  return {
    type: GET_ALL_USER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleUserDetails = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_USER_DETAIL_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-details/${id}`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleUserDetailsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_USER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleUserDetailsPre = (data) => {
  return {
    type: GET_SINGLE_USER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createUserDetails = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_USER_DETAIL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-details/`,
      method: "POST",
      data: data,

      headers: {
        Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createUserDetailsPre(res.data));
        // dispatch(loadAllUser Details());
      })
      .catch((error) => {
        dispatch({
          type: ADD_USER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The User Details");
      });
  };
};
export const createUserDetailsPre = (data) => {
  toast.success("User Details Created Successfully!");

  return {
    type: ADD_USER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateUserDetails = (id, data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_DETAIL_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-details/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateUserDetailsPre(res.data));
        // dispatch(loadAllUser Details());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The User Details!");
      });
  };
};
export const updateUserDetailsPre = (data) => {
  toast.error("User Details Updated Successfully!");

  return {
    type: UPDATE_USER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteUserDetails = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_USER_DETAIL_REQUEST,
      payload: result,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-details-delete/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteUserDetailsPre(res.data));
        // dispatch(loadAllUser Details());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteUserDetailsPre = (data) => {
  toast.success("User Details Deleted Successfully!");
  return {
    type: DELETE_USER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const UserDetailsChangeStatus = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: USER_DETAIL_CHANGE_STATUS_REQUEST,
      payload: result,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-details-change-status/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(UserDetailsChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: USER_DETAIL_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const UserDetailsChangeStatusPre = (data) => {
  toast.success("User Details Change Status Successfully!");
  return {
    type: USER_DETAIL_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllUserDetails,
  loadSingleUserDetails,
  createUserDetails,
  updateUserDetails,
  deleteUserDetails,
  UserDetailsChangeStatus,
};
