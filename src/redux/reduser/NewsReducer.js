import {
  ADD_NEWS_FAIL,
  ADD_NEWS_REQUEST,
  ADD_NEWS_SUCCESS,
  DELETE_NEWS_SUCCESS,
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_FAIL,
  GET_ALL_NEWS_FAIL,
  GET_ALL_NEWS_REQUEST,
  GET_ALL_NEWS_SUCCESS,
  GET_SINGLE_NEWS_FAIL,
  GET_SINGLE_NEWS_REQUEST,
  GET_SINGLE_NEWS_SUCCESS,
  UPDATE_NEWS_FAIL,
  UPDATE_NEWS_REQUEST,
  UPDATE_NEWS_SUCCESS,
  NEWS_CHANGE_STATUS_FAIL,
  NEWS_CHANGE_STATUS_REQUEST,
  NEWS_CHANGE_STATUS_SUCCESS,
} from "../constant/NewsConstant";
const initialState = {
  loading: false,
  action: "NEWS",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NEWS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_NEWS_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_NEWS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_NEWS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_NEWS_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_NEWS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_NEWS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_NEWS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_NEWS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_NEWS_SUCCESS:
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
    case UPDATE_NEWS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case NEWS_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case NEWS_CHANGE_STATUS_SUCCESS:
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
    case NEWS_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_NEWS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_NEWS_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_NEWS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default NewsReducer;
