import {
  ADD_BOOKAPPOINTMENT_FAIL,
  ADD_BOOKAPPOINTMENT_SUCCESS,
  DELETE_BOOKAPPOINTMENT_REQUEST,
  DELETE_BOOKAPPOINTMENT_SUCCESS,
  GETALL_BOOKAPPOINTMENT_SUCCESS,
  GETDETAIL_BOOKAPPOINTMENT_REQUEST,
  GETDETAIL_BOOKAPPOINTMENT_FAIL,
  UPDATE_BOOKAPPOINTMENT_FAIL,
  UPDATE_BOOKAPPOINTMENT_SUCCESS,
  ADD_BOOKAPPOINTMENT_REQUEST,
  DELETE_BOOKAPPOINTMENT_FAIL,
  GETALL_BOOKAPPOINTMENT_FAIL,
  GETALL_BOOKAPPOINTMENT_REQUEST,
  GETDETAIL_BOOKAPPOINTMENT_SUCCESS,
  UPDATE_BOOKAPPOINTMENT_REQUEST,
  BOOKAPPOINTMENT_CHANGE_STATUS_FAIL,
  BOOKAPPOINTMENT_CHANGE_STATUS_REQUEST,
  BOOKAPPOINTMENT_CHANGE_STATUS_SUCCESS,
} from "../constant/BookAppointmentConstant";

const initialState = {
  loading: false,
  action: "BookAppointment",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const BookAppointmentReduser = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_BOOKAPPOINTMENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_BOOKAPPOINTMENT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_BOOKAPPOINTMENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_BOOKAPPOINTMENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_BOOKAPPOINTMENT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_BOOKAPPOINTMENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_BOOKAPPOINTMENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_BOOKAPPOINTMENT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_BOOKAPPOINTMENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_BOOKAPPOINTMENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_BOOKAPPOINTMENT_SUCCESS:
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
    case UPDATE_BOOKAPPOINTMENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case BOOKAPPOINTMENT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case BOOKAPPOINTMENT_CHANGE_STATUS_SUCCESS:
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
    case BOOKAPPOINTMENT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_BOOKAPPOINTMENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_BOOKAPPOINTMENT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_BOOKAPPOINTMENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default BookAppointmentReduser;
