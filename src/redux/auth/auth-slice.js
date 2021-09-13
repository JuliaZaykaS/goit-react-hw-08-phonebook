import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";

const initialState= {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};
const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        // initialState: {
        //     user: { name: null, email: null },
        //     token: null,
        //     isLoggedIn: false,
        // },
        extraReducers: {
            [register.fulfilled](state, action) {
                console.log(state);
                console.log(action);
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
        },
    },
);

export default authSlice.reducer;
// export default authSlice;