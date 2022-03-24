import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  PRODUCT_CHANGE_STATUS_FAIL,
  PRODUCT_CHANGE_STATUS_REQUEST,
  PRODUCT_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_SUBCATID_FAIL,
  GET_ALL_PRODUCT_SUBCATID_REQUEST,
  GET_ALL_PRODUCT_SUBCATID_SUCCESS,
} from "../constant/ProductConstant";

const initialState = {
  loading: false,
  action: "Product",
  result: [],
  resultsubcatid: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const ProductReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_ALL_PRODUCT_SUBCATID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_PRODUCT_SUBCATID_SUCCESS:
      return {
        ...state,
        resultsubcatid: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_PRODUCT_SUBCATID_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_PRODUCT_SUCCESS:
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
    case UPDATE_PRODUCT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case PRODUCT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCT_CHANGE_STATUS_SUCCESS:
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
    case PRODUCT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_PRODUCT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ProductReduser;
