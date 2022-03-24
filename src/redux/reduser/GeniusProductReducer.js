import {
  ADD_GENIUSPRODUCT_FAIL,
  ADD_GENIUSPRODUCT_SUCCESS,
  ADD_GENIUSPRODUCT_REQUEST,
  DELETE_GENIUSPRODUCT_REQUEST,
  DELETE_GENIUSPRODUCT_SUCCESS,
  GETDETAIL_GENIUSPRODUCT_REQUEST,
  GETDETAIL_GENIUSPRODUCT_FAIL,
  GETDETAIL_GENIUSPRODUCT_SUCCESS,
  UPDATE_GENIUSPRODUCT_FAIL,
  UPDATE_GENIUSPRODUCT_SUCCESS,
  UPDATE_GENIUSPRODUCT_REQUEST,
  DELETE_GENIUSPRODUCT_FAIL,
  GETALL_GENIUSPRODUCT_FAIL,
  GETALL_GENIUSPRODUCT_SUCCESS,
  GETALL_GENIUSPRODUCT_REQUEST,
  GENIUSPRODUCT_CHANGE_STATUS_FAIL,
  GENIUSPRODUCT_CHANGE_STATUS_REQUEST,
  GENIUSPRODUCT_CHANGE_STATUS_SUCCESS,
} from "../constant/GeniusProductConstant";

const initialState = {
  loading: false,
  action: "GENIUSPRODUCT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const GeniusProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_GENIUSPRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_GENIUSPRODUCT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_GENIUSPRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_GENIUSPRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_GENIUSPRODUCT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_GENIUSPRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_GENIUSPRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_GENIUSPRODUCT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_GENIUSPRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_GENIUSPRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_GENIUSPRODUCT_SUCCESS:
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
    case UPDATE_GENIUSPRODUCT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GENIUSPRODUCT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GENIUSPRODUCT_CHANGE_STATUS_SUCCESS:
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
    case GENIUSPRODUCT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_GENIUSPRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_GENIUSPRODUCT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_GENIUSPRODUCT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default GeniusProductReducer;
