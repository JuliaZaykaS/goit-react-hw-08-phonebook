import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducers';
import authReducer from './auth/auth-slice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    auth: authReducer,
  },
});

export { store };
