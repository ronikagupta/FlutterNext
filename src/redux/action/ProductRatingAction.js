import {
  ADD_PRODUCT_RATING_FAIL,
  ADD_PRODUCT_RATING_REQUEST,
  ADD_PRODUCT_RATING_SUCCESS,
  DELETE_PRODUCT_RATING_FAIL,
  DELETE_PRODUCT_RATING_REQUEST,
  DELETE_PRODUCT_RATING_SUCCESS,
  GET_ALL_PRODUCT_RATING_FAIL,
  GET_ALL_PRODUCT_RATING_REQUEST,
  GET_ALL_PRODUCT_RATING_SUCCESS,
  GET_SINGLE_PRODUCT_RATING_FAIL,
  GET_SINGLE_PRODUCT_RATING_REQUEST,
  GET_SINGLE_PRODUCT_RATING_SUCCESS,
  PRODUCT_RATING_CHANGE_STATUS_FAIL,
  PRODUCT_RATING_CHANGE_STATUS_REQUEST,
  PRODUCT_RATING_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_RATING_FAIL,
  UPDATE_PRODUCT_RATING_REQUEST,
  UPDATE_PRODUCT_RATING_SUCCESS,
} from "../constant/ProductRatingConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Product Rating

const loadAllProductRating = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PRODUCT_RATING_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-rating/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllProductRatingPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_RATING_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllProductRatingPre = (data) => {
  return {
    type: GET_ALL_PRODUCT_RATING_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleProductRating = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PRODUCT_RATING_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-rating/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleProductRatingPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PRODUCT_RATING_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleProductRatingPre = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_RATING_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createProductRating = (
  rating,
  product_id,
  type,
  catid,
  subcategory,
  heding,
  description,
  email,
  location,
  nickname
) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PRODUCT_RATING_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-rating/`,
      method: "POST",
      data: {
        rating,
        product_id,
        type,
        catid,
        subcategory,
        heding,
        description,
        email,
        location,
        nickname,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createProductRatingPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT_RATING_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The create Product Rating!");
      });
  };
};
export const createProductRatingPre = (data) => {
  toast.success("Product Rating Created Successfully!");

  return {
    type: ADD_PRODUCT_RATING_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateProductRating = (
  id,
  rating,
  product_id,
  type,
  catid,
  subcategory,
  heding,
  description,

  email,
  location,
  nickname,
  describe_yourself
) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRODUCT_RATING_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-rating/`,
      method: "POST",
      data: {
        id,
        rating,
        product_id,
        type,
        catid,
        subcategory,
        heding,
        description,

        email,
        location,
        nickname,
        describe_yourself,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateProductRatingPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT_RATING_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The create Product Rating!");
      });
  };
};
export const updateProductRatingPre = (data) => {
  toast.success("Product Rating Updated Successfully!");

  return {
    type: UPDATE_PRODUCT_RATING_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteProductRating = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRODUCT_RATING_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-rating-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteProductRatingPre(res.data));
        // dispatch(loadAllProduct Rating());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT_RATING_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteProductRatingPre = (data) => {
  toast.error(" Product Rating Deleted Successfully!");
  return {
    type: DELETE_PRODUCT_RATING_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const ProductRatingChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: PRODUCT_RATING_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-rating-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ProductRatingChangeStatusPre(res.data));
        // dispatch(loadAllProduct Rating());
      })
      .catch((error) => {
        dispatch({
          type: PRODUCT_RATING_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ProductRatingChangeStatusPre = (data) => {
  toast.success("Product Rating ChangeStatus Successfully!");
  return {
    type: PRODUCT_RATING_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllProductRating,
  loadSingleProductRating,
  createProductRating,
  updateProductRating,
  deleteProductRating,
  ProductRatingChangeStatus,
};
