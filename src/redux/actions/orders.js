import {database} from '../../services/firebase';
import {config} from '../../config';
import dotenv from 'dotenv';
dotenv.config();

const ordersRef= database.ref('orders');

const {RAZOR_PAY_API_BASE_URL}=config;

export const ORDERS_SAVE_REQUEST='ORDERS_SAVE_REQUEST';
export const ORDERS_SAVE_SUCCESS='ORDERS_SAVE_SUCCESS';
export const ORDERS_SAVE_FAILED='ORDERS_SAVE_FAILED';

export const ORDERS_FETCH_REQUEST='ORDERS_FETCH_REQUEST';
export const ORDERS_FETCH_SUCCESS='ORDERS_FETCH_SUCCESS';
export const ORDERS_FETCH_FAILED='ORDERS_FETCH_FAILED';

export const REMOVE_CART_ITEMS_SUCCESS='REMOVE_CART_ITEMS_SUCCESS';
export const REMOVE_CART_ITEMS_FAILED='REMOVE_CART_ITEMS_FAILED';

export const RAZOR_PAY_ORDERS_SAVE_REQUEST='RAZOR_PAY_ORDERS_SAVE_REQUEST';
export const RAZOR_PAY_ORDERS_SAVE_SUCCESS='RAZOR_PAY_ORDERS_SAVE_SUCCESS';
export const RAZOR_PAY_ORDERS_SAVE_FAILED='RAZOR_PAY_ORDERS_SAVE_FAILED';


export const saveOrderDetails=(orderDetails)=>(dispatch)=>{
  dispatch({type:ORDERS_SAVE_REQUEST});
  try{
    ordersRef.push(orderDetails);
    dispatch({type:ORDERS_SAVE_SUCCESS,payload:true})
  }catch(err){
    dispatch({type:ORDERS_SAVE_FAILED})
  }
}

export const getOrders=(userEmail)=>(dispatch)=>{
  dispatch({type:ORDERS_FETCH_REQUEST});
  try{
    ordersRef.orderByChild('userEmail').equalTo(userEmail).on('value',(snapShot)=>{
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
    dispatch({type:REMOVE_CART_ITEMS_SUCCESS,removed:true});
    dispatch({type:ORDERS_SAVE_SUCCESS,payload:false})
  }catch(err){
    dispatch({type:REMOVE_CART_ITEMS_FAILED})
  }
}

export const createRazorPayOrder=(data)=>(dispatch)=>{
  dispatch({type:RAZOR_PAY_ORDERS_SAVE_REQUEST});
  const requestOptions = {
    method: 'POST',

    headers: {  'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Basic ' + window.btoa(process.env.RAZOR_PAY_KEY + ":" + process.env.RAZOR_PAY_SECRET) },
    body: JSON.stringify(data)
  };
  const API_URL = `${RAZOR_PAY_API_BASE_URL}v1/orders`;
  fetch(API_URL,requestOptions)
  .then((response) => response.json())
  .then((responseJson) => {
    dispatch({type:RAZOR_PAY_ORDERS_SAVE_SUCCESS,payload:responseJson})
  })
  .catch((err) => {
    dispatch({type:RAZOR_PAY_ORDERS_SAVE_FAILED})
  });
}
