import {database} from '../../services/firebase';
const ordersRef= database.ref('orders');
export const ORDERS_SAVE_REQUEST='ORDERS_SAVE_REQUEST';
export const ORDERS_SAVE_SUCCESS='ORDERS_SAVE_SUCCESS';
export const ORDERS_SAVE_FAILED='ORDERS_SAVE_FAILED';

export const saveOrderDetails=(orderDetails)=>(dispatch)=>{
  dispatch({type:ORDERS_SAVE_REQUEST});
  try{
    ordersRef.push(orderDetails);
    dispatch({type:ORDERS_SAVE_SUCCESS,payload:true})
  }catch(err){
    dispatch({type:ORDERS_SAVE_FAILED})
  }
}