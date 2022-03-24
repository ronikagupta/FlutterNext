import {
  ADD_BOOKAPPOINTMENT_FAIL,
  ADD_BOOKAPPOINTMENT_SUCCESS,
  DELETE_BOOKAPPOINTMENT_REQUEST,
  DELETE_BOOKAPPOINTMENT_SUCCESS,
  GETALL_BOOKAPPOINTMENT_SUCCESS,
  GETDETAIL_BOOKAPPOINTMENT_REQUEST,
  GETDETAIL_BOOKAPPOINTMENT_FAIL,
  UPDATE_BOOKAPPOINTMENT_FAIL,
  UPDATE_BOOKAPPOINTMENT_SUCCESS,
  ADD_BOOKAPPOINTMENT_REQUEST,
  DELETE_BOOKAPPOINTMENT_FAIL,
  GETALL_BOOKAPPOINTMENT_FAIL,
  GETALL_BOOKAPPOINTMENT_REQUEST,
  GETDETAIL_BOOKAPPOINTMENT_SUCCESS,
  UPDATE_BOOKAPPOINTMENT_REQUEST,
  BOOKAPPOINTMENT_CHANGE_STATUS_FAIL,
  BOOKAPPOINTMENT_CHANGE_STATUS_REQUEST,
  BOOKAPPOINTMENT_CHANGE_STATUS_SUCCESS,
} from "../constant/BookAppointmentConstant";
import axios from "axios";
import { toast } from "react-toastify";

const loadAllBookAppointment = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_BOOKAPPOINTMENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-book-appointment/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllBookAppointmentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_BOOKAPPOINTMENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllBookAppointmentPre = (data) => {
  return {
    type: GETALL_BOOKAPPOINTMENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleBookAppointment = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_BOOKAPPOINTMENT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-book-appointment/${id}/`,
      method: "GET",

      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleBookAppointmentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_BOOKAPPOINTMENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleBookAppointmentPre = (data) => {
  return {
    type: GETDETAIL_BOOKAPPOINTMENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createBookAppointment = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_BOOKAPPOINTMENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-book-appointment/`,
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
        dispatch(createBookAppointmentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_BOOKAPPOINTMENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The BookAppointment!");
      });
  };
};
export const createBookAppointmentPre = (data) => {
  toast.success("BookAppointment Created Successfully!");

  return {
    type: ADD_BOOKAPPOINTMENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateBookAppointment = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_BOOKAPPOINTMENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-book-appointment/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateBookAppointmentPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_BOOKAPPOINTMENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The BookAppointment!");
      });
  };
};
export const updateBookAppointmentPre = (data) => {
  toast.success("BookAppointment Updated Successfully!");

  return {
    type: UPDATE_BOOKAPPOINTMENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteBookAppointment = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_BOOKAPPOINTMENT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-book-appointment-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteBookAppointmentPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BOOKAPPOINTMENT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteBookAppointmentPre = (data) => {
  toast.error("BookAppointment Deleted Successfully!");
  return {
    type: DELETE_BOOKAPPOINTMENT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const BookAppointmentChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: BOOKAPPOINTMENT_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-book-appointment-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(BookAppointmentChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: BOOKAPPOINTMENT_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const BookAppointmentChangeStatusPre = (data) => {
  toast.success("BookAppointment Status Successfully!");
  return {
    type: BOOKAPPOINTMENT_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllBookAppointment,
  loadSingleBookAppointment,
  createBookAppointment,
  updateBookAppointment,
  deleteBookAppointment,
  BookAppointmentChangeStatus,
};
