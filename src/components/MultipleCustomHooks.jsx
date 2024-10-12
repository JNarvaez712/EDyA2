import React from 'react';
import {useCounter} from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
            <h1>MultipleCustomHooks</h1>
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
                ) : (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{data.name}</p>
                        <img src={data.sprites.front_default} alt={data.name} />
                        <footer className='blockquote-footer'>Altura: {data.height}, Peso: {data.weight}</footer>
                    </blockquote>
                )
            }

            <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
        </>
    )
}