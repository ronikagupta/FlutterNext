import {
  ADD_OFFER_CODE_FAIL,
  ADD_OFFER_CODE_REQUEST,
  ADD_OFFER_CODE_SUCCESS,
  DELETE_OFFER_CODE_FAIL,
  DELETE_OFFER_CODE_REQUEST,
  DELETE_OFFER_CODE_SUCCESS,
  GET_ALL_OFFER_CODE_FAIL,
  GET_ALL_OFFER_CODE_REQUEST,
  GET_ALL_OFFER_CODE_SUCCESS,
  GET_SINGLE_OFFER_CODE_FAIL,
  GET_SINGLE_OFFER_CODE_REQUEST,
  GET_SINGLE_OFFER_CODE_SUCCESS,
  OFFER_CODE_CHANGE_STATUS_FAIL,
  OFFER_CODE_CHANGE_STATUS_REQUEST,
  OFFER_CODE_CHANGE_STATUS_SUCCESS,
  UPDATE_OFFER_CODE_FAIL,
  UPDATE_OFFER_CODE_REQUEST,
  UPDATE_OFFER_CODE_SUCCESS,
} from "../constant/OfferCodeConstant";

const initialState = {
  loading: false,
  action: "Offers",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const OffersReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OFFER_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_OFFER_CODE_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_OFFER_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_OFFER_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_OFFER_CODE_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_OFFER_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_OFFER_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_OFFER_CODE_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_OFFER_CODE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_OFFER_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_OFFER_CODE_SUCCESS:
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
    case UPDATE_OFFER_CODE_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case OFFER_CODE_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case OFFER_CODE_CHANGE_STATUS_SUCCESS:
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
    case OFFER_CODE_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_OFFER_CODE_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_OFFER_CODE_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_OFFER_CODE_FAIL:
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
