import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { username, logout } = useAuth();

    console.log('Dashboard render:', {username});

    return (
        <div className='dashboard-page'>
            <h2>Panel de control</h2>
            <p>Bienvenido, {username}</p>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    )
}

export default Dashboard;