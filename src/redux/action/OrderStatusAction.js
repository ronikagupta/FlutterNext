import {
  ADD_ORDER_STATUS_FAIL,
  ADD_ORDER_STATUS_REQUEST,
  ADD_ORDER_STATUS_SUCCESS,
  DELETE_ORDER_STATUS_FAIL,
  DELETE_ORDER_STATUS_REQUEST,
  DELETE_ORDER_STATUS_SUCCESS,
  GET_ALL_ORDER_STATUS_FAIL,
  GET_ALL_ORDER_STATUS_REQUEST,
  GET_ALL_ORDER_STATUS_SUCCESS,
  GET_SINGLE_ORDER_STATUS_FAIL,
  GET_SINGLE_ORDER_STATUS_REQUEST,
  GET_SINGLE_ORDER_STATUS_SUCCESS,
  ORDER_STATUS_CHANGE_STATUS_FAIL,
  ORDER_STATUS_CHANGE_STATUS_REQUEST,
  ORDER_STATUS_CHANGE_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../constant/OrderStatusConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Order Status

const loadAllOrderStatus = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_ORDER_STATUS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-status/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOrderStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ORDER_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOrderStatusPre = (data) => {
  return {
    type: GET_ALL_ORDER_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOrderStatus = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_ORDER_STATUS_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-status/1/${id}`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOrderStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_ORDER_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOrderStatusPre = (data) => {
  return {
    type: GET_SINGLE_ORDER_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createOrderStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_ORDER_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-status/`,
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
        dispatch(createOrderStatusPre(res.data));
        // dispatch(loadAllOrder Status());
      })
      .catch((error) => {
        dispatch({
          type: ADD_ORDER_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The OrderStatus!");
      });
  };
};
export const createOrderStatusPre = (data) => {
  toast.success("Created Successfully!");

  return {
    type: ADD_ORDER_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateOrderStatus = (id, data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ORDER_STATUS_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateOrderStatusPre(res.data));
        // dispatch(loadAllOrder Status());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ORDER_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The OrderStatus!");
      });
  };
};
export const updateOrderStatusPre = (data) => {
  toast.success("Updated Successfully!");

  return {
    type: UPDATE_ORDER_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteOrderStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ORDER_STATUS_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-status-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteOrderStatusPre(res.data));
        // dispatch(loadAllOrder Status());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ORDER_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteOrderStatusPre = (data) => {
  toast.error("Deleted Successfully!");
  return {
    type: DELETE_ORDER_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const OrderStatusChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: ORDER_STATUS_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      // url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(OrderStatusChangeStatusPre(res.data));
        // dispatch(loadAllOrder Status());
      })
      .catch((error) => {
        dispatch({
          type: ORDER_STATUS_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const OrderStatusChangeStatusPre = (data) => {
  toast.success("Order Status  Successfully!");
  return {
    type: ORDER_STATUS_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllOrderStatus,
  loadSingleOrderStatus,
  createOrderStatus,
  updateOrderStatus,
  deleteOrderStatus,
  OrderStatusChangeStatus,
};
