import {
  LOG_IN,
  LOG_OUT,
} from '../actions/loginAction';

const initialState = {
  isLoggedIn: false,
  userDetails: {},
};


export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true,
        userDetails: action.data,
      };

    case LOG_OUT:
      return {
        isLoggedIn: false,
        userDetails: {},
      };

    default:
      return state;
  }
};
