import {
  ADD_CONS_FAIL,
  ADD_CONS_REQUEST,
  ADD_CONS_SUCCESS,
  CONS_CHANGE_STATUS_FAIL,
  CONS_CHANGE_STATUS_REQUEST,
  CONS_CHANGE_STATUS_SUCCESS,
  DELETE_CONS_FAIL,
  DELETE_CONS_REQUEST,
  DELETE_CONS_SUCCESS,
  GET_ALL_CONS_FAIL,
  GET_ALL_CONS_REQUEST,
  GET_ALL_CONS_SUCCESS,
  GET_SINGLE_CONS_FAIL,
  GET_SINGLE_CONS_REQUEST,
  GET_SINGLE_CONS_SUCCESS,
  UPDATE_CONS_FAIL,
  UPDATE_CONS_REQUEST,
  UPDATE_CONS_SUCCESS,
} from "../constant/ConsConstant";

const initialState = {
  loading: false,
  action: "Product Cons",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const ProductConsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_CONS_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_CONS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_CONS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_CONS_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_CONS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_CONS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CONS_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CONS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CONS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CONS_SUCCESS:
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
    case UPDATE_CONS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CONS_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CONS_CHANGE_STATUS_SUCCESS:
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
    case CONS_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_CONS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_CONS_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_CONS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ProductConsReduser;
