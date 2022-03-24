import {
  ADD_EMAIL_FAIL,
  ADD_EMAIL_REQUEST,
  ADD_EMAIL_SUCCESS,
  DELETE_EMAIL_SUCCESS,
  DELETE_EMAIL_REQUEST,
  DELETE_EMAIL_FAIL,
  GET_ALL_EMAIL_FAIL,
  GET_ALL_EMAIL_REQUEST,
  GET_ALL_EMAIL_SUCCESS,
  GET_SINGLE_EMAIL_FAIL,
  GET_SINGLE_EMAIL_REQUEST,
  GET_SINGLE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAIL,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  EMAIL_CHANGE_STATUS_FAIL,
  EMAIL_CHANGE_STATUS_REQUEST,
  EMAIL_CHANGE_STATUS_SUCCESS,
} from "../constant/EmailConstant";
const initialState = {
  loading: false,
  action: "EMAIL",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const EmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EMAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_EMAIL_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_EMAIL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_EMAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_EMAIL_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_EMAIL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_EMAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_EMAIL_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_EMAIL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_EMAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_EMAIL_SUCCESS:
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
    case UPDATE_EMAIL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case EMAIL_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case EMAIL_CHANGE_STATUS_SUCCESS:
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
    case EMAIL_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_EMAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_EMAIL_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_EMAIL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default EmailReducer;
