import {
  ADD_STATICECONTENT_FAIL,
  ADD_STATICECONTENT_SUCCESS,
  ADD_STATICECONTENT_REQUEST,
  DELETE_STATICECONTENT_REQUEST,
  DELETE_STATICECONTENT_SUCCESS,
  GETDETAIL_STATICECONTENT_REQUEST,
  GETDETAIL_STATICECONTENT_FAIL,
  GETDETAIL_STATICECONTENT_SUCCESS,
  UPDATE_STATICECONTENT_FAIL,
  UPDATE_STATICECONTENT_SUCCESS,
  UPDATE_STATICECONTENT_REQUEST,
  DELETE_STATICECONTENT_FAIL,
  GETALL_STATICECONTENT_FAIL,
  GETALL_STATICECONTENT_SUCCESS,
  GETALL_STATICECONTENT_REQUEST,
  STATICECONTENT_CHANGE_STATUS_FAIL,
  STATICECONTENT_CHANGE_STATUS_REQUEST,
  STATICECONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/StaticeContentConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Statice

const loadAllStaticeContent = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_STATICECONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content1/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllStaticeContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_STATICECONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllStaticeContentPre = (data) => {
  return {
    type: GETALL_STATICECONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleStaticeContent = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_STATICECONTENT_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content1/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleStaticeContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_STATICECONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleStaticeContentPre = (data) => {
  return {
    type: GETDETAIL_STATICECONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createStaticeContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_STATICECONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content1/`,
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
        dispatch(createStaticeContentPre(res.data));
        // dispatch(loadAllStatice());
      })
      .catch((error) => {
        dispatch({
          type: ADD_STATICECONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The StaticeContent!");
      });
  };
};
export const createStaticeContentPre = (data) => {
  toast.success("StaticeContent Created Successfully!");

  return {
    type: ADD_STATICECONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateStaticeContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_STATICECONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content1/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateStaticeContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_STATICECONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The StaticeContent!");
      });
  };
};
export const updateStaticeContentPre = (data) => {
  toast.success("StaticeContent Updated Successfully!");

  return {
    type: UPDATE_STATICECONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteStaticeContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_STATICECONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content1-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteStaticeContentPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_STATICECONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteStaticeContentPre = (data) => {
  toast.error("StaticeContent Deleted Successfully!");
  return {
    type: DELETE_STATICECONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const StaticeContentChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: STATICECONTENT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/static-content1-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(StaticeContentChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: STATICECONTENT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const StaticeContentChangeStatusPre = (data) => {
  toast.success("StaticeContent Status Successfully!");
  return {
    type: STATICECONTENT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllStaticeContent,
  loadSingleStaticeContent,
  createStaticeContent,
  updateStaticeContent,
  deleteStaticeContent,
  StaticeContentChangeStatus,
};
