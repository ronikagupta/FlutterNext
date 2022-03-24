import {
  ADD_SUBCATEGORYCONTENT_FAIL,
  ADD_SUBCATEGORYCONTENT_SUCCESS,
  ADD_SUBCATEGORYCONTENT_REQUEST,
  DELETE_SUBCATEGORYCONTENT_REQUEST,
  DELETE_SUBCATEGORYCONTENT_SUCCESS,
  GETDETAIL_SUBCATEGORYCONTENT_REQUEST,
  GETDETAIL_SUBCATEGORYCONTENT_FAIL,
  GETDETAIL_SUBCATEGORYCONTENT_SUCCESS,
  UPDATE_SUBCATEGORYCONTENT_FAIL,
  UPDATE_SUBCATEGORYCONTENT_SUCCESS,
  UPDATE_SUBCATEGORYCONTENT_REQUEST,
  DELETE_SUBCATEGORYCONTENT_FAIL,
  GETALL_SUBCATEGORYCONTENT_FAIL,
  GETALL_SUBCATEGORYCONTENT_SUCCESS,
  GETALL_SUBCATEGORYCONTENT_REQUEST,
  SUBCATEGORYCONTENT_CHANGE_STATUS_FAIL,
  SUBCATEGORYCONTENT_CHANGE_STATUS_REQUEST,
  SUBCATEGORYCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/SubCategoryContentConstant";

const initialState = {
  loading: false,
  action: "SUBCATEGORYCONTENT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const SubCategoryContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_SUBCATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_SUBCATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_SUBCATEGORYCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_SUBCATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_SUBCATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_SUBCATEGORYCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_SUBCATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_SUBCATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_SUBCATEGORYCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_SUBCATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_SUBCATEGORYCONTENT_SUCCESS:
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
    case UPDATE_SUBCATEGORYCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case SUBCATEGORYCONTENT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case SUBCATEGORYCONTENT_CHANGE_STATUS_SUCCESS:
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
    case SUBCATEGORYCONTENT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_SUBCATEGORYCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_SUBCATEGORYCONTENT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_SUBCATEGORYCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default SubCategoryContentReducer;
