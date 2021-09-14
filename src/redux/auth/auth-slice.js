import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./auth-operations";

// const initialState= {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
// };
const authSlice = createSlice(
    {
        name: 'auth',
        // initialState,
        initialState: {
            // user: { name: null, email: null },
            user: { name: null, email: null, password: null },
            token: null,
            isLoggedIn: false,
        },
        extraReducers: {
            [register.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            [logIn.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            [logOut.fulfilled](state, action) {
                state.user = { name: null, email: null, password: null }
                state.token = null;
                state.isLoggedIn = false;
            },
        },
    },
);
// console.log(authSlice.reducer);
export default authSlice.reducer;
// export { reducer };
// export { authSlice.reducer };
// export default authSlice;