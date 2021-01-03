import {
  FETCH_CART_COUNT,
  FETCH_TOTAL_PRICE,
  FETCH_CART_DETAILS,
  UPDATE_CART_DETAILS,
} from "../actions/cartDetails";

const initialState = {
  count: 0,
  totalPriceList: {},
  cartData: {},
};

export const cartDetails = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_DETAILS:
      return {
        ...state,
        cartData: action.payload,
      };
    case UPDATE_CART_DETAILS:
      return {
        ...state,
        cartData: action.payload,
      };
    case FETCH_CART_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    case FETCH_TOTAL_PRICE:
      return {
        ...state,
        totalPriceList: action.payload,
      };
    default:
      return state;
  }
};
