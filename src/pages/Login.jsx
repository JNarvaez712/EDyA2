import React, {useState} from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(name);
        navigate('/dashboard');
    }

    return (
        <div className='login-page'>
            <h2>Inicio de sesión</h2>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Nombre de usuario' 
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    )
}

export default Login;