import {
  ADD_CART_FAIL,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  CART_CHANGE_STATUS_FAIL,
  CART_CHANGE_STATUS_SUCCESS,
  CART_CHANGE_STATUS_REQUEST,
  DELETE_CART_FAIL,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  GET_ALL_CART_REQUEST,
  GET_ALL_CART_SUCCESS,
  GET_SINGLE_CART_FAIL,
  GET_SINGLE_CART_REQUEST,
  GET_SINGLE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
} from "../constant/CartConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Cart

const loadAllCart = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_CART_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cart/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllCartPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CART_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllCartPre = (data) => {
  return {
    type: GET_ALL_CART_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleCart = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_CART_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cart/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleCartPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_CART_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleCartPre = (data) => {
  return {
    type: GET_SINGLE_CART_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createCart = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CART_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cart/`,
      method: "POST",
      data: data,

      headers: {
        Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createCartPre(res.data));
        // dispatch(loadAllCart());
      })
      .catch((error) => {
        dispatch({
          type: ADD_CART_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Best Uses!");
      });
  };
};
export const createCartPre = (data) => {
  toast.success("Cart Created Successfully!");

  return {
    type: ADD_CART_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateCart = (id, data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CART_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cart/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateCartPre(res.data));
        // dispatch(loadAllCart());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CART_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Best Uses!");
      });
  };
};
export const updateCartPre = (data) => {
  toast.success("Cart Updated Successfully!");

  return {
    type: UPDATE_CART_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteCart = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CART_REQUEST,
      payload: result,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cart-remove/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteCartPre(res.data));
        // dispatch(loadAllCart());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CART_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteCartPre = (data) => {
  toast.error("Cart Deleted Successfully!");
  return {
    type: DELETE_CART_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const CartChangeStatus = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: CART_CHANGE_STATUS_REQUEST,
      payload: result,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cart-change-status/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CartChangeStatusPre(res.data));
        // dispatch(loadAllCart());
      })
      .catch((error) => {
        dispatch({
          type: CART_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CartChangeStatusPre = (data) => {
  toast.success("Cart Status Successfully!");
  return {
    type: CART_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllCart,
  loadSingleCart,
  createCart,
  updateCart,
  deleteCart,
  CartChangeStatus,
};
