import {
  ADD_MAIN_CATEGORY_FAIL,
  ADD_MAIN_CATEGORY_SUCCESS,
  ADD_MAIN_CATEGORY_REQUEST,
  DELETE_MAIN_CATEGORY_REQUEST,
  DELETE_MAIN_CATEGORY_SUCCESS,
  GETALL_MAIN_CATEGORY_SUCCESS,
  GETDETAIL_MAIN_CATEGORY_REQUEST,
  GETDETAIL_MAIN_CATEGORY_FAIL,
  UPDATE_MAIN_CATEGORY_FAIL,
  UPDATE_MAIN_CATEGORY_SUCCESS,
  DELETE_MAIN_CATEGORY_FAIL,
  GETALL_MAIN_CATEGORY_FAIL,
  GETALL_MAIN_CATEGORY_REQUEST,
  GETDETAIL_MAIN_CATEGORY_SUCCESS,
  UPDATE_MAIN_CATEGORY_REQUEST,
  MAIN_CATEGORY_CHANGE_STATUS_FAIL,
  MAIN_CATEGORY_CHANGE_STATUS_REQUEST,
  MAIN_CATEGORY_CHANGE_STATUS_SUCCESS,
} from "../constant/MainCategory";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllmainCategory = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_MAIN_CATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-main-category/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllmainCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_MAIN_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllmainCategoryPre = (data) => {
  return {
    type: GETALL_MAIN_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSinglemainCategory = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_MAIN_CATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-main-category/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSinglemainCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_MAIN_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSinglemainCategoryPre = (data) => {
  return {
    type: GETDETAIL_MAIN_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createmainCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_MAIN_CATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-main-category/`,
      method: "POST",
      data: data,

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createmainCategoryPre(res.data));
        
      })
      .catch((error) => {
        dispatch({
          type: ADD_MAIN_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.error("Failed To Create The Category!");
      });
  };
};
export const createmainCategoryPre = (data) => {
  toast.success("Category Created Successfully!");

  return {
    type: ADD_MAIN_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateMainCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_MAIN_CATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-main-category/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updatemainCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_MAIN_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Category!");
      });
  };
};
export const updatemainCategoryPre = (data) => {
  toast.success("Category Updated Successfully!");
  return {
    type: UPDATE_MAIN_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deletemainCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_MAIN_CATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-main-category-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deletemainCategoryPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_MAIN_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deletemainCategoryPre = (data) => {
  toast.error("Category Deleted Successfully!");
  return {
    type: DELETE_MAIN_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const mainCategoryChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: MAIN_CATEGORY_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-main-category-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(mainCategoryChangeStatusPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: MAIN_CATEGORY_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const mainCategoryChangeStatusPre = (data) => {
  toast.success("main Category Change Status Successfully!");
  return {
    type: MAIN_CATEGORY_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllmainCategory,
  loadSinglemainCategory,
  createmainCategory,
  updateMainCategory,
  deletemainCategory,
  mainCategoryChangeStatus,
};
