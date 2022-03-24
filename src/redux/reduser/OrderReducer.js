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

const initialState = {
  loading: false,
  action: "Orders",
  result: [],
  orderdetail: [],
  cancelOrderRequestList: [],
  returnOrderRequestList: [],
  cancelOrderRequestDetail: [],
  returnOrderRequestDetail: [],
  allorders: [],
  orderlist: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
  msg2: "",
  error2: "",
};

const OrderReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_ORDER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_ALL_ORDERLIST_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ORDERLIST_SUCCESS:
      return {
        ...state,
        orderlist: action.orderlist.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_ORDERLIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        allorders: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ORDER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_ORDER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_ORDER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_ORDER_SUCCESS:
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
    case UPDATE_ORDER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ORDER_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ORDER_CHANGE_STATUS_SUCCESS:
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
    case ORDER_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_ORDER_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_ORDER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_ORDERLIST_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_ORDERLIST_SUCCESS:
      return {
        ...state,
        orderdetail: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_ORDERLIST_FAIL:
      return {
        error2: action.error,
        loading: action.payload,
        msg2: action.msg,
      };

    case CANCEL_ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CANCEL_ORDER_LIST_SUCCESS:
      return {
        ...state,
        cancelOrderRequestList: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case CANCEL_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CANCEL_ORDER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CANCEL_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        cancelOrderRequestDetail: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case CANCEL_ORDER_DETAIL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case APPROVE_CANCEL_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case APPROVE_CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        cancelOrderRequestList: state.result.map((item) =>
          item.id === action.result.data.id ? action.result.data : item
        ),
        response: action.result.msg,
        singledata: [],
        loading: action.payload,
        msg: action.msg,
      };
    case APPROVE_CANCEL_ORDER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case RETURN_ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case RETURN_ORDER_LIST_SUCCESS:
      return {
        ...state,
        returnOrderRequestList: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case RETURN_ORDER_LIST_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case RETURN_ORDER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case RETURN_ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        returnOrderRequestDetail: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case RETURN_ORDER_DETAIL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case APPROVE_RETURN_ORDER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case APPROVE_RETURN_ORDER_SUCCESS:
      return {
        ...state,
        returnOrderRequestList: state.result.map((item) =>
          item.id === action.result.data.id ? action.result.data : item
        ),
        response: action.result.msg,
        singledata: [],
        loading: action.payload,
        msg: action.msg,
      };
    case APPROVE_RETURN_ORDER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default OrderReduser;
