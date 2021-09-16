import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  postContact,
  deleteContact,
  tokenForFetch
} from '../../services/contacts-api';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  // async (_, { rejectWithValue }) => {
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      const contacts = await getContacts();
      
      // console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      const contact = await postContact(name, number);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { fetchContacts, addContacts, deleteContacts };
