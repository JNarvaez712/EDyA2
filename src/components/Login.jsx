import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submit', username)
        login({username});
    }

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" 
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login;