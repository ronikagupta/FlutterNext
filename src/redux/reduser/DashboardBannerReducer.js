import {
  ADD_DASHBOARDBANNER_FAIL,
  ADD_DASHBOARDBANNER_SUCCESS,
  ADD_DASHBOARDBANNER_REQUEST,
  DELETE_DASHBOARDBANNER_REQUEST,
  DELETE_DASHBOARDBANNER_SUCCESS,
  GETDETAIL_DASHBOARDBANNER_REQUEST,
  GETDETAIL_DASHBOARDBANNER_FAIL,
  GETDETAIL_DASHBOARDBANNER_SUCCESS,
  UPDATE_DASHBOARDBANNER_FAIL,
  UPDATE_DASHBOARDBANNER_SUCCESS,
  UPDATE_DASHBOARDBANNER_REQUEST,
  DELETE_DASHBOARDBANNER_FAIL,
  GETALL_DASHBOARDBANNER_FAIL,
  GETALL_DASHBOARDBANNER_SUCCESS,
  GETALL_DASHBOARDBANNER_REQUEST,
  DASHBOARDBANNER_CHANGE_STATUS_FAIL,
  DASHBOARDBANNER_CHANGE_STATUS_REQUEST,
  DASHBOARDBANNER_CHANGE_STATUS_SUCCESS,
} from "../constant/DashboardBannerConstant";

const initialState = {
  loading: false,
  action: "DASHBOARDBANNER",
  result: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const DashboardBannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_DASHBOARDBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_DASHBOARDBANNER_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_DASHBOARDBANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_DASHBOARDBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_DASHBOARDBANNER_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_DASHBOARDBANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_DASHBOARDBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_DASHBOARDBANNER_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_DASHBOARDBANNER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_DASHBOARDBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_DASHBOARDBANNER_SUCCESS:
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
    case UPDATE_DASHBOARDBANNER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DASHBOARDBANNER_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DASHBOARDBANNER_CHANGE_STATUS_SUCCESS:
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
    case DASHBOARDBANNER_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_DASHBOARDBANNER_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_DASHBOARDBANNER_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_DASHBOARDBANNER_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default DashboardBannerReducer;
