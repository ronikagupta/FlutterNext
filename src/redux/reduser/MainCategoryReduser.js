import {
  ADD_MAIN_CATEGORY_FAIL,
  ADD_MAIN_CATEGORY_REQUEST,
  ADD_MAIN_CATEGORY_SUCCESS,
  DELETE_MAIN_CATEGORY_REQUEST,
  DELETE_MAIN_CATEGORY_SUCCESS,
  GETALL_MAIN_CATEGORY_SUCCESS,
  GETDETAIL_MAIN_CATEGORY_REQUEST,
  GETDETAIL_MAIN_CATEGORY_FAIL,
  UPDATE_MAIN_CATEGORY_FAIL,
  UPDATE_MAIN_CATEGORY_SUCCESS,
  DELETE_MAIN_CATEGORY_FAIL,
  GETALL_MAIN_CATEGORY_FAIL,
  GETALL_MAIN_CATEGORY_REQUEST,
  GETDETAIL_MAIN_CATEGORY_SUCCESS,
  UPDATE_MAIN_CATEGORY_REQUEST,
  MAIN_CATEGORY_CHANGE_STATUS_FAIL,
  MAIN_CATEGORY_CHANGE_STATUS_REQUEST,
  MAIN_CATEGORY_CHANGE_STATUS_SUCCESS,
} from "../constant/MainCategory";

const initialState = {
  loading: false,
  action: "Main_Category",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const MainCategoryReduser = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_MAIN_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_MAIN_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_MAIN_CATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_MAIN_CATEGORY_SUCCESS:
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
    case UPDATE_MAIN_CATEGORY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case MAIN_CATEGORY_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case MAIN_CATEGORY_CHANGE_STATUS_SUCCESS:
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
    case MAIN_CATEGORY_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_MAIN_CATEGORY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default MainCategoryReduser;
