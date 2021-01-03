
import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { product } from './product';
import { productDetails } from './productDetails';
import { productList } from './productList';
import { cartDetails } from './CartDetails';
import { userDetails } from './userDetails';
import { orders } from './orders';

export default combineReducers({
  loginReducer,
  product,
  productDetails,
  productList,
  cartDetails,
  userDetails,
  orders
});