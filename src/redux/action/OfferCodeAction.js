import {
  ADD_OFFER_CODE_FAIL,
  ADD_OFFER_CODE_REQUEST,
  ADD_OFFER_CODE_SUCCESS,
  DELETE_OFFER_CODE_FAIL,
  DELETE_OFFER_CODE_REQUEST,
  DELETE_OFFER_CODE_SUCCESS,
  GET_ALL_OFFER_CODE_FAIL,
  GET_ALL_OFFER_CODE_REQUEST,
  GET_ALL_OFFER_CODE_SUCCESS,
  GET_SINGLE_OFFER_CODE_FAIL,
  GET_SINGLE_OFFER_CODE_REQUEST,
  GET_SINGLE_OFFER_CODE_SUCCESS,
  OFFER_CODE_CHANGE_STATUS_FAIL,
  OFFER_CODE_CHANGE_STATUS_REQUEST,
  OFFER_CODE_CHANGE_STATUS_SUCCESS,
  UPDATE_OFFER_CODE_FAIL,
  UPDATE_OFFER_CODE_REQUEST,
  UPDATE_OFFER_CODE_SUCCESS,
} from "../constant/OfferCodeConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Offer Code

const loadAllOfferCode = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_OFFER_CODE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-code/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOfferCodePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_OFFER_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOfferCodePre = (data) => {
  return {
    type: GET_ALL_OFFER_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOfferCode = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_OFFER_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-code/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOfferCodePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_OFFER_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOfferCodePre = (data) => {
  return {
    type: GET_SINGLE_OFFER_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createOfferCode = (
  name,
  code,
  valid_from,
  valid_to,
  discount_percent
) => {
  return function (dispatch) {
    dispatch({
      type: ADD_OFFER_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-code/`,
      method: "POST",
      data: {
        name,
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
        dispatch(createOfferCodePre(res.data));
        // dispatch(loadAllOffer Code());
      })
      .catch((error) => {
        dispatch({
          type: ADD_OFFER_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Best Uses!");
      });
  };
};
export const createOfferCodePre = (data) => {
  toast.success("OfferCode Created Successfully!");

  return {
    type: ADD_OFFER_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateOfferCode = (
  id,
  name,
  code,
  valid_from,
  valid_to,
  discount_percent
) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_OFFER_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-code/`,
      method: "POST",
      data: {
        id,
        name,
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
        dispatch(updateOfferCodePre(res.data));
        // dispatch(loadAllOffer Code());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_OFFER_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger(error.msg);
      });
  };
};
export const updateOfferCodePre = (data) => {
  toast.success(data.msg);

  return {
    type: UPDATE_OFFER_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteOfferCode = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_OFFER_CODE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-code-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteOfferCodePre(res.data));
        // dispatch(loadAllOffer Code());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_OFFER_CODE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteOfferCodePre = (data) => {
  toast.error("Offer Code Deleted Successfully!");
  return {
    type: DELETE_OFFER_CODE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const OfferCodeChangeStatus = (result) => {
  return function (dispatch) {
    dispatch({
      type: OFFER_CODE_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-code-change-status/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(OfferCodeChangeStatusPre(res.data));
        // dispatch(loadAllOffer Code());
      })
      .catch((error) => {
        toast.success(error.msg);

        dispatch({
          type: OFFER_CODE_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const OfferCodeChangeStatusPre = (data) => {
  toast.success(data.msg);
  // toast.success("Offer Code Status Successfully!");
  return {
    type: OFFER_CODE_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllOfferCode,
  loadSingleOfferCode,
  createOfferCode,
  updateOfferCode,
  deleteOfferCode,
  OfferCodeChangeStatus,
};
