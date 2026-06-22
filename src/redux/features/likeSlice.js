import { createSlice } from "@reduxjs/toolkit";

// create a slice
const likeSlice = createSlice({
    // name of the slice
    name: 'like',
    // initial state
    initialState: {
        likes: 0,
        dislikes: 0,
        history: []
    },
    // reducers
    reducers: {
        doLikes: (state, action) => {
            // state.likes++;
            state.likes = state.likes + 1;
            state.history.push('L');
        },
        doDislikes: (state, action) => {
            state.dislikes = state.dislikes + 1;
            state.history.push('D');
        }
    }
});

// export the reducers
export const { doLikes, doDislikes } = likeSlice.actions;

// export the selector to select only the likes state
export const likeSelector = (state) => state.like.likes;

export const dislikeSelector = (state) => state.like.dislikes;

export const historySelector = (state) => state.like.history;

// export the reducer
export default likeSlice.reducer;