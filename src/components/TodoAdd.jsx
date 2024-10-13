import React, { useState } from "react";

export const TodoAdd = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const onInputChange = (event) => {
        setDescription(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description.trim(),
            done: false,
        };

        handleAddTodo(newTodo);
        setDescription('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Nuevo TODO"
                value={description}
                onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>   
    )
}