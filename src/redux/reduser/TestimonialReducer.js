import {
  ADD_TESTIMONIAL_FAIL,
  ADD_TESTIMONIAL_SUCCESS,
  ADD_TESTIMONIAL_REQUEST,
  DELETE_TESTIMONIAL_REQUEST,
  DELETE_TESTIMONIAL_SUCCESS,
  GETDETAIL_TESTIMONIAL_REQUEST,
  GETDETAIL_TESTIMONIAL_FAIL,
  GETDETAIL_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_FAIL,
  UPDATE_TESTIMONIAL_SUCCESS,
  UPDATE_TESTIMONIAL_REQUEST,
  DELETE_TESTIMONIAL_FAIL,
  GETALL_TESTIMONIAL_FAIL,
  GETALL_TESTIMONIAL_SUCCESS,
  GETALL_TESTIMONIAL_REQUEST,
  TESTIMONIAL_CHANGE_STATUS_FAIL,
  TESTIMONIAL_CHANGE_STATUS_REQUEST,
  TESTIMONIAL_CHANGE_STATUS_SUCCESS,
} from "../constant/TestimonialConstant";

const initialState = {
  loading: false,
  action: "TESTIMONIAL",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const TestimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_TESTIMONIAL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_TESTIMONIAL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_TESTIMONIAL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_TESTIMONIAL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_TESTIMONIAL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_TESTIMONIAL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_TESTIMONIAL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_TESTIMONIAL_SUCCESS:
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
    case UPDATE_TESTIMONIAL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case TESTIMONIAL_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case TESTIMONIAL_CHANGE_STATUS_SUCCESS:
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
    case TESTIMONIAL_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_TESTIMONIAL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_TESTIMONIAL_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_TESTIMONIAL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default TestimonialReducer;
