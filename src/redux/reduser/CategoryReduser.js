import {
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GETALL_CATEGORY_SUCCESS,
  GETDETAIL_CATEGORY_REQUEST,
  GETDETAIL_CATEGORY_FAIL,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_SUCCESS,
  ADD_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAIL,
  GETALL_CATEGORY_FAIL,
  GETALL_CATEGORY_REQUEST,
  GETDETAIL_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  CATEGORY_CHANGE_STATUS_FAIL,
  CATEGORY_CHANGE_STATUS_REQUEST,
  CATEGORY_CHANGE_STATUS_SUCCESS,
} from "../constant/Category";

const initialState = {
  loading: false,
  action: "Category",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const CategoryReduser = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_CATEGORY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CATEGORY_SUCCESS:
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
    case UPDATE_CATEGORY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CATEGORY_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CATEGORY_CHANGE_STATUS_SUCCESS:
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
    case CATEGORY_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_CATEGORY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_CATEGORY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default CategoryReduser;
