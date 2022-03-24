import {
  ADD_DASHBOARDCONTENT_FAIL,
  ADD_DASHBOARDCONTENT_SUCCESS,
  ADD_DASHBOARDCONTENT_REQUEST,
  DELETE_DASHBOARDCONTENT_REQUEST,
  DELETE_DASHBOARDCONTENT_SUCCESS,
  GETDETAIL_DASHBOARDCONTENT_REQUEST,
  GETDETAIL_DASHBOARDCONTENT_FAIL,
  GETDETAIL_DASHBOARDCONTENT_SUCCESS,
  UPDATE_DASHBOARDCONTENT_FAIL,
  UPDATE_DASHBOARDCONTENT_SUCCESS,
  UPDATE_DASHBOARDCONTENT_REQUEST,
  DELETE_DASHBOARDCONTENT_FAIL,
  GETALL_DASHBOARDCONTENT_FAIL,
  GETALL_DASHBOARDCONTENT_SUCCESS,
  GETALL_DASHBOARDCONTENT_REQUEST,
  DASHBOARDCONTENT_CHANGE_STATUS_FAIL,
  DASHBOARDCONTENT_CHANGE_STATUS_REQUEST,
  DASHBOARDCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/DashboardContentConstant";
import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Dashboard

const loadAllDashboardContent = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_DASHBOARDCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllDashboardContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_DASHBOARDCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllDashboardContentPre = (data) => {
  return {
    type: GETALL_DASHBOARDCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleDashboardContent = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_DASHBOARDCONTENT_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleDashboardContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_DASHBOARDCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleDashboardContentPre = (data) => {
  return {
    type: GETDETAIL_DASHBOARDCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createDashboardContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_DASHBOARDCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-static-content/`,
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
        dispatch(createDashboardContentPre(res.data));
        // dispatch(loadAllDashboard());
      })
      .catch((error) => {
        dispatch({
          type: ADD_DASHBOARDCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The DashboardContent!");
      });
  };
};
export const createDashboardContentPre = (data) => {
  toast.success("DashboardContent Created Successfully!");

  return {
    type: ADD_DASHBOARDCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateDashboardContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DASHBOARDCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateDashboardContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_DASHBOARDCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The DashboardContent!");
      });
  };
};
export const updateDashboardContentPre = (data) => {
  toast.success("DashboardContent Updated Successfully!");

  return {
    type: UPDATE_DASHBOARDCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteDashboardContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DASHBOARDCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteDashboardContentPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_DASHBOARDCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteDashboardContentPre = (data) => {
  toast.error("DashboardContent Deleted Successfully!");
  return {
    type: DELETE_DASHBOARDCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const DashboardContentChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: DASHBOARDCONTENT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/dashboard-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(DashboardContentChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: DASHBOARDCONTENT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const DashboardContentChangeStatusPre = (data) => {
  toast.success("DashboardContent Status Successfully!");
  return {
    type: DASHBOARDCONTENT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllDashboardContent,
  loadSingleDashboardContent,
  createDashboardContent,
  updateDashboardContent,
  deleteDashboardContent,
  DashboardContentChangeStatus,
};
