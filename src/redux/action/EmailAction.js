import {
  ADD_EMAIL_FAIL,
  ADD_EMAIL_REQUEST,
  ADD_EMAIL_SUCCESS,
  DELETE_EMAIL_SUCCESS,
  DELETE_EMAIL_REQUEST,
  DELETE_EMAIL_FAIL,
  GET_ALL_EMAIL_FAIL,
  GET_ALL_EMAIL_REQUEST,
  GET_ALL_EMAIL_SUCCESS,
  GET_SINGLE_EMAIL_FAIL,
  GET_SINGLE_EMAIL_REQUEST,
  GET_SINGLE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAIL,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  EMAIL_CHANGE_STATUS_FAIL,
  EMAIL_CHANGE_STATUS_REQUEST,
  EMAIL_CHANGE_STATUS_SUCCESS,
} from "../constant/EmailConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllEmail = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_EMAIL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promotional-email/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("res", res);
        dispatch(loadAllEmailPre(res.data));
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch({
          type: GET_ALL_EMAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllEmailPre = (data) => {
  return {
    type: GET_ALL_EMAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleEmail = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_EMAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promotional-email/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleEmailPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_EMAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleEmailPre = (data) => {
  return {
    type: GET_SINGLE_EMAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createEmail = (email) => {
  // console.log("data", data);
  return function (dispatch) {
    dispatch({
      type: ADD_EMAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promotional-email/`,
      method: "POST",
      data: { email },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("res", res.data);
        dispatch(createEmailPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch({
          type: ADD_EMAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Email!");
      });
  };
};
export const createEmailPre = (data) => {
  toast.success("Email Created Successfully!");

  return {
    type: ADD_EMAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateEmail = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_EMAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promotional-email/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateEmailPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_EMAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Email!");
      });
  };
};
export const updateEmailPre = (data) => {
  toast.success("Email Updated Successfully!");

  return {
    type: UPDATE_EMAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteEmail = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_EMAIL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/admin-promotional-email-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteEmailPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_EMAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteEmailPre = (data) => {
  toast.error("Email Deleted Successfully!");
  return {
    type: DELETE_EMAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const EmailChangeStatus = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch({
      type: EMAIL_CHANGE_STATUS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-promotional-email-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(EmailChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: EMAIL_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const EmailChangeStatusPre = (data) => {
  toast.success("Email Status Successfully!");
  return {
    type: EMAIL_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllEmail,
  loadSingleEmail,
  createEmail,
  updateEmail,
  deleteEmail,
  EmailChangeStatus,
};
