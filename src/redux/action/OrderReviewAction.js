import {
  ADD_ORDER_REVIEW_FAIL,
  ADD_ORDER_REVIEW_REQUEST,
  ADD_ORDER_REVIEW_SUCCESS,
  DELETE_ORDER_REVIEW_FAIL,
  DELETE_ORDER_REVIEW_REQUEST,
  DELETE_ORDER_REVIEW_SUCCESS,
  GET_ALL_ORDER_REVIEW_FAIL,
  GET_ALL_ORDER_REVIEW_REQUEST,
  GET_ALL_ORDER_REVIEW_SUCCESS,
  GET_SINGLE_ORDER_REVIEW_FAIL,
  GET_SINGLE_ORDER_REVIEW_REQUEST,
  GET_SINGLE_ORDER_REVIEW_SUCCESS,
  ORDER_REVIEW_CHANGE_STATUS_FAIL,
  ORDER_REVIEW_CHANGE_STATUS_REQUEST,
  ORDER_REVIEW_CHANGE_STATUS_SUCCESS,
  UPDATE_ORDER_REVIEW_FAIL,
  UPDATE_ORDER_REVIEW_REQUEST,
  UPDATE_ORDER_REVIEW_SUCCESS,
} from "../constant/OrderReviewConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Order Review

const loadAllOrderReview = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_ORDER_REVIEW_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-review/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOrderReviewPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ORDER_REVIEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOrderReviewPre = (data) => {
  return {
    type: GET_ALL_ORDER_REVIEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOrderReview = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_ORDER_REVIEW_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-review/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOrderReviewPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_ORDER_REVIEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOrderReviewPre = (data) => {
  return {
    type: GET_SINGLE_ORDER_REVIEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createOrderReview = (userid, order_id, review) => {
  return function (dispatch) {
    dispatch({
      type: ADD_ORDER_REVIEW_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-review/`,
      method: "POST",
      data: { userid, order_id, review },

      headers: {
        // Accept: "multipart/form-data",
        // token: token,
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createOrderReviewPre(res.data));
        // dispatch(loadAllOrder Review());
      })
      .catch((error) => {
        dispatch({
          type: ADD_ORDER_REVIEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The OrderReview!");
      });
  };
};
export const createOrderReviewPre = (data) => {
  toast.success("Created Successfully!");

  return {
    type: ADD_ORDER_REVIEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateOrderReview = (id, order_id, review, userid) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ORDER_REVIEW_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-review/`,
      method: "POST",
      data: { id, order_id, review, userid },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateOrderReviewPre(res.data));
        // dispatch(loadAllOrder Review());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ORDER_REVIEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The OrderReview!");
      });
  };
};
export const updateOrderReviewPre = (data) => {
  toast.success("Updated Successfully!");

  return {
    type: UPDATE_ORDER_REVIEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteOrderReview = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ORDER_REVIEW_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-review-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteOrderReviewPre(res.data));
        // dispatch(loadAllOrder Review());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ORDER_REVIEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteOrderReviewPre = (data) => {
  toast.error("Deleted Successfully!");
  return {
    type: DELETE_ORDER_REVIEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const OrderReviewChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: ORDER_REVIEW_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-review-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(OrderReviewChangeStatusPre(res.data));
        // dispatch(loadAllOrder Review());
      })
      .catch((error) => {
        dispatch({
          type: ORDER_REVIEW_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const OrderReviewChangeStatusPre = (data) => {
  toast.success("Order Review Status Successfully!");
  return {
    type: ORDER_REVIEW_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllOrderReview,
  loadSingleOrderReview,
  createOrderReview,
  updateOrderReview,
  deleteOrderReview,
  OrderReviewChangeStatus,
};
