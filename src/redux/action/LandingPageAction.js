import axios from "axios";
import {
  GET_30DAY_SALSE_REVENEW_FAIL,
  GET_30DAY_SALSE_REVENEW_REQUEST,
  GET_30DAY_SALSE_REVENEW_SUCCESS,
  GET_7DAY_SALSE_REVENEW_FAIL,
  GET_7DAY_SALSE_REVENEW_REQUEST,
  GET_7DAY_SALSE_REVENEW_SUCCESS,
  GET_TODAY_SALSE_REVENEW_FAIL,
  GET_TODAY_SALSE_REVENEW_REQUEST,
  GET_TODAY_SALSE_REVENEW_SUCCESS,
  GET_SALSE_REVENEW_FAIL,
  GET_SALSE_REVENEW_REQUEST,
  GET_SALSE_REVENEW_SUCCESS,
  GET_ACCESSORY_PRODUCT_COUNT_FAIL,
  GET_ACCESSORY_PRODUCT_COUNT_REQUEST,
  GET_ACCESSORY_PRODUCT_COUNT_SUCCESS,
  GET_MAIN_PRODUCT_COUNT_FAIL,
  GET_MAIN_PRODUCT_COUNT_REQUEST,
  GET_MAIN_PRODUCT_COUNT_SUCCESS,
  GET_ALL_ORDER_COUNT_FAIL,
  GET_ALL_ORDER_COUNT_REQUEST,
  GET_ALL_ORDER_COUNT_SUCCESS,
  GET_CANCEL_ORDER_COUNT_FAIL,
  GET_CANCEL_ORDER_COUNT_REQUEST,
  GET_CANCEL_ORDER_COUNT_SUCCESS,
  GET_COMPLETE_ORDER_COUNT_FAIL,
  GET_COMPLETE_ORDER_COUNT_REQUEST,
  GET_COMPLETE_ORDER_COUNT_SUCCESS,
  GET_RETURN_ORDER_COUNT_FAIL,
  GET_RETURN_ORDER_COUNT_REQUEST,
  GET_RETURN_ORDER_COUNT_SUCCESS,
  GET_USERS_COUNT_FAIL,
  GET_USERS_COUNT_REQUEST,
  GET_USERS_COUNT_SUCCESS,
} from "../constant/LandingPageConstant";

// monthly Salse Revenew
const monthlySalseRevenew = () => {
  return function (dispatch) {
    dispatch({
      type: GET_30DAY_SALSE_REVENEW_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-salse-revenue-30day/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(monthlySalseRevenewPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_30DAY_SALSE_REVENEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const monthlySalseRevenewPre = (data) => {
  return {
    type: GET_30DAY_SALSE_REVENEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// Weekly Salse Revenew
const weeklySalseRevenew = () => {
  return function (dispatch) {
    dispatch({
      type: GET_7DAY_SALSE_REVENEW_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-salse-revenue-7day/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(weeklySalseRevenewPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_7DAY_SALSE_REVENEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const weeklySalseRevenewPre = (data) => {
  return {
    type: GET_7DAY_SALSE_REVENEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// today Salse Revenew
const todaySalseRevenew = () => {
  return function (dispatch) {
    dispatch({
      type: GET_TODAY_SALSE_REVENEW_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-today-salse-revenue/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(todaySalseRevenewPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_TODAY_SALSE_REVENEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const todaySalseRevenewPre = (data) => {
  return {
    type: GET_TODAY_SALSE_REVENEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// total Salse Revenew
const totalSalseRevenew = () => {
  return function (dispatch) {
    dispatch({
      type: GET_SALSE_REVENEW_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-salse-revenue/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(totalSalseRevenewPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_SALSE_REVENEW_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const totalSalseRevenewPre = (data) => {
  return {
    type: GET_SALSE_REVENEW_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// accessory product count
const accessoryProductCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ACCESSORY_PRODUCT_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-accesories-product-count/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(accessoryProductCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ACCESSORY_PRODUCT_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const accessoryProductCountPre = (data) => {
  return {
    type: GET_ACCESSORY_PRODUCT_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// main product count
const mainProductCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_MAIN_PRODUCT_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-main-product-count/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(mainProductCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_MAIN_PRODUCT_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const mainProductCountPre = (data) => {
  return {
    type: GET_MAIN_PRODUCT_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// user count
const userCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_USERS_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-user-count/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(userCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_USERS_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const userCountPre = (data) => {
  return {
    type: GET_USERS_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// Order count
const orderCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_ALL_ORDER_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-all-orders/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(orderCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_ORDER_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const orderCountPre = (data) => {
  return {
    type: GET_ALL_ORDER_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// Cancel Order count
const cancelOrderCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_CANCEL_ORDER_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-cancel-orders/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(cancelOrderCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_CANCEL_ORDER_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const cancelOrderCountPre = (data) => {
  return {
    type: GET_CANCEL_ORDER_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// complete Order count
const completeOrderCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_COMPLETE_ORDER_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-complete-orders/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(completeOrderCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_COMPLETE_ORDER_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const completeOrderCountPre = (data) => {
  return {
    type: GET_COMPLETE_ORDER_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

// return Order count
const returnOrderCount = () => {
  return function (dispatch) {
    dispatch({
      type: GET_RETURN_ORDER_COUNT_REQUEST,
      payload: true,
    });

    let OPTION = {
      url: `http://103.145.51.109:3013/api/v1/admin-dashboard-return-orders/`,
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTION)
      .then((res) => {
        dispatch(returnOrderCountPre(res.data));
      })
      .catch((error) => {
        dispatch({
          type: GET_RETURN_ORDER_COUNT_FAIL,
          payload: false,
          error: error,
          msg: "Failed to load the information",
        });
      });
  };
};
export const returnOrderCountPre = (data) => {
  return {
    type: GET_RETURN_ORDER_COUNT_SUCCESS,
    result: data,
    payload: false,
    msg: "SUCCESS",
  };
};

export {
  monthlySalseRevenew,
  weeklySalseRevenew,
  todaySalseRevenew,
  totalSalseRevenew,
  accessoryProductCount,
  mainProductCount,
  userCount,
  orderCount,
  cancelOrderCount,
  completeOrderCount,
  returnOrderCount,
};
