import {
  ADD_BANNER_PRODUCT_FAIL,
  ADD_BANNER_PRODUCT_REQUEST,
  ADD_BANNER_PRODUCT_SUCCESS,
  DELETE_BANNER_PRODUCT_FAIL,
  DELETE_BANNER_PRODUCT_REQUEST,
  DELETE_BANNER_PRODUCT_SUCCESS,
  GET_ALL_BANNER_PRODUCT_FAIL,
  GET_ALL_BANNER_PRODUCT_REQUEST,
  GET_ALL_BANNER_PRODUCT_SUCCESS,
  GET_SINGLE_BANNER_PRODUCT_FAIL,
  GET_SINGLE_BANNER_PRODUCT_REQUEST,
  GET_SINGLE_BANNER_PRODUCT_SUCCESS,
  BANNER_PRODUCT_CHANGE_STATUS_FAIL,
  BANNER_PRODUCT_CHANGE_STATUS_REQUEST,
  BANNER_PRODUCT_CHANGE_STATUS_SUCCESS,
  UPDATE_BANNER_PRODUCT_FAIL,
  UPDATE_BANNER_PRODUCT_REQUEST,
  UPDATE_BANNER_PRODUCT_SUCCESS,
} from "../constant/BannerProductConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllBannerProduct = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_BANNER_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-product/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllBannerProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_BANNER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllBannerProductPre = (data) => {
  return {
    type: GET_ALL_BANNER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleBannerProduct = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_BANNER_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-product/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleBannerProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_BANNER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleBannerProductPre = (data) => {
  return {
    type: GET_SINGLE_BANNER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createBannerProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_BANNER_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-product/`,
      method: "POST",
      data: data,

      headers: {
        // Accept: "multipart/form-data",
        "content-type": "application/json",

        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createBannerProductPre(res.data));
        // dispatch(loadAllBANNER_PRODUCT());
      })
      .catch((error) => {
        dispatch({
          type: ADD_BANNER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The BANNER_PRODUCT!");
      });
  };
};
export const createBannerProductPre = (data) => {
  toast.success("Banner Product Created Successfully!");

  return {
    type: ADD_BANNER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateBannerProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_BANNER_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-product/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateBannerProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_BANNER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.error("Failed To Update The Banner Product!");
      });
  };
};
export const updateBannerProductPre = (data) => {
  toast.success("Banner Product Updated Successfully!");

  return {
    type: UPDATE_BANNER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteBannerProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_BANNER_PRODUCT_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-product-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteBannerProductPre(res.data));
        // dispatch(loadAllBANNER_PRODUCT());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BANNER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteBannerProductPre = (data) => {
  toast.error("Banner Product Deleted Successfully!");
  return {
    type: DELETE_BANNER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const BannerProductChangeStatus = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: BANNER_PRODUCT_CHANGE_STATUS_REQUEST,
      payload: result,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-banner-product-visible/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(BannerProductChangeStatusPre(res.data));
        // dispatch(loadAllBANNER_PRODUCT());
      })
      .catch((error) => {
        dispatch({
          type: BANNER_PRODUCT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const BannerProductChangeStatusPre = (data) => {
  toast.success("Banner Product Deleted Successfully!");
  return {
    type: BANNER_PRODUCT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllBannerProduct,
  loadSingleBannerProduct,
  createBannerProduct,
  updateBannerProduct,
  deleteBannerProduct,
  BannerProductChangeStatus,
};
