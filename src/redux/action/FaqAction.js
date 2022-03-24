import {
  ADD_FAQ_FAIL,
  ADD_FAQ_SUCCESS,
  ADD_FAQ_REQUEST,
  DELETE_FAQ_REQUEST,
  DELETE_FAQ_SUCCESS,
  GETDETAIL_FAQ_REQUEST,
  GETDETAIL_FAQ_FAIL,
  GETDETAIL_FAQ_SUCCESS,
  UPDATE_FAQ_FAIL,
  UPDATE_FAQ_SUCCESS,
  UPDATE_FAQ_REQUEST,
  DELETE_FAQ_FAIL,
  GETALL_FAQ_FAIL,
  GETALL_FAQ_SUCCESS,
  GETALL_FAQ_REQUEST,
  FAQ_CHANGE_STATUS_FAIL,
  FAQ_CHANGE_STATUS_REQUEST,
  FAQ_CHANGE_STATUS_SUCCESS,
} from "../constant/FaqConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllFaq = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_FAQ_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-faq-details/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllFaqPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_FAQ_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllFaqPre = (data) => {
  return {
    type: GETALL_FAQ_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleFaq = (id) => {
  let data = { id: id };
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_FAQ_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-faq-details/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleFaqPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_FAQ_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleFaqPre = (data) => {
  return {
    type: GETDETAIL_FAQ_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createFaq = (title, description) => {
  return function (dispatch) {
    dispatch({
      type: ADD_FAQ_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-faq-details/`,
      method: "POST",
      data: { title, description },

      headers: {
        "content-type": "application/json",
        // Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createFaqPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_FAQ_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Faq!");
      });
  };
};
export const createFaqPre = (data) => {
  toast.success("Faq Created Successfully!");

  return {
    type: ADD_FAQ_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateFaq = (id, title, description) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_FAQ_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-faq-details/`,
      method: "POST",
      data: { id, title, description },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateFaqPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_FAQ_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Faq!");
      });
  };
};
export const updateFaqPre = (data) => {
  toast.success("Faq Updated Successfully!");

  return {
    type: UPDATE_FAQ_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteFaq = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_FAQ_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-faq-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteFaqPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_FAQ_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteFaqPre = (data) => {
  toast.error("Faq Deleted Successfully!");
  return {
    type: DELETE_FAQ_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const FaqChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: FAQ_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-faq-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(FaqChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: FAQ_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const FaqChangeStatusPre = (data) => {
  toast.success("Faq Status Successfully!");
  return {
    type: FAQ_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllFaq,
  loadSingleFaq,
  createFaq,
  updateFaq,
  deleteFaq,
  FaqChangeStatus,
};
