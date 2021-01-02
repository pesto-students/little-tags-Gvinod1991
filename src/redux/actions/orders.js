import {database} from '../../services/firebase';
const ordersRef= database.ref('orders');

export const ORDERS_SAVE_REQUEST='ORDERS_SAVE_REQUEST';
export const ORDERS_SAVE_SUCCESS='ORDERS_SAVE_SUCCESS';
export const ORDERS_SAVE_FAILED='ORDERS_SAVE_FAILED';

export const ORDERS_FETCH_REQUEST='ORDERS_FETCH_REQUEST';
export const ORDERS_FETCH_SUCCESS='ORDERS_FETCH_SUCCESS';
export const ORDERS_FETCH_FAILED='ORDERS_FETCH_FAILED';

export const REMOVE_CART_ITEMS_SUCCESS='REMOVE_CART_ITEMS_SUCCESS';
export const REMOVE_CART_ITEMS_FAILED='REMOVE_CART_ITEMS_FAILED';

export const saveOrderDetails=(orderDetails)=>(dispatch)=>{
  dispatch({type:ORDERS_SAVE_REQUEST});
  try{
    ordersRef.push(orderDetails);
    dispatch({type:ORDERS_SAVE_SUCCESS,payload:true})
  }catch(err){
    dispatch({type:ORDERS_SAVE_FAILED})
  }
}

export const getOrders=()=>(dispatch)=>{
  dispatch({type:ORDERS_FETCH_REQUEST});
  try{
    ordersRef.on('value',(snapShot)=>{
      const data=snapShot.val();
      const ordersList=[];
      for(let id in data){
        ordersList.push({...data[id],id})
      }
      dispatch({type:ORDERS_FETCH_SUCCESS,payload:ordersList})
    });
  }catch(err){
    dispatch({type:ORDERS_FETCH_FAILED})
  }
}

export const clearCart= ()=>(dispatch)=>{
  try{
    window.localStorage.removeItem('myCart');
    dispatch({type:REMOVE_CART_ITEMS_SUCCESS,removed:true})
  }catch(err){
    dispatch({type:REMOVE_CART_ITEMS_FAILED})
  }
}