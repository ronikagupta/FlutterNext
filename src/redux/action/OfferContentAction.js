import {
  ADD_OFFERCONTENT_FAIL,
  ADD_OFFERCONTENT_SUCCESS,
  ADD_OFFERCONTENT_REQUEST,
  DELETE_OFFERCONTENT_REQUEST,
  DELETE_OFFERCONTENT_SUCCESS,
  GETDETAIL_OFFERCONTENT_REQUEST,
  GETDETAIL_OFFERCONTENT_FAIL,
  GETDETAIL_OFFERCONTENT_SUCCESS,
  UPDATE_OFFERCONTENT_FAIL,
  UPDATE_OFFERCONTENT_SUCCESS,
  UPDATE_OFFERCONTENT_REQUEST,
  DELETE_OFFERCONTENT_FAIL,
  GETALL_OFFERCONTENT_FAIL,
  GETALL_OFFERCONTENT_SUCCESS,
  GETALL_OFFERCONTENT_REQUEST,
  OFFERCONTENT_CHANGE_STATUS_FAIL,
  OFFERCONTENT_CHANGE_STATUS_REQUEST,
  OFFERCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/OfferContentConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllOfferContent = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_OFFERCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/offer-product-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOfferContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_OFFERCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOfferContentPre = (data) => {
  return {
    type: GETALL_OFFERCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOfferContent = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_OFFERCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/offer-product-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOfferContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_OFFERCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOfferContentPre = (data) => {
  return {
    type: GETDETAIL_OFFERCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createOfferContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_OFFERCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/offer-product-static-content/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createOfferContentPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_OFFERCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The OfferContent!");
      });
  };
};
export const createOfferContentPre = (data) => {
  toast.success("OfferContent Created Successfully!");

  return {
    type: ADD_OFFERCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateOfferContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_OFFERCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/offer-product-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateOfferContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_OFFERCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The OfferContent!");
      });
  };
};
export const updateOfferContentPre = (data) => {
  toast.success("OfferContent Updated Successfully!");

  return {
    type: UPDATE_OFFERCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteOfferContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_OFFERCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/offer-product-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteOfferContentPre(res.data));
        // dispatch(loadAllOfferContent());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_OFFERCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteOfferContentPre = (data) => {
  toast.error("OfferContent Deleted Successfully!");
  return {
    type: DELETE_OFFERCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const OfferContentChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: OFFERCONTENT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/offer-product-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(OfferContentChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: OFFERCONTENT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const OfferContentChangeStatusPre = (data) => {
  toast.success("OfferContent Status Successfully!");
  return {
    type: OFFERCONTENT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllOfferContent,
  loadSingleOfferContent,
  createOfferContent,
  updateOfferContent,
  deleteOfferContent,
  OfferContentChangeStatus,
};
