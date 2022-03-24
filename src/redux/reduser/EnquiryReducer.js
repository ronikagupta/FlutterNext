import {
  ADD_ENQUIRY_FAIL,
  ADD_ENQUIRY_REQUEST,
  ADD_ENQUIRY_SUCCESS,
  DELETE_ENQUIRY_FAIL,
  DELETE_ENQUIRY_REQUEST,
  DELETE_ENQUIRY_SUCCESS,
  GET_ALL_ENQUIRY_FAIL,
  GET_ALL_ENQUIRY_REQUEST,
  GET_ALL_ENQUIRY_SUCCESS,
  GET_SINGLE_ENQUIRY_FAIL,
  GET_SINGLE_ENQUIRY_REQUEST,
  GET_SINGLE_ENQUIRY_SUCCESS,
  // ENQUIRY_CHANGE_STATUS_FAIL,
  // ENQUIRY_CHANGE_STATUS_REQUEST,
  // ENQUIRY_CHANGE_STATUS_SUCCESS,
  UPDATE_ENQUIRY_FAIL,
  UPDATE_ENQUIRY_REQUEST,
  UPDATE_ENQUIRY_SUCCESS,
} from "../constant/EnquiryConstant";

const initialState = {
  loading: false,
  action: "ENQUIRY",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const EnquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ENQUIRY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_ENQUIRY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_ENQUIRY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_ENQUIRY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_ENQUIRY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_ENQUIRY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_ENQUIRY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_ENQUIRY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_ENQUIRY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_ENQUIRY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_ENQUIRY_SUCCESS:
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
    case UPDATE_ENQUIRY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    // case ENQUIRY_CHANGE_STATUS_REQUEST:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    // case ENQUIRY_CHANGE_STATUS_SUCCESS:
    //   return {
    //     ...state,
    //     result: state.result.map((item) =>
    //       item.id === action.result.data.id ? action.result.data : item
    //     ),
    //     response: action.result.msg,
    //     singledata: [],
    //     loading: action.payload,

    //     msg: action.msg,
    //   };
    // case ENQUIRY_CHANGE_STATUS_FAIL:
    //   return {
    //     error: action.error,
    //     loading: action.payload,
    //     msg: action.msg,
    //   };

    case GET_SINGLE_ENQUIRY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_ENQUIRY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_ENQUIRY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default EnquiryReducer;
