import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { product } from './product';
import { productDetails } from './productDetails';
export default combineReducers({
  loginReducer,
  product,
  productDetails,
});
