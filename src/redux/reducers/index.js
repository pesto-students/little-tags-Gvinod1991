
import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { product } from './product';
import { productDetails } from './productDetails';
import { productList } from './productList';
import { cartList } from './cartList';

export default combineReducers({
  loginReducer,
  product,
  productDetails,
  productList,
  cartList
});