import {
  ADD_GENIUSPRODUCT_FAIL,
  ADD_GENIUSPRODUCT_SUCCESS,
  ADD_GENIUSPRODUCT_REQUEST,
  DELETE_GENIUSPRODUCT_REQUEST,
  DELETE_GENIUSPRODUCT_SUCCESS,
  GETDETAIL_GENIUSPRODUCT_REQUEST,
  GETDETAIL_GENIUSPRODUCT_FAIL,
  GETDETAIL_GENIUSPRODUCT_SUCCESS,
  UPDATE_GENIUSPRODUCT_FAIL,
  UPDATE_GENIUSPRODUCT_SUCCESS,
  UPDATE_GENIUSPRODUCT_REQUEST,
  DELETE_GENIUSPRODUCT_FAIL,
  GETALL_GENIUSPRODUCT_FAIL,
  GETALL_GENIUSPRODUCT_SUCCESS,
  GETALL_GENIUSPRODUCT_REQUEST,
  GENIUSPRODUCT_CHANGE_STATUS_FAIL,
  GENIUSPRODUCT_CHANGE_STATUS_REQUEST,
  GENIUSPRODUCT_CHANGE_STATUS_SUCCESS,
} from "../constant/GeniusProductConstant";
import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllGeniusProduct = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_GENIUSPRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/genius-product-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllGeniusProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_GENIUSPRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllGeniusProductPre = (data) => {
  return {
    type: GETALL_GENIUSPRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleGeniusProduct = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_GENIUSPRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/genius-product-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleGeniusProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_GENIUSPRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleGeniusProductPre = (data) => {
  return {
    type: GETDETAIL_GENIUSPRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createGeniusProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_GENIUSPRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/genius-product-static-content/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createGeniusProductPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_GENIUSPRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The GeniusProduct!");
      });
  };
};
export const createGeniusProductPre = (data) => {
  toast.success("GeniusProduct Created Successfully!");

  return {
    type: ADD_GENIUSPRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateGeniusProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_GENIUSPRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/genius-product-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateGeniusProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_GENIUSPRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The GeniusProduct!");
      });
  };
};
export const updateGeniusProductPre = (data) => {
  toast.success("GeniusProduct Updated Successfully!");

  return {
    type: UPDATE_GENIUSPRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteGeniusProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_GENIUSPRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/genius-product-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteGeniusProductPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_GENIUSPRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteGeniusProductPre = (data) => {
  toast.error("GeniusProduct Deleted Successfully!");
  return {
    type: DELETE_GENIUSPRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const GeniusProductChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: GENIUSPRODUCT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/GeniusProductus-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(GeniusProductChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GENIUSPRODUCT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const GeniusProductChangeStatusPre = (data) => {
  toast.success("GeniusProduct Status Successfully!");
  return {
    type: GENIUSPRODUCT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllGeniusProduct,
  loadSingleGeniusProduct,
  createGeniusProduct,
  updateGeniusProduct,
  deleteGeniusProduct,
  GeniusProductChangeStatus,
};
