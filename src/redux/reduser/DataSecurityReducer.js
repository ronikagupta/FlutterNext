import {
  ADD_DATASECURITY_FAIL,
  ADD_DATASECURITY_SUCCESS,
  ADD_DATASECURITY_REQUEST,
  DELETE_DATASECURITY_REQUEST,
  DELETE_DATASECURITY_SUCCESS,
  GETDETAIL_DATASECURITY_REQUEST,
  GETDETAIL_DATASECURITY_FAIL,
  GETDETAIL_DATASECURITY_SUCCESS,
  UPDATE_DATASECURITY_FAIL,
  UPDATE_DATASECURITY_SUCCESS,
  UPDATE_DATASECURITY_REQUEST,
  DELETE_DATASECURITY_FAIL,
  GETALL_DATASECURITY_FAIL,
  GETALL_DATASECURITY_SUCCESS,
  GETALL_DATASECURITY_REQUEST,
  DATASECURITY_CHANGE_STATUS_FAIL,
  DATASECURITY_CHANGE_STATUS_REQUEST,
  DATASECURITY_CHANGE_STATUS_SUCCESS,
} from "../constant/DataSecurityConstant";

const initialState = {
  loading: false,
  action: "DATASECURITY",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const DataSecurityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_DATASECURITY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_DATASECURITY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_DATASECURITY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_DATASECURITY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_DATASECURITY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_DATASECURITY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_DATASECURITY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_DATASECURITY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_DATASECURITY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_DATASECURITY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_DATASECURITY_SUCCESS:
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
    case UPDATE_DATASECURITY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DATASECURITY_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DATASECURITY_CHANGE_STATUS_SUCCESS:
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
    case DATASECURITY_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_DATASECURITY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_DATASECURITY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_DATASECURITY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default DataSecurityReducer;
