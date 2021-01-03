export const FETCH_WISH_LIST = "FETCH_WISH_LIST";
export const UPDATE_WISH_LIST = "UPDATE_WISH_LIST";

export const getWishList = () => (dispatch) => {
  const wishList = JSON.parse(window.localStorage.getItem("myWishList"));
  dispatch({
    type: FETCH_WISH_LIST,
    payload: wishList,
  });
};

export const updateWishList = (id) => (dispatch) => {
  if(id) {
    dispatch({
      type: UPDATE_WISH_LIST,
      payload: id,
    });
  }
};
