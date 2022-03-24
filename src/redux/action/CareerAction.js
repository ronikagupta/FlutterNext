import {
  ADD_CAREER_FAIL,
  ADD_CAREER_SUCCESS,
  DELETE_CAREER_REQUEST,
  DELETE_CAREER_SUCCESS,
  GETALL_CAREER_SUCCESS,
  GETDETAIL_CAREER_REQUEST,
  GETDETAIL_CAREER_FAIL,
  UPDATE_CAREER_FAIL,
  UPDATE_CAREER_SUCCESS,
  ADD_CAREER_REQUEST,
  DELETE_CAREER_FAIL,
  GETALL_CAREER_FAIL,
  GETALL_CAREER_REQUEST,
  GETDETAIL_CAREER_SUCCESS,
  UPDATE_CAREER_REQUEST,
  CAREER_CHANGE_STATUS_FAIL,
  CAREER_CHANGE_STATUS_REQUEST,
  CAREER_CHANGE_STATUS_SUCCESS,
} from "../constant/CareerConstant";
import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllCareer = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_CAREER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-career/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllCareerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_CAREER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllCareerPre = (data) => {
  return {
    type: GETALL_CAREER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleCareer = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_CAREER_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-career/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleCareerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_CAREER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleCareerPre = (data) => {
  return {
    type: GETDETAIL_CAREER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createCareer = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CAREER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-career/`,
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
        dispatch(createCareerPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_CAREER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Career!");
      });
  };
};
export const createCareerPre = (data) => {
  toast.success("Career Created Successfully!");

  return {
    type: ADD_CAREER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateCareer = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CAREER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-career/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateCareerPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CAREER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Career!");
      });
  };
};
export const updateCareerPre = (data) => {
  toast.success("Career Updated Successfully!");

  return {
    type: UPDATE_CAREER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteCareer = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CAREER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-career-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteCareerPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CAREER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteCareerPre = (data) => {
  toast.error("Career Deleted Successfully!");
  return {
    type: DELETE_CAREER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const CareerChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: CAREER_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-career-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CareerChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: CAREER_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CareerChangeStatusPre = (data) => {
  toast.success("Career Status Successfully!");
  return {
    type: CAREER_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllCareer,
  loadSingleCareer,
  createCareer,
  updateCareer,
  deleteCareer,
  CareerChangeStatus,
};
