import {
  ADD_TERMSCONDITION_FAIL,
  ADD_TERMSCONDITION_SUCCESS,
  DELETE_TERMSCONDITION_REQUEST,
  DELETE_TERMSCONDITION_SUCCESS,
  GETALL_TERMSCONDITION_SUCCESS,
  GETDETAIL_TERMSCONDITION_REQUEST,
  GETDETAIL_TERMSCONDITION_FAIL,
  UPDATE_TERMSCONDITION_FAIL,
  UPDATE_TERMSCONDITION_SUCCESS,
  ADD_TERMSCONDITION_REQUEST,
  DELETE_TERMSCONDITION_FAIL,
  GETALL_TERMSCONDITION_FAIL,
  GETALL_TERMSCONDITION_REQUEST,
  GETDETAIL_TERMSCONDITION_SUCCESS,
  UPDATE_TERMSCONDITION_REQUEST,
  TERMSCONDITION_CHANGE_STATUS_FAIL,
  TERMSCONDITION_CHANGE_STATUS_REQUEST,
  TERMSCONDITION_CHANGE_STATUS_SUCCESS,
} from "../constant/TermsConditionConstant";

const initialState = {
  loading: false,
  action: "TERMSCONDITION",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const TermsConditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_TERMSCONDITION_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_TERMSCONDITION_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_TERMSCONDITION_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_TERMSCONDITION_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_TERMSCONDITION_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_TERMSCONDITION_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_TERMSCONDITION_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_TERMSCONDITION_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_TERMSCONDITION_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_TERMSCONDITION_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_TERMSCONDITION_SUCCESS:
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
    case UPDATE_TERMSCONDITION_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case TERMSCONDITION_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case TERMSCONDITION_CHANGE_STATUS_SUCCESS:
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
    case TERMSCONDITION_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_TERMSCONDITION_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_TERMSCONDITION_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_TERMSCONDITION_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default TermsConditionReducer;
