import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const likeSlice = createSlice({
    name: 'like',
    initialState: {
        likes: 0
    },
    reducers: {
        doLikes: (state) => {
            state.likes++;
        }
    }
});

export const { doLikes } = likeSlice.actions;

export const likesSelector = (state) => state.like.likes;

export default likeSlice.reducer;