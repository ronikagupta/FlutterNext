import {
  ADD_PROMO_CODE_FAIL,
  ADD_PROMO_CODE_REQUEST,
  ADD_PROMO_CODE_SUCCESS,
  DELETE_PROMO_CODE_FAIL,
  DELETE_PROMO_CODE_REQUEST,
  DELETE_PROMO_CODE_SUCCESS,
  GET_ALL_PROMO_CODE_FAIL,
  GET_ALL_PROMO_CODE_REQUEST,
  GET_ALL_PROMO_CODE_SUCCESS,
  GET_SINGLE_PROMO_CODE_FAIL,
  GET_SINGLE_PROMO_CODE_REQUEST,
  GET_SINGLE_PROMO_CODE_SUCCESS,
  PROMO_CODE_CHANGE_STATUS_FAIL,
  PROMO_CODE_CHANGE_STATUS_REQUEST,
  PROMO_CODE_CHANGE_STATUS_SUCCESS,
  UPDATE_PROMO_CODE_FAIL,
  UPDATE_PROMO_CODE_REQUEST,
  UPDATE_PROMO_CODE_SUCCESS,
} from "../constant/PromoCodeConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Promo Code

const loadAllPromoCode = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_PROMO_CODE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promo-code/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllPromoCodePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PROMO_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllPromoCodePre = (data) => {
  return {
    type: GET_ALL_PROMO_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSinglePromoCode = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_PROMO_CODE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promo-code/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSinglePromoCodePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_PROMO_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSinglePromoCodePre = (data) => {
  return {
    type: GET_SINGLE_PROMO_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createPromoCode = (code, valid_from, valid_to, discount_percent) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PROMO_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promo-code/`,
      method: "POST",
      data: {
        code,
        valid_from,
        valid_to,
        discount_percent,
      },
      headers: {
        // Accept: "multipart/form-data",
        "content-type": "application/json",

        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createPromoCodePre(res.data));
        // dispatch(loadAllPromo Code());
      })
      .catch((error) => {
        dispatch({
          type: ADD_PROMO_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Promo Code!");
      });
  };
};
export const createPromoCodePre = (data) => {
  toast.success("Promo Code Created Successfully!");

  return {
    type: ADD_PROMO_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updatePromoCode = (id, code, valid_from, valid_to, discount_percent) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PROMO_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promo-code/`,
      method: "POST",
      data: {
        id,
        code,
        valid_from,
        valid_to,
        discount_percent,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updatePromoCodePre(res.data));
        // dispatch(loadAllPromo Code());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PROMO_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Promo Code!");
      });
  };
};
export const updatePromoCodePre = (data) => {
  toast.success("Promo Code Updated Successfully!");

  return {
    type: UPDATE_PROMO_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deletePromoCode = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PROMO_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promo-code-delete/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deletePromoCodePre(res.data));
        // dispatch(loadAllPromo Code());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PROMO_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deletePromoCodePre = (data) => {
  toast.error("Promo Code Deleted Successfully!");
  return {
    type: DELETE_PROMO_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const PromoCodeChangeStatus = (result) => {
  return function (dispatch) {
    dispatch({
      type: PROMO_CODE_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promo-code-change-status/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(PromoCodeChangeStatusPre(res.data));
      })
      .catch((error) => {
        toast.success(error.msg);

        dispatch({
          type: PROMO_CODE_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const PromoCodeChangeStatusPre = (data) => {
  toast.success(data.msg);
  return {
    type: PROMO_CODE_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllPromoCode,
  loadSinglePromoCode,
  createPromoCode,
  updatePromoCode,
  deletePromoCode,
  PromoCodeChangeStatus,
};
