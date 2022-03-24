import {
  ADD_STORE_FAIL,
  ADD_STORE_REQUEST,
  ADD_STORE_SUCCESS,
  DELETE_STORE_FAIL,
  DELETE_STORE_REQUEST,
  DELETE_STORE_SUCCESS,
  GET_ALL_STORE_FAIL,
  GET_ALL_STORE_REQUEST,
  GET_ALL_STORE_SUCCESS,
  GET_SINGLE_STORE_FAIL,
  GET_SINGLE_STORE_REQUEST,
  GET_SINGLE_STORE_SUCCESS,
  STORE_CHANGE_STATUS_FAIL,
  STORE_CHANGE_STATUS_REQUEST,
  STORE_CHANGE_STATUS_SUCCESS,
  UPDATE_STORE_FAIL,
  UPDATE_STORE_REQUEST,
  UPDATE_STORE_SUCCESS,
} from "../constant/StoreConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllStore = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_STORE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-store/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllStorePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_STORE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllStorePre = (data) => {
  return {
    type: GET_ALL_STORE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleStore = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_STORE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-store/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleStorePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_STORE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleStorePre = (data) => {
  return {
    type: GET_SINGLE_STORE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createStore = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_STORE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-store/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createStorePre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_STORE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Store!");
      });
  };
};
export const createStorePre = (data) => {
  toast.success("Store Created Successfully!");

  return {
    type: ADD_STORE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateStore = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_STORE_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-store/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateStorePre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_STORE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Store!");
      });
  };
};
export const updateStorePre = (data) => {
  toast.success("Store Updated Successfully!");

  return {
    type: UPDATE_STORE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteStore = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_STORE_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-store-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteStorePre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_STORE_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteStorePre = (data) => {
  toast.error("Store Deleted Successfully!");
  return {
    type: DELETE_STORE_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const StoreChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: STORE_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-store-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(StoreChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: STORE_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const StoreChangeStatusPre = (data) => {
  toast.success("Store Status Successfully!");
  return {
    type: STORE_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllStore,
  loadSingleStore,
  createStore,
  updateStore,
  deleteStore,
  StoreChangeStatus,
};
