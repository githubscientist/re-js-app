import { createSlice } from "@reduxjs/toolkit";

// create a new slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        filterTodos: 'all'
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
        }
    }
});

export const { setTodos } = todoSlice.actions;

export const selectTodos = state => state.todo.todos;

export default todoSlice.reducer;