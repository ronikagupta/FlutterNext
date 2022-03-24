import {
  ADD_ORDER_REVIEW_FAIL,
  ADD_ORDER_REVIEW_REQUEST,
  ADD_ORDER_REVIEW_SUCCESS,
  DELETE_ORDER_REVIEW_FAIL,
  DELETE_ORDER_REVIEW_REQUEST,
  DELETE_ORDER_REVIEW_SUCCESS,
  GET_ALL_ORDER_REVIEW_FAIL,
  GET_ALL_ORDER_REVIEW_REQUEST,
  GET_ALL_ORDER_REVIEW_SUCCESS,
  GET_SINGLE_ORDER_REVIEW_FAIL,
  GET_SINGLE_ORDER_REVIEW_REQUEST,
  GET_SINGLE_ORDER_REVIEW_SUCCESS,
  ORDER_REVIEW_CHANGE_STATUS_FAIL,
  ORDER_REVIEW_CHANGE_STATUS_REQUEST,
  ORDER_REVIEW_CHANGE_STATUS_SUCCESS,
  UPDATE_ORDER_REVIEW_FAIL,
  UPDATE_ORDER_REVIEW_REQUEST,
  UPDATE_ORDER_REVIEW_SUCCESS,
} from "../constant/OrderReviewConstant";

const initialState = {
  loading: false,
  action: "Order Review",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const OrderReviewReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REVIEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_ORDER_REVIEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_ORDER_REVIEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_ORDER_REVIEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_ORDER_REVIEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_ORDER_REVIEW_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_ORDER_REVIEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        result: state.result.map((item) =>
          item.id === action.result.data.id ? action.result.data : item
        ),
        response: action.result.msg,
        singledata: [],
        loading: action.payload,

        msg: action.msg,
      };
    case UPDATE_ORDER_REVIEW_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ORDER_REVIEW_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ORDER_REVIEW_CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        result: state.result.map((item) =>
          item.id === action.result.data.id ? action.result.data : item
        ),
        response: action.result.msg,
        singledata: [],
        loading: action.payload,

        msg: action.msg,
      };
    case ORDER_REVIEW_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_ORDER_REVIEW_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_ORDER_REVIEW_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default OrderReviewReduser;
