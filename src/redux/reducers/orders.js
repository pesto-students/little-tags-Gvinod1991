import {
  ORDERS_SAVE_FAILED,
  ORDERS_SAVE_SUCCESS,
  ORDERS_SAVE_REQUEST
} from '../actions/orders';

const initialState = {
  orderList: [],
  loading: false,
  saved:false,
  successMessage:'Order placed successfully',
  message: 'We are unable to save order details!',
};
export const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_SAVE_REQUEST:
      return { ...state, loading: true, message: null };
    case ORDERS_SAVE_SUCCESS:
      return { ...state, loading: false, saved:action.payload,message: initialState.successMessage};
    case ORDERS_SAVE_FAILED:
      return { ...state, loading: false, message: initialState.message };
    default:
      return { ...state };
  }
};
