import {
  ADD_STATICECONTENT_FAIL,
  ADD_STATICECONTENT_SUCCESS,
  ADD_STATICECONTENT_REQUEST,
  DELETE_STATICECONTENT_REQUEST,
  DELETE_STATICECONTENT_SUCCESS,
  GETDETAIL_STATICECONTENT_REQUEST,
  GETDETAIL_STATICECONTENT_FAIL,
  GETDETAIL_STATICECONTENT_SUCCESS,
  UPDATE_STATICECONTENT_FAIL,
  UPDATE_STATICECONTENT_SUCCESS,
  UPDATE_STATICECONTENT_REQUEST,
  DELETE_STATICECONTENT_FAIL,
  GETALL_STATICECONTENT_FAIL,
  GETALL_STATICECONTENT_SUCCESS,
  GETALL_STATICECONTENT_REQUEST,
  STATICECONTENT_CHANGE_STATUS_FAIL,
  STATICECONTENT_CHANGE_STATUS_REQUEST,
  STATICECONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/StaticeContentConstant";

const initialState = {
  loading: false,
  action: "STATICECONTENT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const StaticeContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_STATICECONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_STATICECONTENT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_STATICECONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_STATICECONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_STATICECONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_STATICECONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_STATICECONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_STATICECONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_STATICECONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_STATICECONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_STATICECONTENT_SUCCESS:
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
    case UPDATE_STATICECONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case STATICECONTENT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case STATICECONTENT_CHANGE_STATUS_SUCCESS:
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
    case STATICECONTENT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_STATICECONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_STATICECONTENT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_STATICECONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default StaticeContentReducer;
