import {
  ADD_BLOG_FAIL,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_REQUEST,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  GETDETAIL_BLOG_REQUEST,
  GETDETAIL_BLOG_FAIL,
  GETDETAIL_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_REQUEST,
  DELETE_BLOG_FAIL,
  GETALL_BLOG_FAIL,
  GETALL_BLOG_SUCCESS,
  GETALL_BLOG_REQUEST,
  BLOG_CHANGE_STATUS_FAIL,
  BLOG_CHANGE_STATUS_REQUEST,
  BLOG_CHANGE_STATUS_SUCCESS,
} from "../constant/BlogConstant";

const initialState = {
  loading: false,
  action: "Blog",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_BLOG_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_BLOG_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_BLOG_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_BLOG_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_BLOG_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_BLOG_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_BLOG_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_BLOG_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_BLOG_SUCCESS:
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
    case UPDATE_BLOG_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case BLOG_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case BLOG_CHANGE_STATUS_SUCCESS:
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
    case BLOG_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_BLOG_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_BLOG_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_BLOG_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default BlogReducer;
