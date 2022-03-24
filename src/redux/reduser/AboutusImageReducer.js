import {
  ADD_ABOUTIMAGE_FAIL,
  ADD_ABOUTIMAGE_SUCCESS,
  ADD_ABOUTIMAGE_REQUEST,
  DELETE_ABOUTIMAGE_REQUEST,
  DELETE_ABOUTIMAGE_SUCCESS,
  GETDETAIL_ABOUTIMAGE_REQUEST,
  GETDETAIL_ABOUTIMAGE_FAIL,
  GETDETAIL_ABOUTIMAGE_SUCCESS,
  UPDATE_ABOUTIMAGE_FAIL,
  UPDATE_ABOUTIMAGE_SUCCESS,
  UPDATE_ABOUTIMAGE_REQUEST,
  DELETE_ABOUTIMAGE_FAIL,
  GETALL_ABOUTIMAGE_FAIL,
  GETALL_ABOUTIMAGE_SUCCESS,
  GETALL_ABOUTIMAGE_REQUEST,
  ABOUTIMAGE_CHANGE_STATUS_FAIL,
  ABOUTIMAGE_CHANGE_STATUS_REQUEST,
  ABOUTIMAGE_CHANGE_STATUS_SUCCESS,
} from "../constant/AboutusImageConstant";

const initialState = {
  loading: false,
  action: "ABOUTIMAGE",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const AboutImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_ABOUTIMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_ABOUTIMAGE_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_ABOUTIMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_ABOUTIMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_ABOUTIMAGE_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_ABOUTIMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_ABOUTIMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ABOUTIMAGE_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_ABOUTIMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_ABOUTIMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_ABOUTIMAGE_SUCCESS:
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
    case UPDATE_ABOUTIMAGE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ABOUTIMAGE_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ABOUTIMAGE_CHANGE_STATUS_SUCCESS:
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
    case ABOUTIMAGE_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_ABOUTIMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_ABOUTIMAGE_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_ABOUTIMAGE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default AboutImageReducer;
