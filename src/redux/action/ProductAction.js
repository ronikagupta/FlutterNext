import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  PRODUCT_CHANGE_STATUS_FAIL,
  PRODUCT_CHANGE_STATUS_REQUEST,
  PRODUCT_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_SUBCATID_FAIL,
  GET_ALL_PRODUCT_SUBCATID_REQUEST,
  GET_ALL_PRODUCT_SUBCATID_SUCCESS,
} from "../constant/ProductConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllProduct = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProductPre = (data) => {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadAllProductBySubcatid = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PRODUCT_SUBCATID_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/product-subcatid/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProductBySubcatidPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_SUBCATID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProductBySubcatidPre = (data) => {
  return {
    type: GET_ALL_PRODUCT_SUBCATID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleProduct = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleProductPre = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Product!");
      });
  };
};
export const createProductPre = (data) => {
  toast.success("Product Created Successfully!");

  return {
    type: ADD_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Product!");
      });
  };
};
export const updateProductPre = (data) => {
  toast.success("Product Updated Successfully!");

  return {
    type: UPDATE_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteProductPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteProductPre = (data) => {
  toast.error("Product Deleted Successfully!");
  return {
    type: DELETE_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ProductChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: PRODUCT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ProductChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ProductChangeStatusPre = (data) => {
  toast.success("Product Status Successfully!");
  return {
    type: PRODUCT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllProduct,
  loadSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  ProductChangeStatus,
  loadAllProductBySubcatid,
};
