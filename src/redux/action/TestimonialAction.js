import {
  ADD_TESTIMONIAL_FAIL,
  ADD_TESTIMONIAL_SUCCESS,
  ADD_TESTIMONIAL_REQUEST,
  DELETE_TESTIMONIAL_REQUEST,
  DELETE_TESTIMONIAL_SUCCESS,
  GETDETAIL_TESTIMONIAL_REQUEST,
  GETDETAIL_TESTIMONIAL_FAIL,
  GETDETAIL_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_FAIL,
  UPDATE_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_REQUEST,
  DELETE_TESTIMONIAL_FAIL,
  GETALL_TESTIMONIAL_FAIL,
  GETALL_TESTIMONIAL_SUCCESS,
  GETALL_TESTIMONIAL_REQUEST,
  TESTIMONIAL_CHANGE_STATUS_FAIL,
  TESTIMONIAL_CHANGE_STATUS_REQUEST,
  TESTIMONIAL_CHANGE_STATUS_SUCCESS,
} from "../constant/TestimonialConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the category

const loadAllTestimonial = () => {
  return function (dispatch) {
    dispatch({
      type: GETALL_TESTIMONIAL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-testimonial/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllTestimonialPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETALL_TESTIMONIAL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllTestimonialPre = (data) => {
  return {
    type: GETALL_TESTIMONIAL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleTestimonial = (id) => {
  return function (dispatch) {
    dispatch({
      type: GETDETAIL_TESTIMONIAL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-testimonial/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleTestimonialPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GETDETAIL_TESTIMONIAL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleTestimonialPre = (data) => {
  return {
    type: GETDETAIL_TESTIMONIAL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createTestimonial = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TESTIMONIAL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-testimonial/`,
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
        dispatch(createTestimonialPre(res.data));
        // dispatch(loadAllCategory());
      })
      .catch((error) => {
        dispatch({
          type: ADD_TESTIMONIAL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Testimonial!");
      });
  };
};
export const createTestimonialPre = (data) => {
  toast.success("Testimonial Created Successfully!");

  return {
    type: ADD_TESTIMONIAL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateTestimonial = (id, author, city, title, description) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_TESTIMONIAL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-testimonial/`,
      method: "POST",
      data: { id, author, city, title, description },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateTestimonialPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_TESTIMONIAL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Testimonial!");
      });
  };
};
export const updateTestimonialPre = (data) => {
  toast.success("Testimonial Updated Successfully!");

  return {
    type: UPDATE_TESTIMONIAL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteTestimonial = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_TESTIMONIAL_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-testimonial-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteTestimonialPre(res.data));
        // dispatch(loadAllFaq());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_TESTIMONIAL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteTestimonialPre = (data) => {
  toast.error("Testimonial Deleted Successfully!");
  return {
    type: DELETE_TESTIMONIAL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const TestimonialChangeStatus = (data) => {
  return function (dispatch) {
    dispatch({
      type: TESTIMONIAL_CHANGE_STATUS_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-testimonial-status/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(TestimonialChangeStatusPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: TESTIMONIAL_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const TestimonialChangeStatusPre = (data) => {
  toast.success("Testimonial Status Successfully!");
  return {
    type: TESTIMONIAL_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllTestimonial,
  loadSingleTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  TestimonialChangeStatus,
};
