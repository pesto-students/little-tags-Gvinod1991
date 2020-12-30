import {
    ADD_TO_CART
  } from '../actions/cartList';

  const initialState = {
    cartList: {},
  };

  const populateCart = (payload, list) => {
      const {item:{ id}} = payload;
      const {item, quantity} = payload;
      const itemsInCart = Object.keys(list);

      if(itemsInCart.indexOf(id.toString()) === -1) {
        list[id] = {item, quantity};
        return list;
      }  else {
        list[id.toString()]["quantity"] += quantity;
        return list;
      }
  }
  export const cartList = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {...state , cartList: populateCart(
            action.payload,
            state.cartList
        ) };
      default:
        return { ...state };
    }
  };
  