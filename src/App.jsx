import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  const isAuthenticated = useMemo(() => !!user, [user]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Bienevenido, {user.email}</h1>
          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;