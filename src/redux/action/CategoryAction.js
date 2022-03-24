import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GETALL_CATEGORY_SUCCESS,
  GETDETAIL_CATEGORY_REQUEST,
  GETDETAIL_CATEGORY_FAIL,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_SUCCESS,
  ADD_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAIL,
  GETALL_CATEGORY_FAIL,
  GETALL_CATEGORY_REQUEST,
  GETDETAIL_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  CATEGORY_CHANGE_STATUS_FAIL,
  CATEGORY_CHANGE_STATUS_REQUEST,
  CATEGORY_CHANGE_STATUS_SUCCESS,
} from "../constant/Category";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllCategory = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_CATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-category-list/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllCategoryPre = (data) => {
  return {
    type: GETALL_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};
const loadCategory = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETALL_CATEGORY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-category/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadCategoryPre = (data) => {
  return {
    type: GETALL_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleCategory = (id) => {
  let data = { id: id };
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_CATEGORY_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-category/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleCategoryPre = (data) => {
  return {
    type: GETDETAIL_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-create-category/`,
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
        dispatch(createCategoryPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Category!");
      });
  };
};
export const createCategoryPre = (data) => {
  toast.success("Category Created Successfully!");

  return {
    type: ADD_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-create-category/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateCategoryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Category!");
      });
  };
};
export const updateCategoryPre = (data) => {
  toast.success("Category Updated Successfully!");

  return {
    type: UPDATE_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteCategory = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CATEGORY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-category-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteCategoryPre(res.data));
        dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CATEGORY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteCategoryPre = (data) => {
  toast.error("Category Deleted Successfully!");
  return {
    type: DELETE_CATEGORY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const CategoryChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: CATEGORY_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-category-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CategoryChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: CATEGORY_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CategoryChangeStatusPre = (data) => {
  toast.success("Category Status Successfully!");
  return {
    type: CATEGORY_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllCategory,
  loadCategory,
  loadSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  CategoryChangeStatus,
};
