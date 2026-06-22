import { createSlice } from "@reduxjs/toolkit";

// create a slice
const likeSlice = createSlice({
    // name of the slice
    name: 'like',
    // initial state
    initialState: {
        likes: 0
    },
    // reducers
    reducers: {
        doLikes: (state, action) => {
            // state.likes++;
            state.likes = state.likes + 1;
        },
        doDislikes: (state, action) => {
            state.likes = state.likes - 1;
        }
    }
});

// export the reducers
export const { doLikes, doDislikes } = likeSlice.actions;

// export the selector to select only the likes state
export const likeSelector = (state) => state.like.likes;

// export the reducer
export default likeSlice.reducer;