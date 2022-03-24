import {
  ADD_ABOUT_FAIL,
  ADD_ABOUT_SUCCESS,
  ADD_ABOUT_REQUEST,
  DELETE_ABOUT_REQUEST,
  DELETE_ABOUT_SUCCESS,
  GETDETAIL_ABOUT_REQUEST,
  GETDETAIL_ABOUT_FAIL,
  GETDETAIL_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAIL,
  UPDATE_ABOUT_SUCCESS,
  UPDATE_ABOUT_REQUEST,
  DELETE_ABOUT_FAIL,
  GETALL_ABOUT_FAIL,
  GETALL_ABOUT_SUCCESS,
  GETALL_ABOUT_REQUEST,
  ABOUT_CHANGE_STATUS_FAIL,
  ABOUT_CHANGE_STATUS_REQUEST,
  ABOUT_CHANGE_STATUS_SUCCESS,
} from "../constant/AboutConstant";
import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllAbout = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_ABOUT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/aboutus-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllAboutPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_ABOUT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllAboutPre = (data) => {
  return {
    type: GETALL_ABOUT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleAbout = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_ABOUT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/aboutus-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleAboutPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_ABOUT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleAboutPre = (data) => {
  return {
    type: GETDETAIL_ABOUT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createAbout = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_ABOUT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/aboutus-static-content/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createAboutPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_ABOUT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The About!");
      });
  };
};
export const createAboutPre = (data) => {
  toast.success("About Created Successfully!");

  return {
    type: ADD_ABOUT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateAbout = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ABOUT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/aboutus-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateAboutPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ABOUT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The About!");
      });
  };
};
export const updateAboutPre = (data) => {
  toast.success("About Updated Successfully!");

  return {
    type: UPDATE_ABOUT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteAbout = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ABOUT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/aboutus-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteAboutPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ABOUT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteAboutPre = (data) => {
  toast.error("About Deleted Successfully!");
  return {
    type: DELETE_ABOUT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const AboutChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: ABOUT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/aboutus-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(AboutChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ABOUT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const AboutChangeStatusPre = (data) => {
  toast.success("About Status Successfully!");
  return {
    type: ABOUT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllAbout,
  loadSingleAbout,
  createAbout,
  updateAbout,
  deleteAbout,
  AboutChangeStatus,
};
