import {config} from '../../config';
const {API_BASE_URL}=config;

export const PRODUCT_LIST_REQUEST='PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS='PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_FAILED='PRODUCT_LIST_FAILED';
export const PRODUCT_PAGE_NUMBER_UPDATE='PRODUCT_PAGE_NUMBER_UPDATE';

export const  getProducts=(category)=>(dispatch)=>{
    console.log(category);
    dispatch({type:PRODUCT_LIST_REQUEST});
    const API_URL = `${API_BASE_URL}products/category/${category}`;
    fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch({type:PRODUCT_LIST_SUCCESS,payload:responseJson});
    })
    .catch((err) => {
      dispatch({type:PRODUCT_LIST_FAILED,payload:err});
    });
}
export const updatePageNumber=(pageNumber)=>(dispatch)=>{
  dispatch({type:PRODUCT_PAGE_NUMBER_UPDATE,payload:pageNumber});
}