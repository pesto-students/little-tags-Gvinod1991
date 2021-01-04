import {
    FETCH_WISH_LIST,
    UPDATE_WISH_LIST
  } from "../actions/wishList";
  
  const initialState = {
    wishList: [],
  };
  
  const updateWishList = (id, data) => {
      const index = data.indexOf(id);
      if(index === -1) {
          data.push(id);
      } else {
        data.splice(index, 1);
      }
    console.log(id, data);
    window.localStorage.setItem("myWishList", JSON.stringify(data));
    return data;
  }
  export const wishList = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WISH_LIST:
        return {
          ...state,
          wishList: action.payload,
        };
      case UPDATE_WISH_LIST:
        return {
          ...state,
          wishList: updateWishList(action.payload, state.wishList),
        };
      default:
        return state;
    }
  };
  