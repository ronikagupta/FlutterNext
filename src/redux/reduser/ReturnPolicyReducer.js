import {
  ADD_RETURNPOLICY_FAIL,
  ADD_RETURNPOLICY_REQUEST,
  ADD_RETURNPOLICY_SUCCESS,
  DELETE_RETURNPOLICY_SUCCESS,
  DELETE_RETURNPOLICY_REQUEST,
  DELETE_RETURNPOLICY_FAIL,
  GET_ALL_RETURNPOLICY_FAIL,
  GET_ALL_RETURNPOLICY_REQUEST,
  GET_ALL_RETURNPOLICY_SUCCESS,
  GET_SINGLE_RETURNPOLICY_FAIL,
  GET_SINGLE_RETURNPOLICY_REQUEST,
  GET_SINGLE_RETURNPOLICY_SUCCESS,
  UPDATE_RETURNPOLICY_FAIL,
  UPDATE_RETURNPOLICY_REQUEST,
  UPDATE_RETURNPOLICY_SUCCESS,
  RETURNPOLICY_CHANGE_STATUS_FAIL,
  RETURNPOLICY_CHANGE_STATUS_REQUEST,
  RETURNPOLICY_CHANGE_STATUS_SUCCESS,
} from "../constant/ReturnPolicyConstant";
const initialState = {
  loading: false,
  action: "RETURNPOLICY",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const ReturnPolicyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RETURNPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_RETURNPOLICY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_RETURNPOLICY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_RETURNPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_RETURNPOLICY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_RETURNPOLICY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_RETURNPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_RETURNPOLICY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_RETURNPOLICY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_RETURNPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_RETURNPOLICY_SUCCESS:
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
    case UPDATE_RETURNPOLICY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case RETURNPOLICY_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case RETURNPOLICY_CHANGE_STATUS_SUCCESS:
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
    case RETURNPOLICY_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_RETURNPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_RETURNPOLICY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_RETURNPOLICY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ReturnPolicyReducer;
