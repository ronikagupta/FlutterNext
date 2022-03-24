import {
  ADD_RETURNPOLICY_FAIL,
  ADD_RETURNPOLICY_REQUEST,
  ADD_RETURNPOLICY_SUCCESS,
  DELETE_RETURNPOLICY_SUCCESS,
  DELETE_RETURNPOLICY_REQUEST,
  DELETE_RETURNPOLICY_FAIL,
  GET_ALL_RETURNPOLICY_FAIL,
  GET_ALL_RETURNPOLICY_REQUEST,
  GET_ALL_RETURNPOLICY_SUCCESS,
  GET_SINGLE_RETURNPOLICY_FAIL,
  GET_SINGLE_RETURNPOLICY_REQUEST,
  GET_SINGLE_RETURNPOLICY_SUCCESS,
  UPDATE_RETURNPOLICY_FAIL,
  UPDATE_RETURNPOLICY_REQUEST,
  UPDATE_RETURNPOLICY_SUCCESS,
  RETURNPOLICY_CHANGE_STATUS_FAIL,
  RETURNPOLICY_CHANGE_STATUS_REQUEST,
  RETURNPOLICY_CHANGE_STATUS_SUCCESS,
} from "../constant/ReturnPolicyConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllReturnPolicy = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_RETURNPOLICY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/return-policy-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("res", res);
        dispatch(loadAllReturnPolicyPre(res.data));
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch({
          type: GET_ALL_RETURNPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllReturnPolicyPre = (data) => {
  return {
    type: GET_ALL_RETURNPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleReturnPolicy = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_RETURNPOLICY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/return-policy-static-content/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleReturnPolicyPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_RETURNPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleReturnPolicyPre = (data) => {
  return {
    type: GET_SINGLE_RETURNPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createReturnPolicy = (data) => {
  // console.log("data", data);
  return function (dispatch) {
    dispatch({
      type: ADD_RETURNPOLICY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/return-policy-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        // console.log("res", res.data);
        dispatch(createReturnPolicyPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        // console.log("error", error);
        dispatch({
          type: ADD_RETURNPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The ReturnPolicy!");
      });
  };
};
export const createReturnPolicyPre = (data) => {
  toast.success("ReturnPolicy Created Successfully!");

  return {
    type: ADD_RETURNPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateReturnPolicy = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_RETURNPOLICY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/return-policy-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateReturnPolicyPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_RETURNPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The ReturnPolicy!");
      });
  };
};
export const updateReturnPolicyPre = (data) => {
  toast.success("ReturnPolicy Updated Successfully!");

  return {
    type: UPDATE_RETURNPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteReturnPolicy = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_RETURNPOLICY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/return-policy-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteReturnPolicyPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_RETURNPOLICY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteReturnPolicyPre = (data) => {
  toast.error("ReturnPolicy Deleted Successfully!");
  return {
    type: DELETE_RETURNPOLICY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const ReturnPolicyChangeStatus = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch({
      type: RETURNPOLICY_CHANGE_STATUS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/return-policy-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ReturnPolicyChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: RETURNPOLICY_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ReturnPolicyChangeStatusPre = (data) => {
  toast.success("ReturnPolicy Status Successfully!");
  return {
    type: RETURNPOLICY_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllReturnPolicy,
  loadSingleReturnPolicy,
  createReturnPolicy,
  updateReturnPolicy,
  deleteReturnPolicy,
  ReturnPolicyChangeStatus,
};
