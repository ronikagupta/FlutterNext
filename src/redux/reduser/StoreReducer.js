import {
  ADD_STORE_FAIL,
  ADD_STORE_REQUEST,
  ADD_STORE_SUCCESS,
  DELETE_STORE_FAIL,
  DELETE_STORE_REQUEST,
  DELETE_STORE_SUCCESS,
  GET_ALL_STORE_FAIL,
  GET_ALL_STORE_REQUEST,
  GET_ALL_STORE_SUCCESS,
  GET_SINGLE_STORE_FAIL,
  GET_SINGLE_STORE_REQUEST,
  GET_SINGLE_STORE_SUCCESS,
  STORE_CHANGE_STATUS_FAIL,
  STORE_CHANGE_STATUS_REQUEST,
  STORE_CHANGE_STATUS_SUCCESS,
  UPDATE_STORE_FAIL,
  UPDATE_STORE_REQUEST,
  UPDATE_STORE_SUCCESS,
} from "../constant/StoreConstant";

const initialState = {
  loading: false,
  action: "Store",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STORE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_STORE_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_STORE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_STORE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_STORE_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_STORE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_STORE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_STORE_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_STORE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_STORE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_STORE_SUCCESS:
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
    case UPDATE_STORE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case STORE_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case STORE_CHANGE_STATUS_SUCCESS:
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
    case STORE_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_STORE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_STORE_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_STORE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default StoreReducer;
