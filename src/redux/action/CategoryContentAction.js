import {
  ADD_CATEGORYCONTENT_FAIL,
  ADD_CATEGORYCONTENT_SUCCESS,
  ADD_CATEGORYCONTENT_REQUEST,
  DELETE_CATEGORYCONTENT_REQUEST,
  DELETE_CATEGORYCONTENT_SUCCESS,
  GETDETAIL_CATEGORYCONTENT_REQUEST,
  GETDETAIL_CATEGORYCONTENT_FAIL,
  GETDETAIL_CATEGORYCONTENT_SUCCESS,
  UPDATE_CATEGORYCONTENT_FAIL,
  UPDATE_CATEGORYCONTENT_SUCCESS,
  UPDATE_CATEGORYCONTENT_REQUEST,
  DELETE_CATEGORYCONTENT_FAIL,
  GETALL_CATEGORYCONTENT_FAIL,
  GETALL_CATEGORYCONTENT_SUCCESS,
  GETALL_CATEGORYCONTENT_REQUEST,
  CATEGORYCONTENT_CHANGE_STATUS_FAIL,
  CATEGORYCONTENT_CHANGE_STATUS_REQUEST,
  CATEGORYCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/CategoryContentConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllCategoryContent = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_CATEGORYCONTENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/category-static-content/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllCategoryContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_CATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllCategoryContentPre = (data) => {
  return {
    type: GETALL_CATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleCategoryContent = (id) => {
  let data = { id: id };
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_CATEGORYCONTENT_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/category-static-content/${id}/`,
      method: "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleCategoryContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_CATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleCategoryContentPre = (data) => {
  return {
    type: GETDETAIL_CATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createCategoryContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CATEGORYCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/category-static-content/`,
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
        dispatch(createCategoryContentPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_CATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The CategoryContent!");
      });
  };
};
export const createCategoryContentPre = (data) => {
  toast.success("CategoryContent Created Successfully!");

  return {
    type: ADD_CATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateCategoryContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CATEGORYCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/category-static-content/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateCategoryContentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The CategoryContent!");
      });
  };
};
export const updateCategoryContentPre = (data) => {
  toast.success("CategoryContent Updated Successfully!");

  return {
    type: UPDATE_CATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteCategoryContent = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CATEGORYCONTENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/category-static-content-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteCategoryContentPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CATEGORYCONTENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteCategoryContentPre = (data) => {
  toast.error("CategoryContent Deleted Successfully!");
  return {
    type: DELETE_CATEGORYCONTENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const CategoryContentChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: CATEGORYCONTENT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/category-static-content-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CategoryContentChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: CATEGORYCONTENT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CategoryContentChangeStatusPre = (data) => {
  toast.success("CategoryContent Status Successfully!");
  return {
    type: CATEGORYCONTENT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllCategoryContent,
  loadSingleCategoryContent,
  createCategoryContent,
  updateCategoryContent,
  deleteCategoryContent,
  CategoryContentChangeStatus,
};
