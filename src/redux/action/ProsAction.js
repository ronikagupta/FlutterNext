import {
  ADD_PROS_FAIL,
  ADD_PROS_REQUEST,
  ADD_PROS_SUCCESS,
  DELETE_PROS_FAIL,
  DELETE_PROS_REQUEST,
  DELETE_PROS_SUCCESS,
  GET_ALL_PROS_FAIL,
  GET_ALL_PROS_REQUEST,
  GET_ALL_PROS_SUCCESS,
  GET_SINGLE_PROS_FAIL,
  GET_SINGLE_PROS_REQUEST,
  GET_SINGLE_PROS_SUCCESS,
  PROS_CHANGE_STATUS_FAIL,
  PROS_CHANGE_STATUS_REQUEST,
  PROS_CHANGE_STATUS_SUCCESS,
  UPDATE_PROS_FAIL,
  UPDATE_PROS_REQUEST,
  UPDATE_PROS_SUCCESS,
} from "../constant/ProsConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Pros

const loadAllPros = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PROS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-pros/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PROS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProsPre = (data) => {
  return {
    type: GET_ALL_PROS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSinglePros = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PROS_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-pros/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleProsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PROS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleProsPre = (data) => {
  return {
    type: GET_SINGLE_PROS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createPros = (product_id, title, short_description) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PROS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-pros/`,
      method: "POST",
      data: {
        product_id,
        title,
        short_description,
      },

      headers: {
        // Accept: "multipart/form-data",
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createProsPre(res.data));
        // dispatch(loadAllPros());
      })
      .catch((error) => {
        dispatch({
          type: ADD_PROS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Pros!");
      });
  };
};
export const createProsPre = (data) => {
  toast.success("Pros Created Successfully!");

  return {
    type: ADD_PROS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updatePros = (id, product_id, title, short_description) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PROS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-pros/`,
      method: "POST",
      data: { id, product_id, title, short_description },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateProsPre(res.data));
        // dispatch(loadAllPros());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PROS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Pros!");
      });
  };
};
export const updateProsPre = (data) => {
  toast.success("Pros Updated Successfully!");

  return {
    type: UPDATE_PROS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deletePros = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PROS_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-pros-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteProsPre(res.data));
        // dispatch(loadAllPros());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PROS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteProsPre = (data) => {
  toast.error(" Pros Deleted Successfully!");
  return {
    type: DELETE_PROS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ProsChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: PROS_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-pros-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ProsChangeStatusPre(res.data));
        // dispatch(loadAllPros());
      })
      .catch((error) => {
        dispatch({
          type: PROS_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ProsChangeStatusPre = (data) => {
  toast.success("Pros Change Status Successfully!");
  return {
    type: PROS_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllPros,
  loadSinglePros,
  createPros,
  updatePros,
  deletePros,
  ProsChangeStatus,
};
