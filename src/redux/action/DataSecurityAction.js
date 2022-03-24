import {
  ADD_DATASECURITY_FAIL,
  ADD_DATASECURITY_SUCCESS,
  ADD_DATASECURITY_REQUEST,
  DELETE_DATASECURITY_REQUEST,
  DELETE_DATASECURITY_SUCCESS,
  GETDETAIL_DATASECURITY_REQUEST,
  GETDETAIL_DATASECURITY_FAIL,
  GETDETAIL_DATASECURITY_SUCCESS,
  UPDATE_DATASECURITY_FAIL,
  UPDATE_DATASECURITY_SUCCESS,
  UPDATE_DATASECURITY_REQUEST,
  DELETE_DATASECURITY_FAIL,
  GETALL_DATASECURITY_FAIL,
  GETALL_DATASECURITY_SUCCESS,
  GETALL_DATASECURITY_REQUEST,
  DATASECURITY_CHANGE_STATUS_FAIL,
  DATASECURITY_CHANGE_STATUS_REQUEST,
  DATASECURITY_CHANGE_STATUS_SUCCESS,
} from "../constant/DataSecurityConstant";
import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllDataSecurity = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_DATASECURITY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllDataSecurityPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_DATASECURITY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllDataSecurityPre = (data) => {
  return {
    type: GETALL_DATASECURITY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleDataSecurity = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_DATASECURITY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleDataSecurityPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_DATASECURITY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleDataSecurityPre = (data) => {
  return {
    type: GETDETAIL_DATASECURITY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createDataSecurity = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_DATASECURITY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createDataSecurityPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_DATASECURITY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The DataSecurity!");
      });
  };
};
export const createDataSecurityPre = (data) => {
  toast.success("DataSecurity Created Successfully!");

  return {
    type: ADD_DATASECURITY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateDataSecurity = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DATASECURITY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateDataSecurityPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_DATASECURITY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The DataSecurity!");
      });
  };
};
export const updateDataSecurityPre = (data) => {
  toast.success("DataSecurity Updated Successfully!");

  return {
    type: UPDATE_DATASECURITY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteDataSecurity = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DATASECURITY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteDataSecurityPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_DATASECURITY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteDataSecurityPre = (data) => {
  toast.error("DataSecurity Deleted Successfully!");
  return {
    type: DELETE_DATASECURITY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const DataSecurityChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: DATASECURITY_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/data-security-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(DataSecurityChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: DATASECURITY_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const DataSecurityChangeStatusPre = (data) => {
  toast.success("DataSecurity Status Successfully!");
  return {
    type: DATASECURITY_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllDataSecurity,
  loadSingleDataSecurity,
  createDataSecurity,
  updateDataSecurity,
  deleteDataSecurity,
  DataSecurityChangeStatus,
};
