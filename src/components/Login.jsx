import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(username);
        navigate('/dashboard');
    }

    return (
        <div className="login-page">
            <h2>Login</h2>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de usuario" 
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    )
}

export default Login;