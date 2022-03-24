import {
  ADD_SUBCATEGORY_FAIL,
  ADD_SUBCATEGORY_SUCCESS,
  ADD_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  GETALL_SUBCATEGORY_SUCCESS,
  GETDETAIL_SUBCATEGORY_REQUEST,
  GETDETAIL_SUBCATEGORY_FAIL,
  UPDATE_SUBCATEGORY_FAIL,
  UPDATE_SUBCATEGORY_SUCCESS,
  DELETE_SUBCATEGORY_FAIL,
  GETALL_SUBCATEGORY_FAIL,
  GETALL_SUBCATEGORY_REQUEST,
  GETDETAIL_SUBCATEGORY_SUCCESS,
  UPDATE_SUBCATEGORY_REQUEST,
  SUBCATEGORY_CHANGE_STATUS_FAIL,
  SUBCATEGORY_CHANGE_STATUS_REQUEST,
  SUBCATEGORY_CHANGE_STATUS_SUCCESS,
  // SUBCATEGORY_GETBYMAIN_CATID_REQUEST,
  // SUBCATEGORY_GETBYMAIN_CATID_SUCCESS,
  // SUBCATEGORY_GETBYMAIN_CATID_FAIL,
  SUBCATEGORY_GETBY_CATID_REQUEST,
  SUBCATEGORY_GETBY_CATID_SUCCESS,
  SUBCATEGORY_GETBY_CATID_FAIL,
} from "../constant/SubCategory";

const initialState = {
  loading: false,
  action: "SubCategory",
  result: [],
  resultCatId: [],
  response: {},
  singledata: [],
  msg: "",
  error: "",
};

const SubCategoryreduser = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETALL_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        result: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETALL_SUBCATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case SUBCATEGORY_GETBY_CATID_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case SUBCATEGORY_GETBY_CATID_SUCCESS:
      return {
        ...state,
        resultCatId: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case SUBCATEGORY_GETBY_CATID_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case DELETE_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case DELETE_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        result: state.result.filter(
          (item) => item.id !== action.result.data.id
        ),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case DELETE_SUBCATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case ADD_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        result: state.result.concat(action.result.data),
        response: action.result.msg,
        loading: action.payload,
        msg: action.msg,
      };
    case ADD_SUBCATEGORY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case UPDATE_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_SUBCATEGORY_SUCCESS:
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
    case UPDATE_SUBCATEGORY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case SUBCATEGORY_CHANGE_STATUS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case SUBCATEGORY_CHANGE_STATUS_SUCCESS:
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
    case SUBCATEGORY_CHANGE_STATUS_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };

    case GETDETAIL_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GETDETAIL_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        singledata: action.result.data,
        loading: action.payload,
        msg: action.msg,
      };
    case GETDETAIL_SUBCATEGORY_FAIL:
      return {
        error: action.error,
        loading: action.payload,
        msg: action.msg,
      };
    // case SUBCATEGORY_GETBYMAIN_CATID_REQUEST:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    // case SUBCATEGORY_GETBYMAIN_CATID_SUCCESS:
    //   return {
    //     ...state,
    //     singledata: action.result.data,
    //     loading: action.payload,
    //     msg: action.msg,
    //   };
    // case SUBCATEGORY_GETBYMAIN_CATID_FAIL:
    //   return {
    //     error: action.error,
    //     loading: action.payload,
    //     msg: action.msg,
    //   };
    // case SUBCATEGORY_GETBY_CATID_REQUEST:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    // case SUBCATEGORY_GETBY_CATID_SUCCESS:
    //   return {
    //     ...state,
    //     singledata: action.result.data,
    //     loading: action.payload,
    //     msg: action.msg,
    //   };
    // case SUBCATEGORY_GETBY_CATID_FAIL:
    //   return {
    //     error: action.error,
    //     loading: action.payload,
    //     msg: action.msg,
    //   };

    default:
      return state;
  }
};

export default SubCategoryreduser;
