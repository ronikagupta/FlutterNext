import {
  ADD_BEST_USES_FAIL,
  ADD_BEST_USES_REQUEST,
  ADD_BEST_USES_SUCCESS,
  BEST_USES_CHANGE_STATUS_FAIL,
  BEST_USES_CHANGE_STATUS_SUCCESS,
  BEST_USES_CHANGE_STATUS_REQUEST,
  DELETE_BEST_USES_FAIL,
  DELETE_BEST_USES_REQUEST,
  DELETE_BEST_USES_SUCCESS,
  GET_ALL_BEST_USES_FAIL,
  GET_ALL_BEST_USES_REQUEST,
  GET_ALL_BEST_USES_SUCCESS,
  GET_SINGLE_BEST_USES_FAIL,
  GET_SINGLE_BEST_USES_REQUEST,
  GET_SINGLE_BEST_USES_SUCCESS,
  UPDATE_BEST_USES_FAIL,
  UPDATE_BEST_USES_REQUEST,
  UPDATE_BEST_USES_SUCCESS,
} from "../constant/BestUsesConstant";

const initialState = {
  loading: false,
  action: "Product Best Uses",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const ProductBestUsesReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BEST_USES_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_BEST_USES_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_BEST_USES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_BEST_USES_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_BEST_USES_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_BEST_USES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_BEST_USES_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_BEST_USES_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_BEST_USES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_BEST_USES_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_BEST_USES_SUCCESS:
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
    case UPDATE_BEST_USES_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case BEST_USES_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case BEST_USES_CHANGE_STATUS_SUCCESS:
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
    case BEST_USES_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_BEST_USES_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_BEST_USES_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_BEST_USES_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ProductBestUsesReduser;
