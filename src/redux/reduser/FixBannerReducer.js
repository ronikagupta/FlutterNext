import {
  ADD_FIXBANNER_FAIL,
  ADD_FIXBANNER_SUCCESS,
  DELETE_FIXBANNER_REQUEST,
  DELETE_FIXBANNER_SUCCESS,
  GETALL_FIXBANNER_SUCCESS,
  GETDETAIL_FIXBANNER_REQUEST,
  GETDETAIL_FIXBANNER_FAIL,
  UPDATE_FIXBANNER_FAIL,
  UPDATE_FIXBANNER_SUCCESS,
  ADD_FIXBANNER_REQUEST,
  DELETE_FIXBANNER_FAIL,
  GETALL_FIXBANNER_FAIL,
  GETALL_FIXBANNER_REQUEST,
  GETDETAIL_FIXBANNER_SUCCESS,
  UPDATE_FIXBANNER_REQUEST,
  FIXBANNER_CHANGE_STATUS_FAIL,
  FIXBANNER_CHANGE_STATUS_REQUEST,
  FIXBANNER_CHANGE_STATUS_SUCCESS,
} from "../constant/FixBannerConstant";

const initialState = {
  loading: false,
  action: "FIXBANNER",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const FixBannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_FIXBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_FIXBANNER_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_FIXBANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_FIXBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_FIXBANNER_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_FIXBANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_FIXBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_FIXBANNER_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_FIXBANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_FIXBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_FIXBANNER_SUCCESS:
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
    case UPDATE_FIXBANNER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case FIXBANNER_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case FIXBANNER_CHANGE_STATUS_SUCCESS:
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
    case FIXBANNER_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_FIXBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_FIXBANNER_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_FIXBANNER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default FixBannerReducer;
