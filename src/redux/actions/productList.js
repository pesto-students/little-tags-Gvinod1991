
import {config} from '../../config';
const {API_BASE_URL}=config;

export const PRODUCT_LIST_FETCH_REQUEST='PRODUCT_LIST_FETCH_REQUEST';
export const PRODUCT_LIST_FETCH_SUCCESS='PRODUCT_LIST_FETCH_SUCCESS';
export const PRODUCT_LIST_FETCH_FAILED='PRODUCT_LIST_FETCH_FAILED';

export const getProductLists=()=>(dispatch)=>{
  const API_URL = `${API_BASE_URL}products`;
  dispatch({type:PRODUCT_LIST_FETCH_REQUEST});
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({type:PRODUCT_LIST_FETCH_SUCCESS,payload:responseJson});
    })
    .catch((err) => {
      dispatch({type:PRODUCT_LIST_FETCH_FAILED,message:err});
    });
}