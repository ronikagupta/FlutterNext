import {
  ADD_SUBCATEGORY_FAIL,
  ADD_SUBCATEGORY_SUCCESS,
  ADD_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  GETALL_SUBCATEGORY_SUCCESS,
  GETDETAIL_SUBCATEGORY_REQUEST,
  GETDETAIL_SUBCATEGORY_FAIL,
  UPDATE_SUBCATEGORY_FAIL,
  UPDATE_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_FAIL,
  GETALL_SUBCATEGORY_FAIL,
  GETALL_SUBCATEGORY_REQUEST,
  GETDETAIL_SUBCATEGORY_SUCCESS,
  UPDATE_SUBCATEGORY_REQUEST,
  SUBCATEGORY_CHANGE_STATUS_FAIL,
  SUBCATEGORY_CHANGE_STATUS_REQUEST,
  SUBCATEGORY_CHANGE_STATUS_SUCCESS,
  // SUBCATEGORY_GETBYMAIN_CATID_REQUEST,
  // SUBCATEGORY_GETBYMAIN_CATID_SUCCESS,
  // SUBCATEGORY_GETBYMAIN_CATID_FAIL,
  SUBCATEGORY_GETBY_CATID_REQUEST,
  SUBCATEGORY_GETBY_CATID_SUCCESS,
  SUBCATEGORY_GETBY_CATID_FAIL,
} from "../constant/SubCategory";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllSubCategory = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_SUBCATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory-list/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllSubCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_SUBCATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllSubCategoryPre = (data) => {
  return {
    type: GETALL_SUBCATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSubCategory = (catId) => {
  return function (dispatch) {
    dispatch({
      type: SUBCATEGORY_GETBY_CATID_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory/`,
      method: "POST",
      data: { catid: catId },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSubCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: SUBCATEGORY_GETBY_CATID_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSubCategoryPre = (data) => {
  return {
    type: SUBCATEGORY_GETBY_CATID_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleSubCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_SUBCATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleSubCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_SUBCATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleSubCategoryPre = (data) => {
  return {
    type: GETDETAIL_SUBCATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createSubCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_SUBCATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory-create/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createSubCategoryPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_SUBCATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.error("Failed To Create The Category!");
      });
  };
};
export const createSubCategoryPre = (data) => {
  toast.success("SubCategory Created Successfully!");
  return {
    type: ADD_SUBCATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateSubCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_SUBCATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory-create/`,
      method: "POST",
      data: data,
      headers: {
        // Accept: "multipart/form-data",
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateSubCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_SUBCATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Category!");
      });
  };
};
export const updateSubCategoryPre = (data) => {
  toast.success("SubCategory Updated Successfully!");
  return {
    type: UPDATE_SUBCATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteSubCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_SUBCATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteSubCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: DELETE_SUBCATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteSubCategoryPre = (data) => {
  toast.error("SubCategory Deleted Successfully!");
  return {
    type: DELETE_SUBCATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const SubCategoryChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: SUBCATEGORY_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-subcategory-visible/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(SubCategoryChangeStatusPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: SUBCATEGORY_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const SubCategoryChangeStatusPre = (data) => {
  toast.success("SubCategory Status Successfully!");
  return {
    type: SUBCATEGORY_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllSubCategory,
  loadSubCategory,
  loadSingleSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  SubCategoryChangeStatus,
  // SubCategoryGetByMaincatid,
  // SubCategoryGetBycatid,
};
