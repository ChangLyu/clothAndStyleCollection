import React from "react";
import AddTodo from "./AddTodo";
import './TodoApp.scss';
import TodoList from "./TodoList";
import VisibilityFilters from "./VisibilityFilters";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <VisibilityFilters />
            <TodoList />

        </div>
    );
}
