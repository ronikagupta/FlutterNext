import {
  ADD_BANNER_FAIL,
  ADD_BANNER_REQUEST,
  ADD_BANNER_SUCCESS,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  GET_ALL_BANNER_FAIL,
  GET_ALL_BANNER_REQUEST,
  GET_ALL_BANNER_SUCCESS,
  GET_SINGLE_BANNER_FAIL,
  GET_SINGLE_BANNER_REQUEST,
  GET_SINGLE_BANNER_SUCCESS,
  BANNER_CHANGE_STATUS_FAIL,
  BANNER_CHANGE_STATUS_REQUEST,
  BANNER_CHANGE_STATUS_SUCCESS,
  UPDATE_BANNER_FAIL,
  UPDATE_BANNER_REQUEST,
  UPDATE_BANNER_SUCCESS,
} from "../constant/BannerConstant";

const initialState = {
  loading: false,
  action: "Banners",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const BannerReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_BANNER_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_BANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_BANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_BANNER_SUCCESS:
      return {
        ...state,
        // result: state.result.filter(
        //   (item) => item.id !== action.result.data.id
        result: state.result.map((item) =>
          item.id === action.result.data.id ? action.result.data : item
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_BANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_BANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_BANNER_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_BANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_BANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_BANNER_SUCCESS:
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
    case UPDATE_BANNER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case BANNER_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case BANNER_CHANGE_STATUS_SUCCESS:
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
    case BANNER_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_BANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_BANNER_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_BANNER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default BannerReduser;
