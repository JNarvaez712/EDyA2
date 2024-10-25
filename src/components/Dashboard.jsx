import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { username, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/')
    }

    return (
        <div className='dashboard-page'>
            <h2>Panel de control</h2>
            <p>Bienvenido, {username}</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
}

export default Dashboard;