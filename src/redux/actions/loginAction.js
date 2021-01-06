import { auth } from "../../services/firebase";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const logIn = () => (dispatch) => {
  auth.onAuthStateChanged(async (userIdentity) => {
      if(userIdentity) {
        window.localStorage.setItem("isLoggedIn", 'yes');
        dispatch({
            type: LOG_IN,
            data: {
              displayName: userIdentity.displayName,
              email: userIdentity.email,
            },
          });
      }
  });
};

export const isUserLoggedIn = () => {
  return window.localStorage.getItem("isLoggedIn");
}
export const logOut = () => (dispatch) => {
  window.localStorage.clear();

  auth.signOut();
  dispatch({ type: LOG_OUT, data: {} });
};

export const isUserVisitingForTheFirstTime = () => {
  const visit = window.localStorage.getItem("visit");
  if(!visit) {
    return true;
  } else {
    return false;
  }
}

export const setUserVisit = () => {
  window.localStorage.setItem("visit", 'yes');
  return true
}
