import {
  ADD_USER_DETAIL_FAIL,
  ADD_USER_DETAIL_REQUEST,
  ADD_USER_DETAIL_SUCCESS,
  DELETE_USER_DETAIL_FAIL,
  DELETE_USER_DETAIL_REQUEST,
  DELETE_USER_DETAIL_SUCCESS,
  GET_ALL_USER_DETAIL_FAIL,
  GET_ALL_USER_DETAIL_REQUEST,
  GET_ALL_USER_DETAIL_SUCCESS,
  GET_SINGLE_USER_DETAIL_FAIL,
  GET_SINGLE_USER_DETAIL_REQUEST,
  GET_SINGLE_USER_DETAIL_SUCCESS,
  UPDATE_USER_DETAIL_FAIL,
  UPDATE_USER_DETAIL_REQUEST,
  UPDATE_USER_DETAIL_SUCCESS,
  USER_DETAIL_CHANGE_STATUS_FAIL,
  USER_DETAIL_CHANGE_STATUS_REQUEST,
  USER_DETAIL_CHANGE_STATUS_SUCCESS,
} from "../constant/UserDetailsConstant";

const initialState = {
  loading: false,
  action: "User Details",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const UserDetailsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_ALL_USER_DETAIL_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_ALL_USER_DETAIL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_USER_DETAIL_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_USER_DETAIL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_USER_DETAIL_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_USER_DETAIL_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_USER_DETAIL_SUCCESS:
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
    case UPDATE_USER_DETAIL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case USER_DETAIL_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case USER_DETAIL_CHANGE_STATUS_SUCCESS:
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
    case USER_DETAIL_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GET_SINGLE_USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_SINGLE_USER_DETAIL_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GET_SINGLE_USER_DETAIL_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default UserDetailsReduser;
