import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducers';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export { store };
