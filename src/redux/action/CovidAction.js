import {
  ADD_COVID_FAIL,
  ADD_COVID_REQUEST,
  ADD_COVID_SUCCESS,
  DELETE_COVID_SUCCESS,
  DELETE_COVID_REQUEST,
  DELETE_COVID_FAIL,
  GET_ALL_COVID_FAIL,
  GET_ALL_COVID_REQUEST,
  GET_ALL_COVID_SUCCESS,
  GET_SINGLE_COVID_FAIL,
  GET_SINGLE_COVID_REQUEST,
  GET_SINGLE_COVID_SUCCESS,
  UPDATE_COVID_FAIL,
  UPDATE_COVID_REQUEST,
  UPDATE_COVID_SUCCESS,
  COVID_CHANGE_STATUS_FAIL,
  COVID_CHANGE_STATUS_REQUEST,
  COVID_CHANGE_STATUS_SUCCESS,
} from "../constant/CovidConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllCovid = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_COVID_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/covid-update-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("res", res);
        dispatch(loadAllCovidPre(res.data));
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch({
          type: GET_ALL_COVID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllCovidPre = (data) => {
  return {
    type: GET_ALL_COVID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleCovid = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_COVID_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/covid-update-static-content/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleCovidPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_COVID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleCovidPre = (data) => {
  return {
    type: GET_SINGLE_COVID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createCovid = (heading, content) => {
  // console.log("data", data);
  return function (dispatch) {
    dispatch({
      type: ADD_COVID_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/covid-update-static-content/`,
      method: "POST",
      data: { heading, content },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("res", res.data);
        dispatch(createCovidPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch({
          type: ADD_COVID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Covid!");
      });
  };
};
export const createCovidPre = (data) => {
  toast.success("Covid Created Successfully!");

  return {
    type: ADD_COVID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateCovid = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_COVID_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/covid-update-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateCovidPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_COVID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Covid!");
      });
  };
};
export const updateCovidPre = (data) => {
  toast.success("Covid Updated Successfully!");

  return {
    type: UPDATE_COVID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteCovid = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_COVID_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/covid-update-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteCovidPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_COVID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteCovidPre = (data) => {
  toast.error("Covid Deleted Successfully!");
  return {
    type: DELETE_COVID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const CovidChangeStatus = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch({
      type: COVID_CHANGE_STATUS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/covid-update-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CovidChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: COVID_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CovidChangeStatusPre = (data) => {
  toast.success("Covid Status Successfully!");
  return {
    type: COVID_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllCovid,
  loadSingleCovid,
  createCovid,
  updateCovid,
  deleteCovid,
  CovidChangeStatus,
};
