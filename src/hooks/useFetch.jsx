import {useEffect, useState} from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        try {
            const api = await fetch(url);
            const data = await api.json();

            setState({
                data,
                isLoading: false,
                hasError: null
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error
            });
        }    
    }

    useEffect(() => {
        setState({
            data: null,
            isLoading: true,
            hasError: null
        });
        getFetch();
    }, [url])

    return {
        ...state
    }
}