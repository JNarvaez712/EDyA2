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
        case 'UPDATE_LAST_VISITED_PAGE':
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
        console.log('Logging in:', username)
        dispatch({ type: 'LOGIN', payload: { username } });
        const lastPage = localStorage.getItem('lastVisitedPage') || '/';
        navigate(lastPage);
    } 

    const logout = () => {
        console.log('Logging out')
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    }

    const setLastPage = (page) => {
        console.log('Setting last page:', page)
        dispatch({ type: 'UPDATE_LAST_VISITED_PAGE', payload: page });
        localStorage.setItem('lastVisitedPage', page);
    }

    return (
        <AuthContext.Provider value={{ ...state, login, logout, setLastPage }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
