import React, { useEffect, useReducer, useState } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import MainLayout from '../../components/layout/MainLayout';
import { loginReducer } from '../../redux/reducers';
import { AppContext } from '../../redux/store';
import { auth } from '../../services/firebase';

const SOURCE='home';

export default function Home() {
  
  const [state, dispatch] = useReducer(loginReducer);
  const [userName, setUserName] = useState('');

  const dispatchStatus= ({displayName, email}) => {
    dispatch({ type: 'LOG_IN', data: {displayName: displayName, email}});
  }
  useEffect(() => {
    auth.onAuthStateChanged(async (userIdentity) => {
      if(userIdentity && userName !== userIdentity.displayName) {
        dispatchStatus({displayName: userIdentity.displayName, email: userIdentity.email})
        setUserName(userIdentity.displayName)
      }
    })
  },[userName]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
    <MainLayout source={SOURCE}>
      <Dashboard />
    </MainLayout>
    </AppContext.Provider>
  );
}
