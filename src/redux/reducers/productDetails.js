import {
  PRODUCT_DETAILS_FETCH_REQUEST,
  PRODUCT_DETAILS_FETCH_SUCCESS,
  PRODUCT_DETAILS_FETCH_FAILED,
} from '../actions/productDetails';

const initialState = {
  productDetails: {},
  loading: false,
  message: 'We are unable to fetch product details!',
};
export const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_FETCH_REQUEST:
      return { ...state, loading: true, message: null };
    case PRODUCT_DETAILS_FETCH_SUCCESS:
      return { ...state, productDetails: action.payload, loading: false };
    case PRODUCT_DETAILS_FETCH_FAILED:
      return { ...state, loading: false, message: initialState.message };
    default:
      return { ...state };
  }
};
