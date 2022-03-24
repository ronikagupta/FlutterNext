import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_FAIL,
  GET_ALL_CONTACT_FAIL,
  GET_ALL_CONTACT_REQUEST,
  GET_ALL_CONTACT_SUCCESS,
  GET_SINGLE_CONTACT_FAIL,
  GET_SINGLE_CONTACT_REQUEST,
  GET_SINGLE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  CONTACT_CHANGE_STATUS_FAIL,
  CONTACT_CHANGE_STATUS_REQUEST,
  CONTACT_CHANGE_STATUS_SUCCESS,
} from "../constant/ContactConstant";
const initialState = {
  loading: false,
  action: "CONTACT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_CONTACT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_CONTACT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_CONTACT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_CONTACT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_CONTACT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_CONTACT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_CONTACT_SUCCESS:
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
    case UPDATE_CONTACT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case CONTACT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case CONTACT_CHANGE_STATUS_SUCCESS:
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
    case CONTACT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_CONTACT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_CONTACT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_CONTACT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default ContactReducer;
