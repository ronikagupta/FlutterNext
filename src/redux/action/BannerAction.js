import {
  ADD_BANNER_FAIL,
  ADD_BANNER_REQUEST,
  ADD_BANNER_SUCCESS,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  GET_ALL_BANNER_FAIL,
  GET_ALL_BANNER_REQUEST,
  GET_ALL_BANNER_SUCCESS,
  GET_SINGLE_BANNER_FAIL,
  GET_SINGLE_BANNER_REQUEST,
  GET_SINGLE_BANNER_SUCCESS,
  BANNER_CHANGE_STATUS_FAIL,
  BANNER_CHANGE_STATUS_REQUEST,
  BANNER_CHANGE_STATUS_SUCCESS,
  UPDATE_BANNER_FAIL,
  UPDATE_BANNER_REQUEST,
  UPDATE_BANNER_SUCCESS,
} from "../constant/BannerConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllBanner = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_BANNER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_BANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllBannerPre = (data) => {
  return {
    type: GET_ALL_BANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleBanner = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_BANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_BANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleBannerPre = (data) => {
  return {
    type: GET_SINGLE_BANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_BANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_BANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The BANNER!");
      });
  };
};
export const createBannerPre = (data) => {
  toast.success("Banner Created Successfully!");
  return {
    type: ADD_BANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateBanner = (data) => {
  console.log("data", data);
  return function (dispatch) {
    dispatch({
      type: UPDATE_BANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateBannerPre(res.data));
        // dispatch(loadAllBANNER());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_BANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The BANNER!");
      });
  };
};
export const updateBannerPre = (data) => {
  toast.success("Banner Updated Successfully!");

  return {
    type: UPDATE_BANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_BANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteBannerPre(res.data));
        // dispatch(loadAllBanner());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteBannerPre = (data) => {
  toast.error("Banner Deleted Successfully!");
  return {
    type: DELETE_BANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const BannerChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: BANNER_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-visible/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(BannerChangeStatusPre(res.data));
        // dispatch(loadAllBANNER());
      })
      .catch((error) => {
        dispatch({
          type: BANNER_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const BannerChangeStatusPre = (data) => {
  toast.success("Banner changeStatus Successfully!");
  return {
    type: BANNER_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllBanner,
  loadSingleBanner,
  createBanner,
  updateBanner,
  deleteBanner,
  BannerChangeStatus,
};
