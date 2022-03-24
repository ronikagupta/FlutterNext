import {
  ADD_COVID_FAIL,
  ADD_COVID_REQUEST,
  ADD_COVID_SUCCESS,
  DELETE_COVID_SUCCESS,
  DELETE_COVID_REQUEST,
  DELETE_COVID_FAIL,
  GET_ALL_COVID_FAIL,
  GET_ALL_COVID_REQUEST,
  GET_ALL_COVID_SUCCESS,
  GET_SINGLE_COVID_FAIL,
  GET_SINGLE_COVID_REQUEST,
  GET_SINGLE_COVID_SUCCESS,
  UPDATE_COVID_FAIL,
  UPDATE_COVID_REQUEST,
  UPDATE_COVID_SUCCESS,
  COVID_CHANGE_STATUS_FAIL,
  COVID_CHANGE_STATUS_REQUEST,
  COVID_CHANGE_STATUS_SUCCESS,
} from "../constant/CovidConstant";
const initialState = {
  loading: false,
  action: "COVID",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const CovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COVID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_COVID_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_COVID_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_COVID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_COVID_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_COVID_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_COVID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_COVID_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_COVID_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_COVID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_COVID_SUCCESS:
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
    case UPDATE_COVID_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case COVID_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case COVID_CHANGE_STATUS_SUCCESS:
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
    case COVID_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_COVID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_COVID_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_COVID_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default CovidReducer;
