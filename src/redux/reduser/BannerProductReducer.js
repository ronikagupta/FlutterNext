import {
  ADD_BANNER_PRODUCT_FAIL,
  ADD_BANNER_PRODUCT_REQUEST,
  ADD_BANNER_PRODUCT_SUCCESS,
  DELETE_BANNER_PRODUCT_FAIL,
  DELETE_BANNER_PRODUCT_REQUEST,
  DELETE_BANNER_PRODUCT_SUCCESS,
  GET_ALL_BANNER_PRODUCT_FAIL,
  GET_ALL_BANNER_PRODUCT_REQUEST,
  GET_ALL_BANNER_PRODUCT_SUCCESS,
  GET_SINGLE_BANNER_PRODUCT_FAIL,
  GET_SINGLE_BANNER_PRODUCT_REQUEST,
  GET_SINGLE_BANNER_PRODUCT_SUCCESS,
  BANNER_PRODUCT_CHANGE_STATUS_FAIL,
  BANNER_PRODUCT_CHANGE_STATUS_REQUEST,
  BANNER_PRODUCT_CHANGE_STATUS_SUCCESS,
  UPDATE_BANNER_PRODUCT_FAIL,
  UPDATE_BANNER_PRODUCT_REQUEST,
  UPDATE_BANNER_PRODUCT_SUCCESS,
} from "../constant/BannerProductConstant";

const initialState = {
  loading: false,
  action: "Banner Products",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const BannerProductReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BANNER_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_BANNER_PRODUCT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_BANNER_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_BANNER_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_BANNER_PRODUCT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_BANNER_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_BANNER_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_BANNER_PRODUCT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_BANNER_PRODUCT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_BANNER_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_BANNER_PRODUCT_SUCCESS:
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
    case UPDATE_BANNER_PRODUCT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case BANNER_PRODUCT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case BANNER_PRODUCT_CHANGE_STATUS_SUCCESS:
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
    case BANNER_PRODUCT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_BANNER_PRODUCT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_BANNER_PRODUCT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_BANNER_PRODUCT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default BannerProductReduser;
