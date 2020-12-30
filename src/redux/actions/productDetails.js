
import {config} from '../../config';
const {API_BASE_URL}=config;

export const PRODUCT_DETAILS_FETCH_REQUEST='PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_FETCH_SUCCESS='PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FETCH_FAILED='PRODUCT_DETAILS_FAILED';

export const getProductDetails=(id)=>(dispatch)=>{
  const API_URL = `${API_BASE_URL}products/${id}`;
  dispatch({type:PRODUCT_DETAILS_FETCH_REQUEST});
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({type:PRODUCT_DETAILS_FETCH_SUCCESS,payload:responseJson});
    })
    .catch((err) => {
      dispatch({type:PRODUCT_DETAILS_FETCH_FAILED,message:err});
    });
}