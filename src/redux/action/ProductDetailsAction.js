import {
  ADD_PRODUCT_DETAIL_FAIL,
  ADD_PRODUCT_DETAIL_REQUEST,
  ADD_PRODUCT_DETAIL_SUCCESS,
  DELETE_PRODUCT_DETAIL_FAIL,
  DELETE_PRODUCT_DETAIL_REQUEST,
  DELETE_PRODUCT_DETAIL_SUCCESS,
  GET_ALL_PRODUCT_DETAIL_FAIL,
  GET_ALL_PRODUCT_DETAIL_REQUEST,
  GET_ALL_PRODUCT_DETAIL_SUCCESS,
  GET_SINGLE_PRODUCT_DETAIL_FAIL,
  GET_SINGLE_PRODUCT_DETAIL_REQUEST,
  GET_SINGLE_PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_CHANGE_STATUS_FAIL,
  PRODUCT_DETAIL_CHANGE_STATUS_REQUEST,
  PRODUCT_DETAIL_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_DETAIL_FAIL,
  UPDATE_PRODUCT_DETAIL_REQUEST,
  UPDATE_PRODUCT_DETAIL_SUCCESS,
} from "../constant/ProductDetailsConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Product Details

const loadAllProductDetails = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PRODUCT_DETAIL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-details/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProductDetailsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProductDetailsPre = (data) => {
  return {
    type: GET_ALL_PRODUCT_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleProductDetails = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PRODUCT_DETAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-details/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleProductDetailsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PRODUCT_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleProductDetailsPre = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createProductDetails = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PRODUCT_DETAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-details/`,
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
        dispatch(createProductDetailsPre(res.data));
        // dispatch(loadAllProduct Details());
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Best Uses!");
      });
  };
};
export const createProductDetailsPre = (data) => {
  toast.success("Product Details Created Successfully!");

  return {
    type: ADD_PRODUCT_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};


const updateProductDetails = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRODUCT_DETAIL_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-details/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateProductDetailsPre(res.data));
        // dispatch(loadAllProduct Details());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Best Uses!");
      });
  };
};
export const updateProductDetailsPre = (data) => {
  toast.success(" ProductDetails Updated Successfully!");

  return {
    type: UPDATE_PRODUCT_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteProductDetails = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCT_DETAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-details-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteProductDetailsPre(res.data));
        // dispatch(loadAllProduct Details());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteProductDetailsPre = (data) => {
  toast.error("Product Details Deleted Successfully!");
  return {
    type: DELETE_PRODUCT_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ProductDetailsChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: PRODUCT_DETAIL_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-details-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ProductDetailsChangeStatusPre(res.data));
        // dispatch(loadAllProduct Details());
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_DETAIL_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ProductDetailsChangeStatusPre = (data) => {
  toast.success("Product Details Change Status Successfully!");
  return {
    type: PRODUCT_DETAIL_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllProductDetails,
  loadSingleProductDetails,
  createProductDetails,
  updateProductDetails,
  deleteProductDetails,
  ProductDetailsChangeStatus,
};
