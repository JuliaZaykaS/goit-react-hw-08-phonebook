import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";

const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            user: { name: null, email: null },
            token: null,
            isLoggedIn: false,
        },
        extraReducers: {
            [register.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
        },
    },
);

export default authSlice.reducer;