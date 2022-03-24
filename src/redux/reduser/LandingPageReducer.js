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

const initialState = {
  loading: false,
  action: "landing page",
  todaySalseRevenewData: [],
  weeklySalseRevenewData: [],
  monthlySalseRevenewData: [],
  totalSalseRevenewData: [],
  accessoryProductData: [],
  mainProductData: [],
  userCountData: [],
  orderCountData: [],
  cancelOrderCountData: [],
  returnOrderCountData: [],
  completeOrderCountData: [],
  msg: "",
  error: "",
};

const LandingPageReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_30DAY_SALSE_REVENEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_30DAY_SALSE_REVENEW_SUCCESS:
      return {
        ...state,
        monthlySalseRevenewData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_30DAY_SALSE_REVENEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_7DAY_SALSE_REVENEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_7DAY_SALSE_REVENEW_SUCCESS:
      return {
        ...state,
        weeklySalseRevenewData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_7DAY_SALSE_REVENEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_TODAY_SALSE_REVENEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_TODAY_SALSE_REVENEW_SUCCESS:
      return {
        ...state,
        todaySalseRevenewData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_TODAY_SALSE_REVENEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SALSE_REVENEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SALSE_REVENEW_SUCCESS:
      return {
        ...state,
        totalSalseRevenewData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SALSE_REVENEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_ACCESSORY_PRODUCT_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ACCESSORY_PRODUCT_COUNT_SUCCESS:
      return {
        ...state,
        accessoryProductData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ACCESSORY_PRODUCT_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_MAIN_PRODUCT_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_MAIN_PRODUCT_COUNT_SUCCESS:
      return {
        ...state,
        mainProductData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_MAIN_PRODUCT_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_ALL_ORDER_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ORDER_COUNT_SUCCESS:
      return {
        ...state,
        orderCountData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_ORDER_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_CANCEL_ORDER_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CANCEL_ORDER_COUNT_SUCCESS:
      return {
        ...state,
        cancelOrderCountData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_CANCEL_ORDER_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_COMPLETE_ORDER_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_COMPLETE_ORDER_COUNT_SUCCESS:
      return {
        ...state,
        completeOrderCountData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_COMPLETE_ORDER_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_RETURN_ORDER_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_RETURN_ORDER_COUNT_SUCCESS:
      return {
        ...state,
        returnOrderCountData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_RETURN_ORDER_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_USERS_COUNT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_USERS_COUNT_SUCCESS:
      return {
        ...state,
        userCountData: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_USERS_COUNT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default LandingPageReduser;
