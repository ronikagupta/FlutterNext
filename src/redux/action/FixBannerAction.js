import {
  ADD_FIXBANNER_FAIL,
  ADD_FIXBANNER_SUCCESS,
  DELETE_FIXBANNER_REQUEST,
  DELETE_FIXBANNER_SUCCESS,
  GETALL_FIXBANNER_SUCCESS,
  GETDETAIL_FIXBANNER_REQUEST,
  GETDETAIL_FIXBANNER_FAIL,
  UPDATE_FIXBANNER_FAIL,
  UPDATE_FIXBANNER_SUCCESS,
  ADD_FIXBANNER_REQUEST,
  DELETE_FIXBANNER_FAIL,
  GETALL_FIXBANNER_FAIL,
  GETALL_FIXBANNER_REQUEST,
  GETDETAIL_FIXBANNER_SUCCESS,
  UPDATE_FIXBANNER_REQUEST,
  FIXBANNER_CHANGE_STATUS_FAIL,
  FIXBANNER_CHANGE_STATUS_REQUEST,
  FIXBANNER_CHANGE_STATUS_SUCCESS,
} from "../constant/FixBannerConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the FixBanner

const loadAllFixBanner = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_FIXBANNER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllFixBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_FIXBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllFixBannerPre = (data) => {
  return {
    type: GETALL_FIXBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};
const loadFixBanner = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETALL_FIXBANNER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadFixBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_FIXBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadFixBannerPre = (data) => {
  return {
    type: GETALL_FIXBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleFixBanner = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_FIXBANNER_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleFixBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_FIXBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleFixBannerPre = (data) => {
  return {
    type: GETDETAIL_FIXBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createFixBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_FIXBANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
        // Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createFixBannerPre(res.data));
        // dispatch(loadAllFixBanner());
      })
      .catch((error) => {
        dispatch({
          type: ADD_FIXBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The FixBanner!");
      });
  };
};
export const createFixBannerPre = (data) => {
  toast.success("FixBanner Created Successfully!");

  return {
    type: ADD_FIXBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateFixBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_FIXBANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateFixBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_FIXBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The FixBanner!");
      });
  };
};
export const updateFixBannerPre = (data) => {
  toast.success("FixBanner Updated Successfully!");

  return {
    type: UPDATE_FIXBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteFixBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_FIXBANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteFixBannerPre(res.data));
        dispatch(loadAllFixBanner());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_FIXBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteFixBannerPre = (data) => {
  toast.error("FixBanner Deleted Successfully!");
  return {
    type: DELETE_FIXBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const FixBannerChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: FIXBANNER_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content2-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(FixBannerChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: FIXBANNER_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const FixBannerChangeStatusPre = (data) => {
  toast.success("FixBanner Status Successfully!");
  return {
    type: FIXBANNER_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllFixBanner,
  loadFixBanner,
  loadSingleFixBanner,
  createFixBanner,
  updateFixBanner,
  deleteFixBanner,
  FixBannerChangeStatus,
};

// Which product is right for you
