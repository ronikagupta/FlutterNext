import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_CHANGE_STATUS_FAIL,
  USER_CHANGE_STATUS_REQUEST,
  USER_CHANGE_STATUS_SUCCESS,
  USER_IS_ADMIN_FAIL,
  USER_IS_ADMIN_REQUEST,
  USER_IS_ADMIN_SUCCESS,
  USER_IS_STAFF_FAIL,
  USER_IS_STAFF_REQUEST,
  USER_IS_STAFF_SUCCESS,
} from "../constant/UserConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the User

const loadAllUser = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_USER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllUserPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_USER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllUserPre = (data) => {
  return {
    type: GET_ALL_USER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleUser = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_USER_REQUEST,
      payload: true,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleUserPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_USER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleUserPre = (data) => {
  return {
    type: GET_SINGLE_USER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createUser = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_USER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user/`,
      method: "POST",
      data: data,

      headers: {
        Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createUserPre(res.data));
        // dispatch(loadAllUser());
      })
      .catch((error) => {
        dispatch({
          type: ADD_USER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Best Uses!");
      });
  };
};
export const createUserPre = (data) => {
  toast.success("User Created Successfully!");

  return {
    type: ADD_USER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateUser = (id, first_name, last_name, email, mobile) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user/`,
      method: "POST",
      data: { id, first_name, last_name, email, mobile },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateUserPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.error("Failed To Update The Best Uses!");
      });
  };
};
export const updateUserPre = (data) => {
  toast.success("User Details Updated Successfully!");
  return {
    type: UPDATE_USER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteUser = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_USER_REQUEST,
      payload: result,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user-delete/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteUserPre(res.data));
        // dispatch(loadAllUser());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteUserPre = (data) => {
  toast.error("User Deleted Successfully!");
  return {
    type: DELETE_USER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const UserChangeStatus = (result) => {
  return function (dispatch) {
    dispatch({
      type: USER_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user-convert-user/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(UserChangeStatusPre(res.data));
        // dispatch(loadAllUser());
      })
      .catch((error) => {
        dispatch({
          type: USER_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const UserChangeStatusPre = (data) => {
  toast.success("User Active Status Changed Successfully!");
  return {
    type: USER_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const StatusIsAdmin = (result) => {
  return function (dispatch) {
    dispatch({
      type: USER_IS_ADMIN_REQUEST,
      payload: result,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user-convert-superadmin/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(StatusIsAdminPre(res.data));
        // dispatch(loadAllUser());
      })
      .catch((error) => {
        dispatch({
          type: USER_IS_ADMIN_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const StatusIsAdminPre = (data) => {
  toast.success("User Admin Status Changed Successfully!");
  return {
    type: USER_IS_ADMIN_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const StatusIsStaff = (result) => {
  return function (dispatch) {
    dispatch({
      type: USER_IS_STAFF_REQUEST,
      payload: result,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/user-convert-admin/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(StatusIsStaffPre(res.data));
        // dispatch(loadAllUser());
      })
      .catch((error) => {
        dispatch({
          type: USER_IS_STAFF_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const StatusIsStaffPre = (data) => {
  toast.success("User Staff Status Changed Successfully!");
  return {
    type: USER_IS_STAFF_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllUser,
  loadSingleUser,
  createUser,
  updateUser,
  deleteUser,
  UserChangeStatus,
  StatusIsAdmin,
  StatusIsStaff,
};
