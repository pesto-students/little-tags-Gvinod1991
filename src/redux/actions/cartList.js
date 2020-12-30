export const CART_LIST_FETCH='CART_LIST_FETCH_REQUEST';
export const CART_LIST_UPDATE='CART_LIST_UPDATE';
export const CART_LIST_REMOVE_ITEM='CART_LIST_REMOVE_ITEM';
export const CART_LIST_REMOVE_ALL='CART_LIST_REMOVE_ALL';
export const CART_LIST_ALTER='CART_LIST_ALTER';
export const ADD_TO_CART='ADD_TO_CART';

export const getCartList=()=>(dispatch)=>{
  dispatch({type:CART_LIST_FETCH});
}

export const addToCart=(item, quantity)=>(dispatch)=>{
    console.log(item, quantity)
    dispatch({type:ADD_TO_CART, payload: {item, quantity}});
}

export const updateCartList=(item)=>(dispatch)=>{
    dispatch({type:CART_LIST_UPDATE, payload: item});
  }

  
export const removeItemCartList=(item)=>(dispatch)=>{
    dispatch({type:CART_LIST_REMOVE_ITEM, payload: item});
}

export const removeAllItemsInCart=()=>(dispatch)=>{
    dispatch({type:CART_LIST_REMOVE_ALL});
}

export const alterNumberOfItemsInCart=(item, isIncreased)=>(dispatch)=>{
    dispatch({type:CART_LIST_ALTER, payload: {item, isIncreased}});
}
