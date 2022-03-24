import {
  ADD_PRODUCT_IMAGE_FAIL,
  ADD_PRODUCT_IMAGE_REQUEST,
  ADD_PRODUCT_IMAGE_SUCCESS,
  DELETE_PRODUCT_IMAGE_FAIL,
  DELETE_PRODUCT_IMAGE_REQUEST,
  DELETE_PRODUCT_IMAGE_SUCCESS,
  GET_ALL_PRODUCT_IMAGE_FAIL,
  GET_ALL_PRODUCT_IMAGE_REQUEST,
  GET_ALL_PRODUCT_IMAGE_SUCCESS,
  GET_SINGLE_PRODUCT_IMAGE_FAIL,
  GET_SINGLE_PRODUCT_IMAGE_REQUEST,
  GET_SINGLE_PRODUCT_IMAGE_SUCCESS,
  PRODUCT_IMAGE_CHANGE_STATUS_FAIL,
  PRODUCT_IMAGE_CHANGE_STATUS_REQUEST,
  PRODUCT_IMAGE_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_IMAGE_FAIL,
  UPDATE_PRODUCT_IMAGE_REQUEST,
  UPDATE_PRODUCT_IMAGE_SUCCESS,
} from "../constant/ProductImageConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the ProductImage Code

const loadAllProductImageCode = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PRODUCT_IMAGE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-image/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProductImageCodePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_IMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProductImageCodePre = (data) => {
  return {
    type: GET_ALL_PRODUCT_IMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleProductImage = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PRODUCT_IMAGE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-image/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleProductImageCodePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PRODUCT_IMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleProductImageCodePre = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_IMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createProductImageCode = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PRODUCT_IMAGE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-image/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createProductImageCodePre(res.data));
        // dispatch(loadAllProductImage Code());
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_IMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.error(error.msg);
      });
  };
};
export const createProductImageCodePre = (data) => {
  toast.success(data.msg);

  return {
    type: ADD_PRODUCT_IMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateProductImageCode = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRODUCT_IMAGE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-image/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateProductImageCodePre(res.data));
        // dispatch(loadAllProductImage Code());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT_IMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger(error.msg);
      });
  };
};
export const updateProductImageCodePre = (data) => {
  toast.success(data.msg);

  return {
    type: UPDATE_PRODUCT_IMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteProductImageCode = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCT_IMAGE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-image-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteProductImageCodePre(res.data));
        // dispatch(loadAllProductImage Code());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT_IMAGE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteProductImageCodePre = (data) => {
  toast.error("Deleted Successfully!");
  return {
    type: DELETE_PRODUCT_IMAGE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ProductImageCodeChangeStatus = (result) => {
  return function (dispatch) {
    dispatch({
      type: PRODUCT_IMAGE_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-image-change_status/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ProductImageCodeChangeStatusPre(res.data));
        // dispatch(loadAllProductImage Code());
      })
      .catch((error) => {
        toast.success(error.msg);

        dispatch({
          type: PRODUCT_IMAGE_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ProductImageCodeChangeStatusPre = (data) => {
  toast.success(data.msg);
  // toast.success("ProductImage Code Status Successfully!");
  return {
    type: PRODUCT_IMAGE_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllProductImageCode,
  loadSingleProductImage,
  createProductImageCode,
  updateProductImageCode,
  deleteProductImageCode,
  ProductImageCodeChangeStatus,
};
