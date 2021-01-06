import {
  ORDERS_SAVE_FAILED,
  ORDERS_SAVE_SUCCESS,
  ORDERS_SAVE_REQUEST,
  ORDERS_FETCH_FAILED,
  ORDERS_FETCH_SUCCESS,
  ORDERS_FETCH_REQUEST,
  REMOVE_CART_ITEMS_FAILED,
  REMOVE_CART_ITEMS_SUCCESS,
  RAZOR_PAY_ORDERS_SAVE_FAILED,
  RAZOR_PAY_ORDERS_SAVE_SUCCESS,
  RAZOR_PAY_ORDERS_SAVE_REQUEST
} from '../actions/orders';

const initialState = {
  orderList: [],
  loading: false,
  saved:false,
  successMessage:'Order placed successfully',
  message: 'We are unable to save order details!',
  cartClearMessage: 'We are unable to clear cart details!',
  removed:false,
  razorPayOrder:{}
};
export const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_SAVE_REQUEST:
      return { ...state, loading: true, message: null };
    case ORDERS_SAVE_SUCCESS:
      return { ...state, loading: false, saved:action.payload,message: initialState.successMessage};
    case ORDERS_SAVE_FAILED:
      return { ...state, loading: false, message: initialState.message };
    case ORDERS_FETCH_REQUEST:
      return { ...state, loading: true, message: null };
    case ORDERS_FETCH_SUCCESS:
      return { ...state, loading: false, orderList:action.payload};
    case ORDERS_FETCH_FAILED:
      return { ...state, loading: false, message: initialState.message };
    case REMOVE_CART_ITEMS_SUCCESS:
      return { ...state, loading: false, removed:action.payload};
    case REMOVE_CART_ITEMS_FAILED:
      return { ...state, loading: false, message: initialState.cartClearMessage };
    case RAZOR_PAY_ORDERS_SAVE_REQUEST:
      return { ...state, loading: true, message: null };
    case RAZOR_PAY_ORDERS_SAVE_SUCCESS:
      return { ...state, loading: false, razorPayOrder:action.payload};
    case RAZOR_PAY_ORDERS_SAVE_FAILED:
      return { ...state, loading: false, message: initialState.message };
    default:
      return { ...state };
  }
};
