import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./auth-operations";

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
            isGetCurrentUser: false,
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
            [getCurrentUser.pending](state, action) {
                state.isFetchingCurrentUser = true;
            },
            [getCurrentUser.fulfilled](state, action) {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isFetchingCurrentUser = false;
            },
            [getCurrentUser.rejected](state, action) {
                state.isFetchingCurrentUser = false;
            },
        },
    },
);
// console.log(authSlice.reducer);
export default authSlice.reducer;
// export { reducer };
// export { authSlice.reducer };
// export default authSlice;