import {
  ADD_NEWS_FAIL,
  ADD_NEWS_REQUEST,
  ADD_NEWS_SUCCESS,
  DELETE_NEWS_SUCCESS,
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_FAIL,
  GET_ALL_NEWS_FAIL,
  GET_ALL_NEWS_REQUEST,
  GET_ALL_NEWS_SUCCESS,
  GET_SINGLE_NEWS_FAIL,
  GET_SINGLE_NEWS_REQUEST,
  GET_SINGLE_NEWS_SUCCESS,
  UPDATE_NEWS_FAIL,
  UPDATE_NEWS_REQUEST,
  UPDATE_NEWS_SUCCESS,
  NEWS_CHANGE_STATUS_FAIL,
  NEWS_CHANGE_STATUS_REQUEST,
  NEWS_CHANGE_STATUS_SUCCESS,
} from "../constant/NewsConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllNews = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_NEWS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-news/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllNewsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_NEWS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllNewsPre = (data) => {
  return {
    type: GET_ALL_NEWS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleNews = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_NEWS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-news/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleNewsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_NEWS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleNewsPre = (data) => {
  return {
    type: GET_SINGLE_NEWS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createNews = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_NEWS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-news/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createNewsPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_NEWS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The News!");
      });
  };
};
export const createNewsPre = (data) => {
  toast.success("News Created Successfully!");

  return {
    type: ADD_NEWS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateNews = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_NEWS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-news/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateNewsPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_NEWS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The News!");
      });
  };
};
export const updateNewsPre = (data) => {
  toast.success("News Updated Successfully!");

  return {
    type: UPDATE_NEWS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteNews = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_NEWS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-news-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteNewsPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_NEWS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteNewsPre = (data) => {
  toast.error("News Deleted Successfully!");
  return {
    type: DELETE_NEWS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const NewsChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: NEWS_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-news-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(NewsChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: NEWS_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const NewsChangeStatusPre = (data) => {
  toast.success("News Status Successfully!");
  return {
    type: NEWS_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllNews,
  loadSingleNews,
  createNews,
  updateNews,
  deleteNews,
  NewsChangeStatus,
};
