import {
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_CHANGE_STATUS_FAIL,
  USER_CHANGE_STATUS_REQUEST,
  USER_CHANGE_STATUS_SUCCESS,
  USER_IS_ADMIN_FAIL,
  USER_IS_ADMIN_REQUEST,
  USER_IS_ADMIN_SUCCESS,
  USER_IS_STAFF_FAIL,
  USER_IS_STAFF_REQUEST,
  USER_IS_STAFF_SUCCESS,
} from "../constant/UserConstant";

const initialState = {
  loading: false,
  action: "User",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const UserReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_USER_SUCCESS:
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
    case UPDATE_USER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case USER_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_CHANGE_STATUS_SUCCESS:
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
    case USER_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case USER_IS_ADMIN_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_IS_ADMIN_SUCCESS:
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
    case USER_IS_ADMIN_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case USER_IS_STAFF_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_IS_STAFF_SUCCESS:
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
    case USER_IS_STAFF_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_USER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default UserReduser;
