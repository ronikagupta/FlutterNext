import {
  ADD_PROS_FAIL,
  ADD_PROS_REQUEST,
  ADD_PROS_SUCCESS,
  DELETE_PROS_FAIL,
  DELETE_PROS_REQUEST,
  DELETE_PROS_SUCCESS,
  GET_ALL_PROS_FAIL,
  GET_ALL_PROS_REQUEST,
  GET_ALL_PROS_SUCCESS,
  GET_SINGLE_PROS_FAIL,
  GET_SINGLE_PROS_REQUEST,
  GET_SINGLE_PROS_SUCCESS,
  PROS_CHANGE_STATUS_FAIL,
  PROS_CHANGE_STATUS_REQUEST,
  PROS_CHANGE_STATUS_SUCCESS,
  UPDATE_PROS_FAIL,
  UPDATE_PROS_REQUEST,
  UPDATE_PROS_SUCCESS,
} from "../constant/ProsConstant";

const initialState = {
  loading: false,
  action: "Product Pros",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const ProductProsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_PROS_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_PROS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_PROS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_PROS_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_PROS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_PROS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PROS_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_PROS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_PROS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_PROS_SUCCESS:
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
    case UPDATE_PROS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case PROS_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case PROS_CHANGE_STATUS_SUCCESS:
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
    case PROS_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_PROS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_PROS_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_PROS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ProductProsReduser;
