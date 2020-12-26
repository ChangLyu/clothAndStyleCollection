import { ADD_TODO, UPDATE_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO } from "./todoActionTypes";

let nextTodoId = 0;
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
});

export const updateTodoAction = (id, value) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: id,
            value: value
        }
    }
};
export const deleteTodoAction = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: id
        }
    }
};

export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    payload: { id }
})

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: { filter }
})