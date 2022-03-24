import {
  ADD_DASHBOARDCONTENT_FAIL,
  ADD_DASHBOARDCONTENT_SUCCESS,
  ADD_DASHBOARDCONTENT_REQUEST,
  DELETE_DASHBOARDCONTENT_REQUEST,
  DELETE_DASHBOARDCONTENT_SUCCESS,
  GETDETAIL_DASHBOARDCONTENT_REQUEST,
  GETDETAIL_DASHBOARDCONTENT_FAIL,
  GETDETAIL_DASHBOARDCONTENT_SUCCESS,
  UPDATE_DASHBOARDCONTENT_FAIL,
  UPDATE_DASHBOARDCONTENT_SUCCESS,
  UPDATE_DASHBOARDCONTENT_REQUEST,
  DELETE_DASHBOARDCONTENT_FAIL,
  GETALL_DASHBOARDCONTENT_FAIL,
  GETALL_DASHBOARDCONTENT_SUCCESS,
  GETALL_DASHBOARDCONTENT_REQUEST,
  DASHBOARDCONTENT_CHANGE_STATUS_FAIL,
  DASHBOARDCONTENT_CHANGE_STATUS_REQUEST,
  DASHBOARDCONTENT_CHANGE_STATUS_SUCCESS,
} from "../constant/DashboardContentConstant";

const initialState = {
  loading: false,
  action: "DASHBOARDCONTENT",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const DashboardContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_DASHBOARDCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_DASHBOARDCONTENT_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_DASHBOARDCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_DASHBOARDCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_DASHBOARDCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_DASHBOARDCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_DASHBOARDCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_DASHBOARDCONTENT_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_DASHBOARDCONTENT_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_DASHBOARDCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_DASHBOARDCONTENT_SUCCESS:
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
    case UPDATE_DASHBOARDCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DASHBOARDCONTENT_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DASHBOARDCONTENT_CHANGE_STATUS_SUCCESS:
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
    case DASHBOARDCONTENT_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_DASHBOARDCONTENT_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_DASHBOARDCONTENT_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_DASHBOARDCONTENT_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default DashboardContentReducer;
