export const FETCH_CART_COUNT = "FETCH_CART_COUNT";
export const FETCH_TOTAL_PRICE = "FETCH_TOTAL_PRICE";
export const FETCH_CART_DETAILS = "FETCH_CART_DETAILS";
export const UPDATE_CART_DETAILS = "UPDATE_CART_DETAILS";

export const getCartData = () => (dispatch) => {
  const cartData = JSON.parse(localStorage.getItem("myCart"));
  dispatch({
    type: FETCH_CART_DETAILS,
    payload: cartData,
  });
};

export const updateCartData = (data) => (dispatch) => {
  localStorage.setItem("myCart", JSON.stringify(data));
  if(data) {
    dispatch({
      type: FETCH_CART_DETAILS,
      payload: data,
    });
  }
};

export const getCartCount = () => (dispatch) => {
  const count = localStorage.getItem("myCart")
    ? Object.keys(JSON.parse(localStorage.getItem("myCart"))).length
    : 0;
  dispatch({
    type: FETCH_CART_COUNT,
    payload: count,
  });
};

export const getTotalPrice = (price) => (dispatch) => {
  if(price) {
    dispatch({
      type: FETCH_TOTAL_PRICE,
      payload: price,
    });
  }
  else {
    const cart = JSON.parse(localStorage.getItem("myCart"));
    if(cart) {
      const priceList = {};
      Object.keys(cart).map(key => priceList['' + key] =cart[key].totalPrice);
      dispatch({
        type: FETCH_TOTAL_PRICE,
        payload: priceList,
      });
    }
    
  }
  
};
