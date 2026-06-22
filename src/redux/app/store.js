import { configureStore } from "@reduxjs/toolkit";
import likeReducer from '../features/likeSlice';

// create a new store
const store = configureStore({
    reducer: {
        like: likeReducer
    }
});

// export the store
export default store;