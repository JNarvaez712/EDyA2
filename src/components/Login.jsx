import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
        login(username);
    }

    return (
        <div className="login-page">
            <h2>Login</h2>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" 
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    )
}

export default Login;