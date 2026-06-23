import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todoServices from "../../services/todoServices";

// GET /notes
export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async (_, thunkAPI) => {
        try {
            const response = await todoServices.getTodos();
            return response.data;
        } catch (error) {
            console.log(`Error fetching todos`, error);
            return [];
        }
    }
)

// GET /todos/:id
export const fetchTodoById = createAsyncThunk(
    'todo/fetchTodoById',
    async (id, thunkAPI) => {
        try {
            const response = await todoServices.getTodoById(id);
            return response.data;
        } catch (error) {
            console.log(`Error fetching todo by id`, error);
            return {};
        }
    }
)

// create a new slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        filterTodos: 'all',
        loadingTodos: false,
        todosError: null,

        todo: {},
        loadingTodo: false,
        todoError: null
    },
    reducers: {},
    extraReducers: (builder) => {
        // fetchTodos
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loadingTodos = true;
                state.todosError = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loadingTodos = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loadingTodos = false;
                state.todos = [];
                state.todosError = action.payload || "Failed to fetch todos";
            })
        
            .addCase(fetchTodoById.pending, (state) => {
                state.loadingTodo = true;
                state.todoError = null;
            })
            .addCase(fetchTodoById.fulfilled, (state, action) => {
                state.loadingTodo = false;
                state.todo = action.payload;
            })
            .addCase(fetchTodoById.rejected, (state, action) => {
                state.loadingTodo = false;
                state.todo = {};
                state.todoError = action.payload || "Failed to fetch todo";
            })
    }
});

export const selectTodos = state => state.todo.todos;

export const selectTodo = state => state.todo.todo;

export default todoSlice.reducer;