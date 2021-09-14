import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducers';
// import authSlice from './auth/auth-slice';
import authReducer  from './auth/auth-slice';

// console.log(authReducer);

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    // auth: authSlice,
  },
});

export { store };
