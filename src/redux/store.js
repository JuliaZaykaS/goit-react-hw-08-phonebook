import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducers';
// import authSlice from './auth/auth-slice';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // auth: authSlice,
    auth: authReducer,
  },
});

export { store };
