import {
  ADD_PROMO_CODE_FAIL,
  ADD_PROMO_CODE_REQUEST,
  ADD_PROMO_CODE_SUCCESS,
  DELETE_PROMO_CODE_FAIL,
  DELETE_PROMO_CODE_REQUEST,
  DELETE_PROMO_CODE_SUCCESS,
  GET_ALL_PROMO_CODE_FAIL,
  GET_ALL_PROMO_CODE_REQUEST,
  GET_ALL_PROMO_CODE_SUCCESS,
  GET_SINGLE_PROMO_CODE_FAIL,
  GET_SINGLE_PROMO_CODE_REQUEST,
  GET_SINGLE_PROMO_CODE_SUCCESS,
  PROMO_CODE_CHANGE_STATUS_FAIL,
  PROMO_CODE_CHANGE_STATUS_REQUEST,
  PROMO_CODE_CHANGE_STATUS_SUCCESS,
  UPDATE_PROMO_CODE_FAIL,
  UPDATE_PROMO_CODE_REQUEST,
  UPDATE_PROMO_CODE_SUCCESS,
} from "../constant/PromoCodeConstant";

const initialState = {
  loading: false,
  action: "Promo Code",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const PromoCodeReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROMO_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_PROMO_CODE_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_PROMO_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_PROMO_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_PROMO_CODE_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_PROMO_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_PROMO_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PROMO_CODE_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_PROMO_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_PROMO_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_PROMO_CODE_SUCCESS:
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
    case UPDATE_PROMO_CODE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case PROMO_CODE_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case PROMO_CODE_CHANGE_STATUS_SUCCESS:
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
    case PROMO_CODE_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_PROMO_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_PROMO_CODE_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_PROMO_CODE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default PromoCodeReduser;
