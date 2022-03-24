import {
  ADD_DASHBOARDBANNER_FAIL,
  ADD_DASHBOARDBANNER_SUCCESS,
  ADD_DASHBOARDBANNER_REQUEST,
  DELETE_DASHBOARDBANNER_REQUEST,
  DELETE_DASHBOARDBANNER_SUCCESS,
  GETDETAIL_DASHBOARDBANNER_REQUEST,
  GETDETAIL_DASHBOARDBANNER_FAIL,
  GETDETAIL_DASHBOARDBANNER_SUCCESS,
  UPDATE_DASHBOARDBANNER_FAIL,
  UPDATE_DASHBOARDBANNER_SUCCESS,
  UPDATE_DASHBOARDBANNER_REQUEST,
  DELETE_DASHBOARDBANNER_FAIL,
  GETALL_DASHBOARDBANNER_FAIL,
  GETALL_DASHBOARDBANNER_SUCCESS,
  GETALL_DASHBOARDBANNER_REQUEST,
  DASHBOARDBANNER_CHANGE_STATUS_FAIL,
  DASHBOARDBANNER_CHANGE_STATUS_REQUEST,
  DASHBOARDBANNER_CHANGE_STATUS_SUCCESS,
} from "../constant/DashboardBannerConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllDashboardBanner = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_DASHBOARDBANNER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-banner/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllDashboardBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_DASHBOARDBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllDashboardBannerPre = (data) => {
  return {
    type: GETALL_DASHBOARDBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleDashboardBanner = (id) => {
  let data = { id: id };
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_DASHBOARDBANNER_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-banner/${id}/`,
      method: "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleDashboardBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_DASHBOARDBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleDashboardBannerPre = (data) => {
  return {
    type: GETDETAIL_DASHBOARDBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createDashboardBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_DASHBOARDBANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-banner/`,
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
        dispatch(createDashboardBannerPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_DASHBOARDBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The DashboardBanner!");
      });
  };
};
export const createDashboardBannerPre = (data) => {
  toast.success("DashboardBanner Created Successfully!");

  return {
    type: ADD_DASHBOARDBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateDashboardBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DASHBOARDBANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-banner/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateDashboardBannerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_DASHBOARDBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The DashboardBanner!");
      });
  };
};
export const updateDashboardBannerPre = (data) => {
  toast.success("DashboardBanner Updated Successfully!");

  return {
    type: UPDATE_DASHBOARDBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteDashboardBanner = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DASHBOARDBANNER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-banner-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteDashboardBannerPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_DASHBOARDBANNER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteDashboardBannerPre = (data) => {
  toast.error("DashboardBanner Deleted Successfully!");
  return {
    type: DELETE_DASHBOARDBANNER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const DashboardBannerChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: DASHBOARDBANNER_CHANGE_STATUS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-banner-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(DashboardBannerChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: DASHBOARDBANNER_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const DashboardBannerChangeStatusPre = (data) => {
  toast.success("DashboardBanner Status Successfully!");
  return {
    type: DASHBOARDBANNER_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllDashboardBanner,
  loadSingleDashboardBanner,
  createDashboardBanner,
  updateDashboardBanner,
  deleteDashboardBanner,
  DashboardBannerChangeStatus,
};
