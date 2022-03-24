import {
  ADD_OFFERCONTENT_FAIL,
  ADD_OFFERCONTENT_SUCCESS,
  ADD_OFFERCONTENT_REQUEST,
  DELETE_OFFERCONTENT_REQUEST,
  DELETE_OFFERCONTENT_SUCCESS,
  GETDETAIL_OFFERCONTENT_REQUEST,
  GETDETAIL_OFFERCONTENT_FAIL,
  GETDETAIL_OFFERCONTENT_SUCCESS,
  UPDATE_OFFERCONTENT_FAIL,
  UPDATE_OFFERCONTENT_SUCCESS,
  UPDATE_OFFERCONTENT_REQUEST,
  DELETE_OFFERCONTENT_FAIL,
  GETALL_OFFERCONTENT_FAIL,
  GETALL_OFFERCONTENT_SUCCESS,
  GETALL_OFFERCONTENT_REQUEST,
  OFFERCONTENT_CHANGE_STATUS_FAIL,
  OFFERCONTENT_CHANGE_STATUS_REQUEST,
  OFFERCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/OfferContentConstant";

const initialState = {
  loading: false,
  action: "OFFERCONTENT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const OfferContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_OFFERCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_OFFERCONTENT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_OFFERCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_OFFERCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_OFFERCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_OFFERCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_OFFERCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_OFFERCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_OFFERCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_OFFERCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_OFFERCONTENT_SUCCESS:
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
    case UPDATE_OFFERCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case OFFERCONTENT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case OFFERCONTENT_CHANGE_STATUS_SUCCESS:
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
    case OFFERCONTENT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_OFFERCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_OFFERCONTENT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_OFFERCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default OfferContentReducer;
