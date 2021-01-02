
import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { product } from './product';
import { productDetails } from './productDetails';
import { productList } from './productList';
import { cartDetails } from './CartDetails'
export default combineReducers({
  loginReducer,
  product,
  productDetails,
  productList,
  cartDetails
});