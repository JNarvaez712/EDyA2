import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useCounter} from '../hooks/useCounter'
import { fetchPokemon } from '../store/pokemonSlice';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1)
    const dispatch = useDispatch();
    const { data, isLoading, hasError } = useSelector((state) => state.pokemon);

    useEffect(() => {
        dispatch(fetchPokemon(counter));
    }, [counter, dispatch]);

    return (
        <>
            <h1>Lista de Pokemones</h1>
            <hr />

            {
                isLoading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : hasError ? (
                    <div className='alert alert-danger text-center'>
                        Error: {hasError.message}
                    </div>
                ) : data ? (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{data.name}</p>
                        <img src={data.sprites.front_default} alt={data.name} />
                        <footer className='blockquote-footer'>Altura: {data.height}, Peso: {data.weight}</footer>
                    </blockquote>
                ) : null
            }

            <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
        </>
    )
}