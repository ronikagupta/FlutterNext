import {
  ADD_CONS_FAIL,
  ADD_CONS_REQUEST,
  ADD_CONS_SUCCESS,
  CONS_CHANGE_STATUS_FAIL,
  CONS_CHANGE_STATUS_SUCCESS,
  CONS_CHANGE_STATUS_REQUEST,
  DELETE_CONS_FAIL,
  DELETE_CONS_REQUEST,
  DELETE_CONS_SUCCESS,
  GET_ALL_CONS_FAIL,
  GET_ALL_CONS_REQUEST,
  GET_ALL_CONS_SUCCESS,
  GET_SINGLE_CONS_FAIL,
  GET_SINGLE_CONS_REQUEST,
  GET_SINGLE_CONS_SUCCESS,
  UPDATE_CONS_FAIL,
  UPDATE_CONS_REQUEST,
  UPDATE_CONS_SUCCESS,
} from "../constant/ConsConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Cons

const loadAllCons = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_CONS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-cons/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllConsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllConsPre = (data) => {
  return {
    type: GET_ALL_CONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleCons = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_CONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-cons/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleConsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_CONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleConsPre = (data) => {
  return {
    type: GET_SINGLE_CONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createCons = (product_id, title, short_description) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-cons/`,
      method: "POST",
      data: { product_id, title, short_description },

      headers: {
        // Accept: "multipart/form-data",
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createConsPre(res.data));
        // dispatch(loadAllCons());
      })
      .catch((error) => {
        dispatch({
          type: ADD_CONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Best Uses!");
      });
  };
};
export const createConsPre = (data) => {
  toast.success("Cons Created Successfully!");

  return {
    type: ADD_CONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateCons = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-cons/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateConsPre(res.data));
        // dispatch(loadAllCons());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Cons!");
      });
  };
};
export const updateConsPre = (data) => {
  toast.success("Cons Updated Successfully!");

  return {
    type: UPDATE_CONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteCons = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-cons-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteConsPre(res.data));
        // dispatch(loadAllCons());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteConsPre = (data) => {
  toast.error("Deleted Successfully!");
  return {
    type: DELETE_CONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ConsChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: CONS_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-cons-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ConsChangeStatusPre(res.data));
        // dispatch(loadAllCons());
      })
      .catch((error) => {
        dispatch({
          type: CONS_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ConsChangeStatusPre = (data) => {
  toast.success("Cons  Status Successfully!");
  return {
    type: CONS_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllCons,
  loadSingleCons,
  createCons,
  updateCons,
  deleteCons,
  ConsChangeStatus,
};
