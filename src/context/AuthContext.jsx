import React, { createContext, useReducer, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    username: null,
    lastVisitedPage: '/',
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                username: null
            }
        case 'SET_LAST_VISITED_PAGE':
            return {
                ...state,
                lastVisitedPage: action.payload
            }
        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const navigate = useNavigate();

    const login = (username) => {
        dispatch({ type: 'LOGIN', payload: { username } });
        navigate(state.lastVisitedPage);
    } 

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    }

    const setLastVisitedPage = (page) => {
        dispatch({ type: 'SET_LAST_VISITED_PAGE', payload: page });
    }

    return (
        <AuthContext.Provider value={{ ...state, login, logout, setLastVisitedPage }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
