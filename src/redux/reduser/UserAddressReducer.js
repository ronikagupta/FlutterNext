import {
  ADD_USER_ADDRESS_FAIL,
  ADD_USER_ADDRESS_REQUEST,
  ADD_USER_ADDRESS_SUCCESS,
  DELETE_USER_ADDRESS_FAIL,
  DELETE_USER_ADDRESS_REQUEST,
  DELETE_USER_ADDRESS_SUCCESS,
  GET_ALL_USER_ADDRESS_FAIL,
  GET_ALL_USER_ADDRESS_REQUEST,
  GET_ALL_USER_ADDRESS_SUCCESS,
  GET_SINGLE_USER_ADDRESS_FAIL,
  GET_SINGLE_USER_ADDRESS_REQUEST,
  GET_SINGLE_USER_ADDRESS_SUCCESS,
  UPDATE_USER_ADDRESS_FAIL,
  UPDATE_USER_ADDRESS_REQUEST,
  UPDATE_USER_ADDRESS_SUCCESS,
  USER_ADDRESS_CHANGE_STATUS_FAIL,
  USER_ADDRESS_CHANGE_STATUS_REQUEST,
  USER_ADDRESS_CHANGE_STATUS_SUCCESS,
} from "../constant/UserAddressConstant";

const initialState = {
  loading: false,
  action: "User Address",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const UserAddressReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_USER_ADDRESS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_USER_ADDRESS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_USER_ADDRESS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_USER_ADDRESS_SUCCESS:
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
    case UPDATE_USER_ADDRESS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case USER_ADDRESS_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_ADDRESS_CHANGE_STATUS_SUCCESS:
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
    case USER_ADDRESS_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_USER_ADDRESS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_USER_ADDRESS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default UserAddressReduser;
