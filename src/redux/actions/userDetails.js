
import {database} from '../../services/firebase';
const userDetailsRef= database.ref('userDetails');

export const USER_DETAILS_SAVE_REQUEST='USER_DETAILS_SAVE_REQUEST';
export const USER_DETAILS_SAVE_SUCCESS='USER_DETAILS_SAVE_SUCCESS';
export const USER_DETAILS_SAVE_FAILED='USER_DETAILS_SAVE_FAILED';

export const USER_DETAILS_FETCH_REQUEST='USER_DETAILS_FETCH_REQUEST';
export const USER_DETAILS_FETCH_SUCCESS='USER_DETAILS_FETCH_SUCCESS';
export const USER_DETAILS_FETCH_FAILED='USER_DETAILS_FETCH_FAILED';

export const SAVE_USER_DETAILS_ID_SUCCESS='SAVE_USER_DETAILS_ID_SUCCESS';
export const SAVE_USER_DETAILS_ID_FAILED='SAVE_USER_DETAILS_ID_FAILED';

export const FETCH_USER_DETAIL_REQUEST='FETCH_USER_DETAIL_REQUEST';
export const FETCH_USER_DETAIL_SUCCESS='FETCH_USER_DETAIL_SUCCESS';
export const FETCH_USER_DETAIL_FAILED='FETCH_USER_DETAIL_FAILED';

export const saveUserDetails=(userDetails)=>(dispatch)=>{
  dispatch({type:USER_DETAILS_SAVE_REQUEST});
  try{
    userDetailsRef.push(userDetails);
    dispatch({type:USER_DETAILS_SAVE_SUCCESS,payload:true})
  }catch(err){
    dispatch({type:USER_DETAILS_SAVE_FAILED})
  }
}

export const getUserDetailList=()=>(dispatch)=>{
  dispatch({type:USER_DETAILS_FETCH_REQUEST});
  try{
    userDetailsRef.on('value',(snapShot)=>{
      const data=snapShot.val();
      const userDetailsList=[];
      for(let id in data){
        userDetailsList.push({...data[id],id})
      }
      dispatch({type:USER_DETAILS_FETCH_SUCCESS,payload:userDetailsList})
    });
  }catch(err){
    dispatch({type:USER_DETAILS_FETCH_FAILED})
  }
}
export const saveUserDetailsId=(userDetailsId)=>(dispatch)=>{
  try{
    window.localStorage.setItem('userDetailsId',userDetailsId);
    dispatch({type:SAVE_USER_DETAILS_ID_SUCCESS,payload:userDetailsId})
  }catch(err){
    dispatch({type:SAVE_USER_DETAILS_ID_FAILED})
  }
}

export const getUserDetails=()=>(dispatch)=>{
  dispatch({type:FETCH_USER_DETAIL_REQUEST});
  try{
    const userDetailsId=window.localStorage.getItem('userDetailsId');
    database.ref('/userDetails/' + userDetailsId).once('value').then((snapshot) => {
      const userDetails = (snapshot.val() && snapshot.val()) || {};
      dispatch({type:FETCH_USER_DETAIL_SUCCESS,payload:userDetails})
    });
  }catch(err){
    dispatch({type:FETCH_USER_DETAIL_FAILED})
  }
}