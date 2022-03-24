import {
  ADD_ABOUTIMAGE_FAIL,
  ADD_ABOUTIMAGE_SUCCESS,
  ADD_ABOUTIMAGE_REQUEST,
  DELETE_ABOUTIMAGE_REQUEST,
  DELETE_ABOUTIMAGE_SUCCESS,
  GETDETAIL_ABOUTIMAGE_REQUEST,
  GETDETAIL_ABOUTIMAGE_FAIL,
  GETDETAIL_ABOUTIMAGE_SUCCESS,
  UPDATE_ABOUTIMAGE_FAIL,
  UPDATE_ABOUTIMAGE_SUCCESS,
  UPDATE_ABOUTIMAGE_REQUEST,
  DELETE_ABOUTIMAGE_FAIL,
  GETALL_ABOUTIMAGE_FAIL,
  GETALL_ABOUTIMAGE_SUCCESS,
  GETALL_ABOUTIMAGE_REQUEST,
  ABOUTIMAGE_CHANGE_STATUS_FAIL,
  ABOUTIMAGE_CHANGE_STATUS_REQUEST,
  ABOUTIMAGE_CHANGE_STATUS_SUCCESS,
} from "../constant/AboutusImageConstant";
import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllAboutImage = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_ABOUTIMAGE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllAboutImagePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_ABOUTIMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllAboutImagePre = (data) => {
  return {
    type: GETALL_ABOUTIMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleAboutImage = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_ABOUTIMAGE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleAboutImagePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_ABOUTIMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleAboutImagePre = (data) => {
  return {
    type: GETDETAIL_ABOUTIMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createAboutImage = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_ABOUTIMAGE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createAboutImagePre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_ABOUTIMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The AboutImage!");
      });
  };
};
export const createAboutImagePre = (data) => {
  toast.success("AboutImage Created Successfully!");

  return {
    type: ADD_ABOUTIMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateAboutImage = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ABOUTIMAGE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateAboutImagePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ABOUTIMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The AboutImage!");
      });
  };
};
export const updateAboutImagePre = (data) => {
  toast.success("AboutImage Updated Successfully!");

  return {
    type: UPDATE_ABOUTIMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteAboutImage = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ABOUTIMAGE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteAboutImagePre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ABOUTIMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteAboutImagePre = (data) => {
  toast.error("AboutImage Deleted Successfully!");
  return {
    type: DELETE_ABOUTIMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const AboutImageChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: ABOUTIMAGE_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(AboutImageChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ABOUTIMAGE_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const AboutImageChangeStatusPre = (data) => {
  toast.success("AboutImage Status Successfully!");
  return {
    type: ABOUTIMAGE_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllAboutImage,
  loadSingleAboutImage,
  createAboutImage,
  updateAboutImage,
  deleteAboutImage,
  AboutImageChangeStatus,
};
