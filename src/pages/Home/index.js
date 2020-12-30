import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from '../../components/dashboard/Dashboard';
import MainLayout from '../../components/layout/MainLayout';
import { logIn } from '../../redux/actions/validation';

const SOURCE='home';

export default function Home() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(logIn());
  },[dispatch]);

  return (
    <MainLayout source={SOURCE}>
      <Dashboard />
    </MainLayout>
  );
}
