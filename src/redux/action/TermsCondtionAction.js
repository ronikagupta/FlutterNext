import {
  ADD_TERMSCONDITION_FAIL,
  ADD_TERMSCONDITION_SUCCESS,
  DELETE_TERMSCONDITION_REQUEST,
  DELETE_TERMSCONDITION_SUCCESS,
  GETALL_TERMSCONDITION_SUCCESS,
  GETDETAIL_TERMSCONDITION_REQUEST,
  GETDETAIL_TERMSCONDITION_FAIL,
  UPDATE_TERMSCONDITION_FAIL,
  UPDATE_TERMSCONDITION_SUCCESS,
  ADD_TERMSCONDITION_REQUEST,
  DELETE_TERMSCONDITION_FAIL,
  GETALL_TERMSCONDITION_FAIL,
  GETALL_TERMSCONDITION_REQUEST,
  GETDETAIL_TERMSCONDITION_SUCCESS,
  UPDATE_TERMSCONDITION_REQUEST,
  TERMSCONDITION_CHANGE_STATUS_FAIL,
  TERMSCONDITION_CHANGE_STATUS_REQUEST,
  TERMSCONDITION_CHANGE_STATUS_SUCCESS,
} from "../constant/TermsConditionConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllTermsCondition = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_TERMSCONDITION_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/term-condition-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllTermsConditionPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_TERMSCONDITION_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllTermsConditionPre = (data) => {
  return {
    type: GETALL_TERMSCONDITION_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleTermsCondition = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_TERMSCONDITION_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/term-condition-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleTermsConditionPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_TERMSCONDITION_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleTermsConditionPre = (data) => {
  return {
    type: GETDETAIL_TERMSCONDITION_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createTermsCondition = (heading, content, description) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TERMSCONDITION_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/term-condition-static-content/`,
      method: "POST",
      data: { heading, content, description },

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createTermsConditionPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_TERMSCONDITION_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The TermsCondition!");
      });
  };
};
export const createTermsConditionPre = (data) => {
  toast.success("TermsCondition Created Successfully!");

  return {
    type: ADD_TERMSCONDITION_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateTermsCondition = (id, heading, content, description) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_TERMSCONDITION_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/term-condition-static-content/`,
      method: "POST",
      data: { id, heading, content, description },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateTermsConditionPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TERMSCONDITION_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The TermsCondition!");
      });
  };
};
export const updateTermsConditionPre = (data) => {
  toast.success("TermsCondition Updated Successfully!");

  return {
    type: UPDATE_TERMSCONDITION_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteTermsCondition = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_TERMSCONDITION_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/term-condition-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteTermsConditionPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_TERMSCONDITION_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteTermsConditionPre = (data) => {
  toast.error("TermsCondition Deleted Successfully!");
  return {
    type: DELETE_TERMSCONDITION_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const TermsConditionChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: TERMSCONDITION_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/term-condition-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(TermsConditionChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: TERMSCONDITION_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const TermsConditionChangeStatusPre = (data) => {
  toast.success("TermsCondition Status Successfully!");
  return {
    type: TERMSCONDITION_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllTermsCondition,
  loadSingleTermsCondition,
  createTermsCondition,
  updateTermsCondition,
  deleteTermsCondition,
  TermsConditionChangeStatus,
};
