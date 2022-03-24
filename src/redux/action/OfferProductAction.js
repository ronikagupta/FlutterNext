import {
  ADD_OFFER_PRODUCT_FAIL,
  ADD_OFFER_PRODUCT_REQUEST,
  ADD_OFFER_PRODUCT_SUCCESS,
  DELETE_OFFER_PRODUCT_FAIL,
  DELETE_OFFER_PRODUCT_REQUEST,
  DELETE_OFFER_PRODUCT_SUCCESS,
  GET_ALL_OFFER_PRODUCT_FAIL,
  GET_ALL_OFFER_PRODUCT_REQUEST,
  GET_ALL_OFFER_PRODUCT_SUCCESS,
  GET_SINGLE_OFFER_PRODUCT_FAIL,
  GET_SINGLE_OFFER_PRODUCT_REQUEST,
  GET_SINGLE_OFFER_PRODUCT_SUCCESS,
  // OFFER_PRODUCT_CHANGE_STATUS_FAIL,
  // OFFER_PRODUCT_CHANGE_STATUS_REQUEST,
  // OFFER_PRODUCT_CHANGE_STATUS_SUCCESS,
  UPDATE_OFFER_PRODUCT_FAIL,
  UPDATE_OFFER_PRODUCT_REQUEST,
  UPDATE_OFFER_PRODUCT_SUCCESS,
  USER_IS_OFFER_FAIL,
  USER_IS_OFFER_REQUEST,
  USER_IS_OFFER_SUCCESS,
} from "../constant/OfferProductConstant";

import axios from "axios";
import { toast } from "react-toastify";

const loadAllOfferProduct = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_OFFER_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-product/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOfferProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_OFFER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOfferProductPre = (data) => {
  return {
    type: GET_ALL_OFFER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOfferProduct = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_OFFER_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-product/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOfferProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_OFFER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOfferProductPre = (data) => {
  return {
    type: GET_SINGLE_OFFER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const createOfferProduct = (
  offer_name,
  product_id,
  type,
  catid,
  subcategory
) => {
  return function (dispatch) {
    dispatch({
      type: ADD_OFFER_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-product/`,
      method: "POST",
      data: { offer_name, product_id, type, catid, subcategory },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createOfferProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: ADD_OFFER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Product!");
      });
  };
};
export const createOfferProductPre = (data) => {
  toast.success("Offer Product Created Successfully!");

  return {
    type: ADD_OFFER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const updateOfferProduct = (
  id,
  offer_name,
  product_id,
  type,
  catid,
  subcategory
) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_OFFER_PRODUCT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-product/`,
      method: "POST",
      data: { id, offer_name, product_id, type, catid, subcategory },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateOfferProductPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_OFFER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Product!");
      });
  };
};
export const updateOfferProductPre = (data) => {
  toast.success("Offer Product Updated Successfully!");

  return {
    type: UPDATE_OFFER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const deleteOfferProduct = (data) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_OFFER_PRODUCT_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-product-delete/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(deleteOfferProductPre(res.data));
        // dispatch(loadAllProduct());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_OFFER_PRODUCT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteOfferProductPre = (data) => {
  toast.error("Offer Product Deleted Successfully!");
  return {
    type: DELETE_OFFER_PRODUCT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
// const OfferProductChangeStatus = (data) => {
//   return function (dispatch) {
//     dispatch({
//       type: OFFER_PRODUCT_CHANGE_STATUS_REQUEST,
//       payload: true,
//     });
//     // const token = JSON.parse(localStorage.getItem("jwt"))
//     //   ? JSON.parse(localStorage.getItem("jwt"))
//     //   : "";
//     let OPTION = {
//       url: `http://103.145.51.109:3013/api/v1/admin-offer-product-change_status/`,
//       method: "POST",
//       data: data,
//       headers: {
//         "content-type": "application/json",
//         // token: token,
//       },
//     };

//     axios(OPTION)
//       .then((res) => {
//         dispatch(OfferProductChangeStatusPre(res.data));
//         // dispatch(loadAllProduct());
//       })
//       .catch((error) => {
//         dispatch({
//           type: OFFER_PRODUCT_CHANGE_STATUS_FAIL,
//           payload: false,
//           error: error,
//           msg: "Failed to load the information",
//         });
//       });
//   };
// };
// export const OfferProductChangeStatusPre = (data) => {
//   toast.success("Offer Product Status Successfully!");
//   return {
//     type: OFFER_PRODUCT_CHANGE_STATUS_SUCCESS,
//     result: data,
//     payload: false,
//     msg: "SUCCESS",
//   };
// };
const StatusIsOffer = (result) => {
  return function (dispatch) {
    dispatch({
      type: USER_IS_OFFER_REQUEST,
      payload: result,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-offer-product-change_status/`,
      method: "POST",
      data: result,
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(StatusIsOfferPre(res.data));
        // dispatch(loadAllUser());
      })
      .catch((error) => {
        dispatch({
          type: USER_IS_OFFER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const StatusIsOfferPre = (data) => {
  toast.success("Offer Status Changed Successfully!");
  return {
    type: USER_IS_OFFER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllOfferProduct,
  loadSingleOfferProduct,
  createOfferProduct,
  updateOfferProduct,
  deleteOfferProduct,
  // OfferProductChangeStatus,
  StatusIsOffer,
};
