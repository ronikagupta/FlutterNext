import {
  ADD_ORDER_STATUS_FAIL,
  ADD_ORDER_STATUS_REQUEST,
  ADD_ORDER_STATUS_SUCCESS,
  DELETE_ORDER_STATUS_FAIL,
  DELETE_ORDER_STATUS_REQUEST,
  DELETE_ORDER_STATUS_SUCCESS,
  GET_ALL_ORDER_STATUS_FAIL,
  GET_ALL_ORDER_STATUS_REQUEST,
  GET_ALL_ORDER_STATUS_SUCCESS,
  GET_SINGLE_ORDER_STATUS_FAIL,
  GET_SINGLE_ORDER_STATUS_REQUEST,
  GET_SINGLE_ORDER_STATUS_SUCCESS,
  ORDER_STATUS_CHANGE_STATUS_FAIL,
  ORDER_STATUS_CHANGE_STATUS_REQUEST,
  ORDER_STATUS_CHANGE_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../constant/OrderStatusConstant";

const initialState = {
  loading: false,
  action: "Order Status",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const OrderStatusReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_ORDER_STATUS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_ORDER_STATUS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_ORDER_STATUS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_ORDER_STATUS_SUCCESS:
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
    case UPDATE_ORDER_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ORDER_STATUS_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ORDER_STATUS_CHANGE_STATUS_SUCCESS:
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
    case ORDER_STATUS_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_ORDER_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default OrderStatusReduser;
