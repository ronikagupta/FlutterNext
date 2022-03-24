import {
  ADD_PRODUCT_IMAGE_FAIL,
  ADD_PRODUCT_IMAGE_REQUEST,
  ADD_PRODUCT_IMAGE_SUCCESS,
  DELETE_PRODUCT_IMAGE_FAIL,
  DELETE_PRODUCT_IMAGE_REQUEST,
  DELETE_PRODUCT_IMAGE_SUCCESS,
  GET_ALL_PRODUCT_IMAGE_FAIL,
  GET_ALL_PRODUCT_IMAGE_REQUEST,
  GET_ALL_PRODUCT_IMAGE_SUCCESS,
  GET_SINGLE_PRODUCT_IMAGE_FAIL,
  GET_SINGLE_PRODUCT_IMAGE_REQUEST,
  GET_SINGLE_PRODUCT_IMAGE_SUCCESS,
  PRODUCT_IMAGE_CHANGE_STATUS_FAIL,
  PRODUCT_IMAGE_CHANGE_STATUS_REQUEST,
  PRODUCT_IMAGE_CHANGE_STATUS_SUCCESS,
  UPDATE_PRODUCT_IMAGE_FAIL,
  UPDATE_PRODUCT_IMAGE_REQUEST,
  UPDATE_PRODUCT_IMAGE_SUCCESS,
} from "../constant/ProductImageConstant";

const initialState = {
  loading: false,
  action: "Product-Images",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const OffersReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_PRODUCT_IMAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_PRODUCT_IMAGE_SUCCESS:
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
    case UPDATE_PRODUCT_IMAGE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case PRODUCT_IMAGE_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCT_IMAGE_CHANGE_STATUS_SUCCESS:
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
    case PRODUCT_IMAGE_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_PRODUCT_IMAGE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_PRODUCT_IMAGE_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_PRODUCT_IMAGE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default OffersReduser;
