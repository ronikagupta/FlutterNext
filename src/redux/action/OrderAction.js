import {
  ADD_ORDER_FAIL,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_ALL_ORDER_FAIL,
  GET_ALL_ORDER_REQUEST,
  GET_ALL_ORDER_SUCCESS,
  GET_SINGLE_ORDER_FAIL,
  GET_SINGLE_ORDER_REQUEST,
  GET_SINGLE_ORDER_SUCCESS,
  ORDER_CHANGE_STATUS_FAIL,
  ORDER_CHANGE_STATUS_REQUEST,
  ORDER_CHANGE_STATUS_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  GET_ALL_ORDERLIST_FAIL,
  GET_ALL_ORDERLIST_REQUEST,
  GET_ALL_ORDERLIST_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_SINGLE_ORDERLIST_FAIL,
  GET_SINGLE_ORDERLIST_REQUEST,
  GET_SINGLE_ORDERLIST_SUCCESS,
  CANCEL_ORDER_LIST_FAIL,
  CANCEL_ORDER_LIST_REQUEST,
  CANCEL_ORDER_LIST_SUCCESS,
  CANCEL_ORDER_DETAIL_FAIL,
  CANCEL_ORDER_DETAIL_REQUEST,
  CANCEL_ORDER_DETAIL_SUCCESS,
  APPROVE_CANCEL_ORDER_FAIL,
  APPROVE_CANCEL_ORDER_REQUEST,
  APPROVE_CANCEL_ORDER_SUCCESS,
  RETURN_ORDER_DETAIL_FAIL,
  RETURN_ORDER_DETAIL_REQUEST,
  RETURN_ORDER_DETAIL_SUCCESS,
  RETURN_ORDER_LIST_FAIL,
  RETURN_ORDER_LIST_REQUEST,
  RETURN_ORDER_LIST_SUCCESS,
  APPROVE_RETURN_ORDER_FAIL,
  APPROVE_RETURN_ORDER_REQUEST,
  APPROVE_RETURN_ORDER_SUCCESS,
} from "../constant/OrderConstant";

import axios from "axios";
import { toast } from "react-toastify";

// action from get all the Order

const loadAllOrder = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_ORDER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-history/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOrderPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOrderPre = (data) => {
  return {
    type: GET_ALL_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadAllOrderList = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_ORDERLIST_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/order-detail/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadAllOrderListPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ORDERLIST_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadAllOrderListPre = (data) => {
  return {
    type: GET_ALL_ORDERLIST_SUCCESS,
    orderlist: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadOrders = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-history/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadOrdersPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadOrdersPre = (data) => {
  return {
    type: GET_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOrder = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_ORDER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-history/`,
      method: "POST",
      data: { id },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOrderPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOrderPre = (data) => {
  return {
    type: GET_SINGLE_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const loadSingleOrderList = (id) => {
  return function (dispatch) {
    dispatch({
      type: GET_SINGLE_ORDERLIST_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-list/`,
      method: "POST",
      data: { id },
      headers: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(loadSingleOrderListPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SINGLE_ORDERLIST_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const loadSingleOrderListPre = (data) => {
  return {
    type: GET_SINGLE_ORDERLIST_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// add New Vehicle
const createOrder = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_ORDER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses/`,
      method: "POST",
      data: data,

      headers: {
        Accept: "multipart/form-data",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(createOrderPre(res.data));
        // dispatch(loadAllOrder());
      })
      .catch((error) => {
        dispatch({
          type: ADD_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Create The Order!");
      });
  };
};
export const createOrderPre = (data) => {
  toast.success("Order Created Successfully!");

  return {
    type: ADD_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// update Vehicle OWNER
const updateOrder = (
  order_id,
  total,
  final_total,
  shipping_cost,
  discount,
  gst,
  payment_method,
  payment_status,
  transaction_id,
  delivery_date,
  delivery_method,
  delivery_status,
  package_code,
  notes,
  created_at,
  order_status
) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_ORDER_REQUEST,
      payload: true,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-update-order/`,
      method: "POST",
      data: {
        order_id,
        total,
        final_total,
        shipping_cost,
        discount,
        gst,
        payment_method,
        payment_status,
        transaction_id,
        delivery_date,
        delivery_method,
        delivery_status,
        package_code,
        notes,
        created_at,
        order_status,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(updateOrderPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
        toast.danger("Failed To Update The Order!");
      });
  };
};
export const updateOrderPre = (data) => {
  toast.success("Order Updated Successfully!");

  return {
    type: UPDATE_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const deleteOrder = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ORDER_REQUEST,
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
        dispatch(deleteOrderPre(res.data));
        // dispatch(loadAllOrder());
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const deleteOrderPre = (data) => {
  toast.error("Order Deleted Successfully!");
  return {
    type: DELETE_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// delete assign subject to class
const OrderChangeStatus = (id, result) => {
  return function (dispatch) {
    dispatch({
      type: ORDER_CHANGE_STATUS_REQUEST,
      payload: result,
    });
    // const token = JSON.parse(localStorage.getItem("jwt"))
    //   ? JSON.parse(localStorage.getItem("jwt"))
    //   : "";
    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-product-best-uses-change-status/`,
      method: "POST",
      data: {
        "content-type": "application/json",
        // token: token,
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(OrderChangeStatusPre(res.data));
        // dispatch(loadAllOrder());
      })
      .catch((error) => {
        dispatch({
          type: ORDER_CHANGE_STATUS_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const OrderChangeStatusPre = (data) => {
  toast.success("Order Status Successfully!");
  return {
    type: ORDER_CHANGE_STATUS_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const CancelOrderList = () => {
  return function (dispatch) {
    dispatch({
      type: CANCEL_ORDER_LIST_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cancel-order/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CancelOrderListPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: CANCEL_ORDER_LIST_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CancelOrderListPre = (data) => {
  return {
    type: CANCEL_ORDER_LIST_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const CancelOrderDetail = (id) => {
  return function (dispatch) {
    dispatch({
      type: CANCEL_ORDER_DETAIL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-cancel-order/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(CancelOrderDetailPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: CANCEL_ORDER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const CancelOrderDetailPre = (data) => {
  return {
    type: CANCEL_ORDER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const ApproveCancelOrder = (
  id,
  cancel_request,
  cancel_reuest_date,
  cancelled_by,
  cancelled_approved_date,
  cancel_reason,
  cancelled_approved
) => {
  let data = {
    id,
    cancel_request,
    cancel_reuest_date,
    cancelled_by,
    cancelled_approved_date,
    cancel_reason,
    cancelled_approved,
  };
  return function (dispatch) {
    dispatch({
      type: APPROVE_CANCEL_ORDER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-cancel-approve/`,
      method: "POST",
      data: data,
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ApproveCancelOrderPre(res.data));
      })
      .catch((error) => {
        toast.error(error.msg);

        dispatch({
          type: APPROVE_CANCEL_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ApproveCancelOrderPre = (data) => {
  toast.success(data.msg);

  return {
    type: APPROVE_CANCEL_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const ReturnOrderList = () => {
  return function (dispatch) {
    dispatch({
      type: RETURN_ORDER_LIST_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-return-order/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ReturnOrderListPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: RETURN_ORDER_LIST_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ReturnOrderListPre = (data) => {
  return {
    type: RETURN_ORDER_LIST_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const ReturnOrderDetail = (id) => {
  return function (dispatch) {
    dispatch({
      type: RETURN_ORDER_DETAIL_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-return-order/${id}/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ReturnOrderDetailPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: RETURN_ORDER_DETAIL_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ReturnOrderDetailPre = (data) => {
  return {
    type: RETURN_ORDER_DETAIL_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

const ApproveReturnOrder = (
  id,
  return_request,
  retun_reuest_date,
  return_desciption,
  return_approved_date,
  return_refundtype,
  return_approved
) => {
  return function (dispatch) {
    dispatch({
      type: APPROVE_RETURN_ORDER_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-order-return-approve/`,
      method: "POST",
      data: {
        id,
        return_request,
        retun_reuest_date,
        return_desciption,
        return_approved_date,
        return_refundtype,
        return_approved,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(ApproveReturnOrderPre(res.data));
      })
      .catch((error) => {
        toast.success(error.msg);
        dispatch({
          type: APPROVE_RETURN_ORDER_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const ApproveReturnOrderPre = (data) => {
  toast.success(data.msg);

  return {
    type: APPROVE_RETURN_ORDER_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  loadAllOrder,
  loadSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  OrderChangeStatus,
  loadAllOrderList,
  loadOrders,
  loadSingleOrderList,
  CancelOrderList,
  CancelOrderDetail,
  ApproveCancelOrder,
  ReturnOrderList,
  ReturnOrderDetail,
  ApproveReturnOrder,
};
