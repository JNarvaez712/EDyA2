import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { addTodo, deleteTodo, toggleTodo } from "../store/todoSlice";

export const TodoApp = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = (newTodo) => {
        dispatch(addTodo(newTodo));
    };

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    const handleToggleTodo = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

    return (
        <>
            <h1>Tareas: {todos.length} - <small>Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDeleteTodo} handleToggle={handleToggleTodo}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    )
}