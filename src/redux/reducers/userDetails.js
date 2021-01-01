import {
  USER_DETAILS_SAVE_REQUEST,
  USER_DETAILS_SAVE_FAILED,
  USER_DETAILS_SAVE_SUCCESS,
  USER_DETAILS_FETCH_SUCCESS,
  USER_DETAILS_FETCH_FAILED,
  USER_DETAILS_FETCH_REQUEST,
  SAVE_USER_DETAILS_ID_FAILED,
  SAVE_USER_DETAILS_ID_SUCCESS,
  FETCH_USER_DETAIL_FAILED,
  FETCH_USER_DETAIL_SUCCESS,
  FETCH_USER_DETAIL_REQUEST
} from '../actions/userDetails';

const initialState = {
  userDetailsList: [],
  loading: false,
  saved:false,
  successMessage:'Data saved successfully',
  message: 'We are unable to save user details!',
  userDetailsId:null,
  userDetail:{}
};
export const userDetails = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_SAVE_REQUEST:
      return { ...state, loading: true, message: null };
    case USER_DETAILS_SAVE_SUCCESS:
      return { ...state, loading: false, saved:action.payload,message: initialState.successMessage};
    case USER_DETAILS_SAVE_FAILED:
      return { ...state, loading: false, message: initialState.message };
    case USER_DETAILS_FETCH_REQUEST:
      return { ...state, loading: true, message: null };
    case USER_DETAILS_FETCH_SUCCESS:
      return { ...state, loading: false, userDetailsList:action.payload};
    case USER_DETAILS_FETCH_FAILED:
      return { ...state, loading: false, message: initialState.message };
    case SAVE_USER_DETAILS_ID_SUCCESS:
      return { ...state, loading: false, userDetailsId:action.payload};
    case SAVE_USER_DETAILS_ID_FAILED:
      return { ...state, loading: false};
    case FETCH_USER_DETAIL_REQUEST:
      return { ...state, loading: true, message: null };
    case FETCH_USER_DETAIL_SUCCESS:
      return { ...state, loading: false, userDetail:action.payload};
    case FETCH_USER_DETAIL_FAILED:
      return { ...state, loading: false, message: initialState.message };
    default:
      return { ...state };
  }
};
