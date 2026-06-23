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

// create a new slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        filterTodos: 'all',
        loadingTodos: false,
        todosError: null
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
    }
});

export const selectTodos = state => state.todo.todos;

export default todoSlice.reducer;