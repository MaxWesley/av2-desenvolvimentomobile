import React from 'react';

import { Routes } from './routes';

import './src/services/firebase';

import { UserProvider } from './src/contexts/users'
export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  )
};
