import {
  ADD_CATEGORYCONTENT_FAIL,
  ADD_CATEGORYCONTENT_SUCCESS,
  ADD_CATEGORYCONTENT_REQUEST,
  DELETE_CATEGORYCONTENT_REQUEST,
  DELETE_CATEGORYCONTENT_SUCCESS,
  GETDETAIL_CATEGORYCONTENT_REQUEST,
  GETDETAIL_CATEGORYCONTENT_FAIL,
  GETDETAIL_CATEGORYCONTENT_SUCCESS,
  UPDATE_CATEGORYCONTENT_FAIL,
  UPDATE_CATEGORYCONTENT_SUCCESS,
  UPDATE_CATEGORYCONTENT_REQUEST,
  DELETE_CATEGORYCONTENT_FAIL,
  GETALL_CATEGORYCONTENT_FAIL,
  GETALL_CATEGORYCONTENT_SUCCESS,
  GETALL_CATEGORYCONTENT_REQUEST,
  CATEGORYCONTENT_CHANGE_STATUS_FAIL,
  CATEGORYCONTENT_CHANGE_STATUS_REQUEST,
  CATEGORYCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/CategoryContentConstant";

const initialState = {
  loading: false,
  action: "CATEGORYCONTENT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const CategoryContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_CATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_CATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_CATEGORYCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_CATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_CATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_CATEGORYCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_CATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CATEGORYCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CATEGORYCONTENT_SUCCESS:
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
    case UPDATE_CATEGORYCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CATEGORYCONTENT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CATEGORYCONTENT_CHANGE_STATUS_SUCCESS:
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
    case CATEGORYCONTENT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_CATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_CATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_CATEGORYCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default CategoryContentReducer;
