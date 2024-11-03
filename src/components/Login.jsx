import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../redux/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleEmailLogin = () => {
    dispatch(loginWithEmail(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleEmailLogin} disabled={loading}>Iniciar sesión con Email</button>
      <button onClick={handleGoogleLogin} disabled={loading}>Iniciar sesión con Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;