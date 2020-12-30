import {
    PRODUCT_LIST_FETCH_REQUEST,
    PRODUCT_LIST_FETCH_SUCCESS,
    PRODUCT_LIST_FETCH_FAILED,
  } from '../actions/productList';
  
  const initialState = {
    productList: [],
    isLoaded: false,
  };
  export const productList = (state = initialState, action) => {
    switch (action.type) {
      case PRODUCT_LIST_FETCH_REQUEST:
        return { ...state, isLoaded: false, message: null };
      case PRODUCT_LIST_FETCH_SUCCESS:
        return { ...state, productList: action.payload, isLoaded: true };
      case PRODUCT_LIST_FETCH_FAILED:
        return { ...state, isLoaded: false, message: initialState.message };
      default:
        return { ...state };
    }
  };
  