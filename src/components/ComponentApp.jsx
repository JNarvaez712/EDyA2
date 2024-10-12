import React, {useState} from "react";
import { useFetch } from "../hooks/useFetch";

const ComponentApp = () => {
    const [idCounter, setIdCounter] = useState(6);
    const url = `https://pokeapi.co/api/v2/pokemon/${idCounter}`;
    const { data, isLoading, hasError } = useFetch(url);

    const handleNext = () => {
        setIdCounter(idCounter + 1);
    }

    const handlePrevious = () => {
        if (idCounter > 1) {
            setIdCounter(idCounter - 1);
        }    
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (hasError) {
        return <h1>Error: {hasError.message}</h1>;
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>Altura: {data.height}</p>
            <p>Peso: {data.weight}</p>
            <button onClick={handlePrevious} disabled={idCounter === 1}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
        </div>
    )
}

export default ComponentApp;