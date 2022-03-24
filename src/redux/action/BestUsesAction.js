import {
  ADD_BEST_USES_FAIL,
  ADD_BEST_USES_REQUEST,
  ADD_BEST_USES_SUCCESS,
  BEST_USES_CHANGE_STATUS_FAIL,
  BEST_USES_CHANGE_STATUS_SUCCESS,
  BEST_USES_CHANGE_STATUS_REQUEST,
  DELETE_BEST_USES_FAIL,
  DELETE_BEST_USES_REQUEST,
  DELETE_BEST_USES_SUCCESS,
  GET_ALL_BEST_USES_FAIL,
  GET_ALL_BEST_USES_REQUEST,
  GET_ALL_BEST_USES_SUCCESS,
  GET_SINGLE_BEST_USES_FAIL,
  GET_SINGLE_BEST_USES_REQUEST,
  GET_SINGLE_BEST_USES_SUCCESS,
  UPDATE_BEST_USES_FAIL,
  UPDATE_BEST_USES_REQUEST,
  UPDATE_BEST_USES_SUCCESS,
} from "../constant/BestUsesConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Best Uses

const loadAllBestUses = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_BEST_USES_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllBestUsesPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_BEST_USES_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllBestUsesPre = (data) => {
  return {
    type: GET_ALL_BEST_USES_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleBestUses = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_BEST_USES_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleBestUsesPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_BEST_USES_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleBestUsesPre = (data) => {
  return {
    type: GET_SINGLE_BEST_USES_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createBestUses = (product_id, title, short_description) => {
  return function (dispatch) {
    dispatch({
      type: ADD_BEST_USES_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses/`,
      method: "POST",
      data: { product_id, title, short_description },

      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createBestUsesPre(res.data));
        // dispatch(loadAllBest Uses());
      })
      .catch((error) => {
        dispatch({
          type: ADD_BEST_USES_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Best Uses!");
      });
  };
};
export const createBestUsesPre = (data) => {
  toast.success("Best Uses Created Successfully!");

  return {
    type: ADD_BEST_USES_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateBestUses = (id, product_id, title, short_description) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_BEST_USES_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses/`,
      method: "POST",
      data: { id, product_id, title, short_description },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateBestUsesPre(res.data));
        // dispatch(loadAllBest Uses());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_BEST_USES_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Best Uses!");
      });
  };
};
export const updateBestUsesPre = (data) => {
  toast.success("Best Uses Updated Successfully!");

  return {
    type: UPDATE_BEST_USES_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteBestUses = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_BEST_USES_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteBestUsesPre(res.data));
        // dispatch(loadAllBest Uses());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BEST_USES_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteBestUsesPre = (data) => {
  toast.error("Best Uses Deleted Successfully!");
  return {
    type: DELETE_BEST_USES_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const BestUsesChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: BEST_USES_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses-change-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(BestUsesChangeStatusPre(res.data));
        // dispatch(loadAllBest Uses());
      })
      .catch((error) => {
        dispatch({
          type: BEST_USES_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const BestUsesChangeStatusPre = (data) => {
  toast.success("Best Uses Status Changed Successfully!");
  return {
    type: BEST_USES_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllBestUses,
  loadSingleBestUses,
  createBestUses,
  updateBestUses,
  deleteBestUses,
  BestUsesChangeStatus,
};
