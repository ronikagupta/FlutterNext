import {
  ADD_CAREER_FAIL,
  ADD_CAREER_SUCCESS,
  DELETE_CAREER_REQUEST,
  DELETE_CAREER_SUCCESS,
  GETALL_CAREER_SUCCESS,
  GETDETAIL_CAREER_REQUEST,
  GETDETAIL_CAREER_FAIL,
  UPDATE_CAREER_FAIL,
  UPDATE_CAREER_SUCCESS,
  ADD_CAREER_REQUEST,
  DELETE_CAREER_FAIL,
  GETALL_CAREER_FAIL,
  GETALL_CAREER_REQUEST,
  GETDETAIL_CAREER_SUCCESS,
  UPDATE_CAREER_REQUEST,
  CAREER_CHANGE_STATUS_FAIL,
  CAREER_CHANGE_STATUS_REQUEST,
  CAREER_CHANGE_STATUS_SUCCESS,
} from "../constant/CareerConstant";

const initialState = {
  loading: false,
  action: "CAREER",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const CareerReduser = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_CAREER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_CAREER_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_CAREER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_CAREER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_CAREER_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_CAREER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_CAREER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CAREER_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CAREER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CAREER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CAREER_SUCCESS:
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
    case UPDATE_CAREER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CAREER_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CAREER_CHANGE_STATUS_SUCCESS:
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
    case CAREER_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_CAREER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_CAREER_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_CAREER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default CareerReduser;
