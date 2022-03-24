import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_FAIL,
  GET_ALL_CONTACT_FAIL,
  GET_ALL_CONTACT_REQUEST,
  GET_ALL_CONTACT_SUCCESS,
  GET_SINGLE_CONTACT_FAIL,
  GET_SINGLE_CONTACT_REQUEST,
  GET_SINGLE_CONTACT_SUCCESS,
  CONTACT_CHANGE_STATUS_FAIL,
  CONTACT_CHANGE_STATUS_REQUEST,
  CONTACT_CHANGE_STATUS_SUCCESS,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
} from "../constant/ContactConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllContact = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_CONTACT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-customer-support/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllContactPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CONTACT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllContactPre = (data) => {
  return {
    type: GET_ALL_CONTACT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleContact = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_CONTACT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-customer-support/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleContactPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_CONTACT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleContactPre = (data) => {
  return {
    type: GET_SINGLE_CONTACT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createContact = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CONTACT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-customer-support/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createContactPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_CONTACT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Contact!");
      });
  };
};
export const createContactPre = (data) => {
  toast.success("Contact Created Successfully!");

  return {
    type: ADD_CONTACT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateContact = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_CONTACT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-customer-support/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateContactPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_CONTACT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Contact!");
      });
  };
};
export const updateContactPre = (data) => {
  toast.success("Contact Updated Successfully!");

  return {
    type: UPDATE_CONTACT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteContact = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_CONTACT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cutomer_support-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteContactPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CONTACT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteContactPre = (data) => {
  toast.error("Contact Deleted Successfully!");
  return {
    type: DELETE_CONTACT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const ContactChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: CONTACT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cutomer_support-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ContactChangeStatusPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: CONTACT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ContactChangeStatusPre = (data) => {
  toast.success("Contact Status Successfully!");
  return {
    type: CONTACT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllContact,
  loadSingleContact,
  createContact,
  updateContact,
  deleteContact,
  ContactChangeStatus,
};
