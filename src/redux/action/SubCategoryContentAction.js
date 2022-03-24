import {
  ADD_SUBCATEGORYCONTENT_FAIL,
  ADD_SUBCATEGORYCONTENT_SUCCESS,
  ADD_SUBCATEGORYCONTENT_REQUEST,
  DELETE_SUBCATEGORYCONTENT_REQUEST,
  DELETE_SUBCATEGORYCONTENT_SUCCESS,
  GETDETAIL_SUBCATEGORYCONTENT_REQUEST,
  GETDETAIL_SUBCATEGORYCONTENT_FAIL,
  GETDETAIL_SUBCATEGORYCONTENT_SUCCESS,
  UPDATE_SUBCATEGORYCONTENT_FAIL,
  UPDATE_SUBCATEGORYCONTENT_SUCCESS,
  UPDATE_SUBCATEGORYCONTENT_REQUEST,
  DELETE_SUBCATEGORYCONTENT_FAIL,
  GETALL_SUBCATEGORYCONTENT_FAIL,
  GETALL_SUBCATEGORYCONTENT_SUCCESS,
  GETALL_SUBCATEGORYCONTENT_REQUEST,
  SUBCATEGORYCONTENT_CHANGE_STATUS_FAIL,
  SUBCATEGORYCONTENT_CHANGE_STATUS_REQUEST,
  SUBCATEGORYCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/SubCategoryContentConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllSubCategoryContent = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_SUBCATEGORYCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/subcategory-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllSubCategoryContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_SUBCATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllSubCategoryContentPre = (data) => {
  return {
    type: GETALL_SUBCATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleSubCategoryContent = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_SUBCATEGORYCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/subcategory-static-content/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleSubCategoryContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_SUBCATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleSubCategoryContentPre = (data) => {
  return {
    type: GETDETAIL_SUBCATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createSubCategoryContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_SUBCATEGORYCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/subcategory-static-content/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
        // Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createSubCategoryContentPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_SUBCATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The SubCategoryContent!");
      });
  };
};
export const createSubCategoryContentPre = (data) => {
  toast.success("SubCategoryContent Created Successfully!");

  return {
    type: ADD_SUBCATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateSubCategoryContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_SUBCATEGORYCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/subcategory-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateSubCategoryContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_SUBCATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The SubCategoryContent!");
      });
  };
};
export const updateSubCategoryContentPre = (data) => {
  toast.success("CategoryContent Updated Successfully!");

  return {
    type: UPDATE_SUBCATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteSubCategoryContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_SUBCATEGORYCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/subcategory-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteSubCategoryContentPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_SUBCATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteSubCategoryContentPre = (data) => {
  toast.error("CategoryContent Deleted Successfully!");
  return {
    type: DELETE_SUBCATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const SubCategoryContentChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: SUBCATEGORYCONTENT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/subcategory-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(SubCategoryContentChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: SUBCATEGORYCONTENT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const SubCategoryContentChangeStatusPre = (data) => {
  toast.success("SubCategoryContent Status Successfully!");
  return {
    type: SUBCATEGORYCONTENT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllSubCategoryContent,
  loadSingleSubCategoryContent,
  createSubCategoryContent,
  updateSubCategoryContent,
  deleteSubCategoryContent,
  SubCategoryContentChangeStatus,
};
