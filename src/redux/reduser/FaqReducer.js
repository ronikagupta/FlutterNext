import {
  ADD_FAQ_FAIL,
  ADD_FAQ_SUCCESS,
  ADD_FAQ_REQUEST,
  DELETE_FAQ_REQUEST,
  DELETE_FAQ_SUCCESS,
  GETDETAIL_FAQ_REQUEST,
  GETDETAIL_FAQ_FAIL,
  GETDETAIL_FAQ_SUCCESS,
  UPDATE_FAQ_FAIL,
  UPDATE_FAQ_SUCCESS,
  UPDATE_FAQ_REQUEST,
  DELETE_FAQ_FAIL,
  GETALL_FAQ_FAIL,
  GETALL_FAQ_SUCCESS,
  GETALL_FAQ_REQUEST,
  FAQ_CHANGE_STATUS_FAIL,
  FAQ_CHANGE_STATUS_REQUEST,
  FAQ_CHANGE_STATUS_SUCCESS,
} from "../constant/FaqConstant";

const initialState = {
  loading: false,
  action: "Faq",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const FaqReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_FAQ_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_FAQ_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_FAQ_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_FAQ_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_FAQ_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_FAQ_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_FAQ_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_FAQ_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_FAQ_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_FAQ_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_FAQ_SUCCESS:
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
    case UPDATE_FAQ_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case FAQ_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case FAQ_CHANGE_STATUS_SUCCESS:
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
    case FAQ_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_FAQ_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_FAQ_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_FAQ_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default FaqReducer;
