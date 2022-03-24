import {
  ADD_ENQUIRY_FAIL,
  ADD_ENQUIRY_REQUEST,
  ADD_ENQUIRY_SUCCESS,
  DELETE_ENQUIRY_FAIL,
  DELETE_ENQUIRY_REQUEST,
  DELETE_ENQUIRY_SUCCESS,
  GET_ALL_ENQUIRY_FAIL,
  GET_ALL_ENQUIRY_REQUEST,
  GET_ALL_ENQUIRY_SUCCESS,
  GET_SINGLE_ENQUIRY_FAIL,
  GET_SINGLE_ENQUIRY_REQUEST,
  GET_SINGLE_ENQUIRY_SUCCESS,
  // ENQUIRY_CHANGE_STATUS_FAIL,
  // ENQUIRY_CHANGE_STATUS_REQUEST,
  // ENQUIRY_CHANGE_STATUS_SUCCESS,
  UPDATE_ENQUIRY_FAIL,
  UPDATE_ENQUIRY_REQUEST,
  UPDATE_ENQUIRY_SUCCESS,
} from "../constant/EnquiryConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllEnquiry = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_ENQUIRY_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-enquery/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllEnquiryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ENQUIRY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllEnquiryPre = (data) => {
  return {
    type: GET_ALL_ENQUIRY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleEnquiry = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_ENQUIRY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-enquery/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleEnquiryPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_ENQUIRY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleEnquiryPre = (data) => {
  return {
    type: GET_SINGLE_ENQUIRY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createEnquiry = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_ENQUIRY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-enquery/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createEnquiryPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: ADD_ENQUIRY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Enquiry!");
      });
  };
};
export const createEnquiryPre = (data) => {
  toast.success("Enquiry Created Successfully!");

  return {
    type: ADD_ENQUIRY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateEnquiry = (data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ENQUIRY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-enquery/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateEnquiryPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ENQUIRY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Enquiry!");
      });
  };
};
export const updateEnquiryPre = (data) => {
  toast.success("Enquiry Updated Successfully!");

  return {
    type: UPDATE_ENQUIRY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteEnquiry = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ENQUIRY_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-enquery-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteEnquiryPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ENQUIRY_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteEnquiryPre = (data) => {
  toast.error("Enquiry Deleted Successfully!");
  return {
    type: DELETE_ENQUIRY_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
// const EnquiryChangeStatus = (data) => {
//   return function (dispatch) {
//     dispatch({
//       type: ENQUIRY_CHANGE_STATUS_REQUEST,
//       payload: true,
//     });
//     // const token = JSON.parse(localStorage.getItem("jwt"))
//     //   ? JSON.parse(localStorage.getItem("jwt"))
//     //   : "";
//     let OPTION = {
//       url: `http://103.145.51.109:3013/api/v1/admin-store-status/`,
//       method: "POST",
//       data: data,
//       headers: {
//         "content-type": "application/json",
//         // token: token,
//       },
//     };

//     axios(OPTION)
//       .then((res) => {
//         dispatch(EnquiryChangeStatusPre(res.data));
//         // dispatch(loadAllProduct());
//       })
//       .catch((error) => {
//         dispatch({
//           type: ENQUIRY_CHANGE_STATUS_FAIL,
//           payload: false,
//           error: error,
//           msg: "Failed to load the information",
//         });
//       });
//   };
// };
// export const EnquiryChangeStatusPre = (data) => {
//   toast.success("Enquiry Status Successfully!");
//   return {
//     type: ENQUIRY_CHANGE_STATUS_SUCCESS,
//     result: data,
//     payload: false,
//     msg: "SUCCESS",
//   };
// };

export {
  loadAllEnquiry,
  loadSingleEnquiry,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
  //   EnquiryChangeStatus,
};
