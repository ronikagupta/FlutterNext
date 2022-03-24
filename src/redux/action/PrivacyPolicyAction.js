import {
  ADD_PRIVACYPOLICY_FAIL,
  ADD_PRIVACYPOLICY_SUCCESS,
  DELETE_PRIVACYPOLICY_REQUEST,
  DELETE_PRIVACYPOLICY_SUCCESS,
  GETALL_PRIVACYPOLICY_SUCCESS,
  GETDETAIL_PRIVACYPOLICY_REQUEST,
  GETDETAIL_PRIVACYPOLICY_FAIL,
  UPDATE_PRIVACYPOLICY_FAIL,
  UPDATE_PRIVACYPOLICY_SUCCESS,
  ADD_PRIVACYPOLICY_REQUEST,
  DELETE_PRIVACYPOLICY_FAIL,
  GETALL_PRIVACYPOLICY_FAIL,
  GETALL_PRIVACYPOLICY_REQUEST,
  GETDETAIL_PRIVACYPOLICY_SUCCESS,
  UPDATE_PRIVACYPOLICY_REQUEST,
  PRIVACYPOLICY_CHANGE_STATUS_FAIL,
  PRIVACYPOLICY_CHANGE_STATUS_REQUEST,
  PRIVACYPOLICY_CHANGE_STATUS_SUCCESS,
} from "../constant/PrivacyPolicyConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the PrivacyPolicy

const loadAllPrivacyPolicy = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_PRIVACYPOLICY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllPrivacyPolicyPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_PRIVACYPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllPrivacyPolicyPre = (data) => {
  return {
    type: GETALL_PRIVACYPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};
const loadPrivacyPolicy = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETALL_PRIVACYPOLICY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadPrivacyPolicyPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_PRIVACYPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadPrivacyPolicyPre = (data) => {
  return {
    type: GETALL_PRIVACYPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSinglePrivacyPolicy = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_PRIVACYPOLICY_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSinglePrivacyPolicyPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_PRIVACYPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSinglePrivacyPolicyPre = (data) => {
  return {
    type: GETDETAIL_PRIVACYPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createPrivacyPolicy = (heading, content, description) => {
  return function (dispatch) {
    dispatch({
      type: ADD_PRIVACYPOLICY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content/`,
      method: "POST",
      data: { heading, content, description },

      headers: {
        "content-type": "application/json",
        // Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createPrivacyPolicyPre(res.data));
        // dispatch(loadAllPrivacyPolicy());
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRIVACYPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The PrivacyPolicy!");
      });
  };
};
export const createPrivacyPolicyPre = (data) => {
  toast.success("PrivacyPolicy Created Successfully!");

  return {
    type: ADD_PRIVACYPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updatePrivacyPolicy = (id, heading, content, description) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRIVACYPOLICY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content/`,
      method: "POST",
      data: { id, heading, content, description },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updatePrivacyPolicyPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRIVACYPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The PrivacyPolicy!");
      });
  };
};
export const updatePrivacyPolicyPre = (data) => {
  toast.success("PrivacyPolicy Updated Successfully!");

  return {
    type: UPDATE_PRIVACYPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deletePrivacyPolicy = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_PRIVACYPOLICY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deletePrivacyPolicyPre(res.data));
        dispatch(loadAllPrivacyPolicy());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRIVACYPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deletePrivacyPolicyPre = (data) => {
  toast.error("PrivacyPolicy Deleted Successfully!");
  return {
    type: DELETE_PRIVACYPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const PrivacyPolicyChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: PRIVACYPOLICY_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/privacy-policy-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(PrivacyPolicyChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: PRIVACYPOLICY_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const PrivacyPolicyChangeStatusPre = (data) => {
  toast.success("PrivacyPolicy Status Successfully!");
  return {
    type: PRIVACYPOLICY_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllPrivacyPolicy,
  loadPrivacyPolicy,
  loadSinglePrivacyPolicy,
  createPrivacyPolicy,
  updatePrivacyPolicy,
  deletePrivacyPolicy,
  PrivacyPolicyChangeStatus,
};

// Which product is right for you
