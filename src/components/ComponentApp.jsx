import React from "react";
import { useFetch } from "../hooks/useFetch";
import { MultipleCustomHooks } from "./MultipleCustomHooks";

const ComponentApp = () => {
    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/6');

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (hasError) {
        return <div>Error: {hasError.message}</div>
    }

    return (
        <div>
            <MultipleCustomHooks />
        </div>  
    )
}

export default ComponentApp;