import {
  ADD_ABOUT_FAIL,
  ADD_ABOUT_SUCCESS,
  ADD_ABOUT_REQUEST,
  DELETE_ABOUT_REQUEST,
  DELETE_ABOUT_SUCCESS,
  GETDETAIL_ABOUT_REQUEST,
  GETDETAIL_ABOUT_FAIL,
  GETDETAIL_ABOUT_SUCCESS,
  UPDATE_ABOUT_FAIL,
  UPDATE_ABOUT_SUCCESS,
  UPDATE_ABOUT_REQUEST,
  DELETE_ABOUT_FAIL,
  GETALL_ABOUT_FAIL,
  GETALL_ABOUT_SUCCESS,
  GETALL_ABOUT_REQUEST,
  ABOUT_CHANGE_STATUS_FAIL,
  ABOUT_CHANGE_STATUS_REQUEST,
  ABOUT_CHANGE_STATUS_SUCCESS,
} from "../constant/AboutConstant";

const initialState = {
  loading: false,
  action: "ABOUT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const AboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_ABOUT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_ABOUT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_ABOUT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_ABOUT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_ABOUT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_ABOUT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_ABOUT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ABOUT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_ABOUT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_ABOUT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_ABOUT_SUCCESS:
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
    case UPDATE_ABOUT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ABOUT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ABOUT_CHANGE_STATUS_SUCCESS:
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
    case ABOUT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_ABOUT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_ABOUT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_ABOUT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default AboutReducer;
