import {
  ADD_BLOG_FAIL,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_REQUEST,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  GETDETAIL_BLOG_REQUEST,
  GETDETAIL_BLOG_FAIL,
  GETDETAIL_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_REQUEST,
  DELETE_BLOG_FAIL,
  GETALL_BLOG_FAIL,
  GETALL_BLOG_SUCCESS,
  GETALL_BLOG_REQUEST,
  BLOG_CHANGE_STATUS_FAIL,
  BLOG_CHANGE_STATUS_REQUEST,
  BLOG_CHANGE_STATUS_SUCCESS,
} from "../constant/BlogConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllBlog = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_BLOG_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-blog/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllBlogPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_BLOG_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllBlogPre = (data) => {
  return {
    type: GETALL_BLOG_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleBlog = (id) => {
  let data = { id: id };
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_BLOG_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-blog/${id}/`,
      method: "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleBlogPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_BLOG_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleBlogPre = (data) => {
  return {
    type: GETDETAIL_BLOG_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createBlog = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_BLOG_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-blog/`,
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
        dispatch(createBlogPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_BLOG_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Blog!");
      });
  };
};
export const createBlogPre = (data) => {
  toast.success("Blog Created Successfully!");

  return {
    type: ADD_BLOG_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateBlog = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_BLOG_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-blog/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateBlogPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_BLOG_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Blog!");
      });
  };
};
export const updateBlogPre = (data) => {
  toast.success("Blog Updated Successfully!");

  return {
    type: UPDATE_BLOG_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteBlog = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_BLOG_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-blog-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteBlogPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BLOG_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteBlogPre = (data) => {
  toast.error("Blog Deleted Successfully!");
  return {
    type: DELETE_BLOG_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const BlogChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: BLOG_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-blog-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(BlogChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: BLOG_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const BlogChangeStatusPre = (data) => {
  toast.success("Blog Status Successfully!");
  return {
    type: BLOG_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllBlog,
  loadSingleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  BlogChangeStatus,
};
