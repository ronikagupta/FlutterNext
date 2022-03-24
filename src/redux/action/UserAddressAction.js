import {
  ADD_USER_ADDRESS_FAIL,
  ADD_USER_ADDRESS_REQUEST,
  ADD_USER_ADDRESS_SUCCESS,
  DELETE_USER_ADDRESS_FAIL,
  DELETE_USER_ADDRESS_REQUEST,
  DELETE_USER_ADDRESS_SUCCESS,
  GET_ALL_USER_ADDRESS_FAIL,
  GET_ALL_USER_ADDRESS_REQUEST,
  GET_ALL_USER_ADDRESS_SUCCESS,
  GET_SINGLE_USER_ADDRESS_FAIL,
  GET_SINGLE_USER_ADDRESS_REQUEST,
  GET_SINGLE_USER_ADDRESS_SUCCESS,
  UPDATE_USER_ADDRESS_FAIL,
  UPDATE_USER_ADDRESS_REQUEST,
  UPDATE_USER_ADDRESS_SUCCESS,
  USER_ADDRESS_CHANGE_STATUS_FAIL,
  USER_ADDRESS_CHANGE_STATUS_REQUEST,
  USER_ADDRESS_CHANGE_STATUS_SUCCESS,
} from "../constant/UserAddressConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the User Address

const loadAllUserAddress = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_USER_ADDRESS_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-address/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllUserAddressPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_USER_ADDRESS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllUserAddressPre = (data) => {
  return {
    type: GET_ALL_USER_ADDRESS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleUserAddress = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_USER_ADDRESS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-address-detaile/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleUserAddressPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_USER_ADDRESS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleUserAddressPre = (data) => {
  return {
    type: GET_SINGLE_USER_ADDRESS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createUserAddress = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_USER_ADDRESS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-address/`,
      method: "POST",
      data: data,

      headers: {
        Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createUserAddressPre(res.data));
        // dispatch(loadAllUser Address());
      })
      .catch((error) => {
        dispatch({
          type: ADD_USER_ADDRESS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The User Address!");
      });
  };
};
export const createUserAddressPre = (data) => {
  toast.success("UserAddress Created Successfully!");

  return {
    type: ADD_USER_ADDRESS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateUserAddress = (
  id,
  house,
  sector,
  address,
  street,
  city,
  district,
  landmark,
  stateName,
  country,
  postCode,
  latitude,
  longitude,
  pin_location,
  firstname,
  lastname,
  mobile
) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_USER_ADDRESS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-address/`,
      method: "POST",
      data: {
        id,
        house,
        sector,
        address,
        street,
        city,
        district,
        landmark,
        stateName,
        country,
        postCode,
        latitude,
        longitude,
        pin_location,
        firstname,
        lastname,
        mobile,
      },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateUserAddressPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_ADDRESS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The User Address!");
      });
  };
};
export const updateUserAddressPre = (data) => {
  toast.success("User Address Updated Successfully!");

  return {
    type: UPDATE_USER_ADDRESS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteUserAddress = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_USER_ADDRESS_REQUEST,
      payload: result,
    });
    const token = JSON.parse(localStorage.getItem("jwt"))
      ? JSON.parse(localStorage.getItem("jwt"))
      : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses-delete/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteUserAddressPre(res.data));
        // dispatch(loadAllUser Address());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_ADDRESS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteUserAddressPre = (data) => {
  toast.success("User Address Deleted Successfully!");
  return {
    type: DELETE_USER_ADDRESS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const UserAddressChangeStatus = (result) => {
  return function (dispatch) {
    dispatch({
      type: USER_ADDRESS_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-user-address-change-status/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(UserAddressChangeStatusPre(res.data));
        // dispatch(loadAllUser Address());
      })
      .catch((error) => {
        dispatch({
          type: USER_ADDRESS_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const UserAddressChangeStatusPre = (data) => {
  toast.success("User Address Status Updated Successfully!");
  return {
    type: USER_ADDRESS_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllUserAddress,
  loadSingleUserAddress,
  createUserAddress,
  updateUserAddress,
  deleteUserAddress,
  UserAddressChangeStatus,
};
