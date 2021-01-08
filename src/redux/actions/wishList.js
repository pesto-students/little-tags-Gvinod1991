export const FETCH_WISH_LIST = "FETCH_WISH_LIST";
export const UPDATE_WISH_LIST = "UPDATE_WISH_LIST";

export const getWishList = () => (dispatch) => {
  let wishList = JSON.parse(window.localStorage.getItem("myWishList"));
  if(!wishList) {
    wishList = [];
  }
  dispatch({
    type: FETCH_WISH_LIST,
    payload: wishList,
  });
};

export const updateWishList = (id) => (dispatch) => {
  if(id) {
    dispatch({
      type: UPDATE_WISH_LIST,
      payload: id.toString(),
    });
  }
};
