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
            // user: { name: '', email: '', password: '' },
            token: null,
            isLoggedIn: false,
            isGetCurrentUser: false,
            error: null,
            isLoading: false,
        },
        extraReducers: {
            [register.pending](state, action) {
                state.error = null;
                state.isLoading = true;
            },
            [register.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            },
            [register.rejected](state, action) {
                state.error = action.payload;
                state.isLoading = false;
            },
            [logIn.pending](state, action) {
                state.isLoading = true;
                state.error = null;
            },
            [logIn.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            },
            [logIn.rejected](state, action) {
                state.error = action.payload;
                state.isLoading = false;
            },
            [logOut.pending](state, action) {
                state.isLoading = true;
                state.error = null;
            },
            [logOut.fulfilled](state, action) {
                state.user = { name: null, email: null, password: null }
                state.token = null;
                state.isLoggedIn = false;
                state.isLoading = false;
            },
            [logOut.rejected](state, action) {
                state.error = action.payload;
                state.isLoading = false;
            },
            [getCurrentUser.pending](state, action) {
                state.isFetchingCurrentUser = true;
                state.isLoading = true;
                state.error = null;
            },
            [getCurrentUser.fulfilled](state, action) {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isFetchingCurrentUser = false;
                state.isLoading = false;
            },
            [getCurrentUser.rejected](state, action) {
                state.isFetchingCurrentUser = false;
                // state.error = action.payload;
                state.isLoading = false;
            },
        },
    },
);
// console.log(authSlice.reducer);
export default authSlice.reducer;
// export { reducer };
// export { authSlice.reducer };
// export default authSlice;