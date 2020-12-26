import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import MainLayout from '../../components/layout/MainLayout';
const SOURCE='home';

export default function Home() {
  return (
    <MainLayout source={SOURCE}>
      <Dashboard />
    </MainLayout>
  );
}
