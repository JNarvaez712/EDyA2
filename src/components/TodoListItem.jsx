import React from "react";

export const TodoListItem = ({ todo, handleDelete, handleToggle}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span 
                className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}` }
                onClick={() => handleToggle(todo.id)}
                style={todo.done ? {textDecoration: 'line-through'} : { textDecoration: 'none' } && {cursor: 'pointer'}}
            >
                {todo.description}
            </span>
            <button 
                className="btn btn-danger btn-sm ml-2" 
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}