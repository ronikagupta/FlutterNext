import {
  ADD_PRIVACYPOLICY_FAIL,
  ADD_PRIVACYPOLICY_SUCCESS,
  DELETE_PRIVACYPOLICY_REQUEST,
  DELETE_PRIVACYPOLICY_SUCCESS,
  GETALL_PRIVACYPOLICY_SUCCESS,
  GETDETAIL_PRIVACYPOLICY_REQUEST,
  GETDETAIL_PRIVACYPOLICY_FAIL,
  UPDATE_PRIVACYPOLICY_FAIL,
  UPDATE_PRIVACYPOLICY_SUCCESS,
  ADD_PRIVACYPOLICY_REQUEST,
  DELETE_PRIVACYPOLICY_FAIL,
  GETALL_PRIVACYPOLICY_FAIL,
  GETALL_PRIVACYPOLICY_REQUEST,
  GETDETAIL_PRIVACYPOLICY_SUCCESS,
  UPDATE_PRIVACYPOLICY_REQUEST,
  PRIVACYPOLICY_CHANGE_STATUS_FAIL,
  PRIVACYPOLICY_CHANGE_STATUS_REQUEST,
  PRIVACYPOLICY_CHANGE_STATUS_SUCCESS,
} from "../constant/PrivacyPolicyConstant";

const initialState = {
  loading: false,
  action: "PRIVACYPOLICY",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const PrivacyPolicyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_PRIVACYPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_PRIVACYPOLICY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_PRIVACYPOLICY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_PRIVACYPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_PRIVACYPOLICY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_PRIVACYPOLICY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_PRIVACYPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRIVACYPOLICY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_PRIVACYPOLICY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_PRIVACYPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_PRIVACYPOLICY_SUCCESS:
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
    case UPDATE_PRIVACYPOLICY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case PRIVACYPOLICY_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case PRIVACYPOLICY_CHANGE_STATUS_SUCCESS:
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
    case PRIVACYPOLICY_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_PRIVACYPOLICY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_PRIVACYPOLICY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_PRIVACYPOLICY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default PrivacyPolicyReducer;
