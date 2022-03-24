import {
  ADD_PRODUCT_SPECIFICATIONS_FAIL,
  ADD_PRODUCT_SPECIFICATIONS_REQUEST,
  ADD_PRODUCT_SPECIFICATIONS_SUCCESS,
  DELETE_PRODUCT_SPECIFICATIONS_FAIL,
  DELETE_PRODUCT_SPECIFICATIONS_REQUEST,
  DELETE_PRODUCT_SPECIFICATIONS_SUCCESS,
  GET_ALL_PRODUCT_SPECIFICATIONS_FAIL,
  GET_ALL_PRODUCT_SPECIFICATIONS_REQUEST,
  GET_ALL_PRODUCT_SPECIFICATIONS_SUCCESS,
  GET_SINGLE_PRODUCT_SPECIFICATIONS_FAIL,
  GET_SINGLE_PRODUCT_SPECIFICATIONS_REQUEST,
  GET_SINGLE_PRODUCT_SPECIFICATIONS_SUCCESS,
  PRODUCT_SPECIFICATIONS_CHANGE_STATUS_FAIL,
  PRODUCT_SPECIFICATIONS_CHANGE_STATUS_REQUEST,
  PRODUCT_SPECIFICATIONS_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_SPECIFICATIONS_FAIL,
  UPDATE_PRODUCT_SPECIFICATIONS_REQUEST,
  UPDATE_PRODUCT_SPECIFICATIONS_SUCCESS,
} from "../constant/ProductSpecificationConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Product Specifications

const loadAllProductSpecification = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PRODUCT_SPECIFICATIONS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-specification/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProductSpecificationPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_SPECIFICATIONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProductSpecificationPre = (data) => {
  return {
    type: GET_ALL_PRODUCT_SPECIFICATIONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleProductSpecification = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PRODUCT_SPECIFICATIONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-specification/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleProductSpecificationPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PRODUCT_SPECIFICATIONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleProductSpecificationPre = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_SPECIFICATIONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createProductSpecification = (
  product_id,
  title,
  short_description,
  description
) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PRODUCT_SPECIFICATIONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-specification/`,
      method: "POST",
      data: { product_id, title, short_description, description },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createProductSpecificationPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_SPECIFICATIONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Product Specification !");
      });
  };
};
export const createProductSpecificationPre = (data) => {
  toast.success(" Product Specification Created Successfully!");

  return {
    type: ADD_PRODUCT_SPECIFICATIONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateProductSpecification = (
  id,
  product_id,
  title,
  short_description,
  description
) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRODUCT_SPECIFICATIONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-specification/`,
      method: "POST",
      data: {
        id,
        product_id,
        title,
        short_description,
        description,
      },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateProductSpecificationPre(res.data));
        // dispatch(loadAllProduct Specifications());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT_SPECIFICATIONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Product Specification !");
      });
  };
};
export const updateProductSpecificationPre = (data) => {
  toast.success(" Product Specification Updated Successfully!");

  return {
    type: UPDATE_PRODUCT_SPECIFICATIONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteProductSpecification = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCT_SPECIFICATIONS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-specification-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteProductSpecificationPre(res.data));
        // dispatch(loadAllProduct Specifications());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT_SPECIFICATIONS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteProductSpecificationPre = (data) => {
  toast.error(" Product Specification Deleted Successfully!");
  return {
    type: DELETE_PRODUCT_SPECIFICATIONS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ProductSpecificationChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: PRODUCT_SPECIFICATIONS_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-specification-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ProductSpecificationChangeStatusPre(res.data));
        // dispatch(loadAllProduct Specifications());
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_SPECIFICATIONS_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ProductSpecificationChangeStatusPre = (data) => {
  toast.success("Product Specification ChangeStatus Successfully!");
  return {
    type: PRODUCT_SPECIFICATIONS_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllProductSpecification,
  loadSingleProductSpecification,
  createProductSpecification,
  updateProductSpecification,
  deleteProductSpecification,
  ProductSpecificationChangeStatus,
};
