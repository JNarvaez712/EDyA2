import React from "react";
import { useAuth } from "../context/authContext";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementBy } from "../components/counterSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {username, logout} = useAuth();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="dashboard-page">
            <h2>Panel de control</h2>
            {username ? (
                <>
                    <p>Bienvenido, {username}</p>
                    <p>Contador: {count}</p>
                    <button onClick={() => dispatch(decrement())}>Decrementar</button>
                    <button onClick={() => dispatch(incrementBy(5))}>Incrementar por 5</button>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </>
            ) : (
                <p>No estas logueado</p>
            )}   
        </div>
    )
}

export default Dashboard;