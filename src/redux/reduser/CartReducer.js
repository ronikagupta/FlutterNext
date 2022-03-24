import {
  ADD_CART_FAIL,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  CART_CHANGE_STATUS_FAIL,
  CART_CHANGE_STATUS_SUCCESS,
  CART_CHANGE_STATUS_REQUEST,
  DELETE_CART_FAIL,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_ALL_CART_FAIL,
  GET_ALL_CART_REQUEST,
  GET_ALL_CART_SUCCESS,
  GET_SINGLE_CART_FAIL,
  GET_SINGLE_CART_REQUEST,
  GET_SINGLE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
} from "../constant/CartConstant";

const initialState = {
  loading: false,
  action: "Add To Cart Reduser",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const AddToCartReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_CART_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_CART_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_CART_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_CART_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_CART_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_CART_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CART_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CART_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CART_SUCCESS:
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
    case UPDATE_CART_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CART_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CART_CHANGE_STATUS_SUCCESS:
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
    case CART_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_CART_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_CART_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_CART_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default AddToCartReduser;
