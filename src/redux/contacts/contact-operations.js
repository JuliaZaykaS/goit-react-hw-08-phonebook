import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  tokenForFetch
} from '../../services/contacts-api';
// import {
//   getContacts,
//   postContact,
//   deleteContact,
//   tokenForFetch
// } from '../../services/contacts-api';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  // async (_, { rejectWithValue }) => {
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      // const contacts = await getContacts();
      const contacts = await axios.get('/contacts');
      
      // console.log(contacts);
      // return contacts;
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    console.log(name, number);
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    tokenForFetch.set(persistToken);
    try {
      // const contact = await postContact(name, number);
      const contact = await axios.post('/contacts', {
    name,
    number,
  });
  console.log(contact);
      return contact.data;
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
      // await deleteContact(id);
      // const contact = await axios.delete(`/contacts/${id}`);
      await axios.delete(`/contacts/${id}`);
      return id;
      // return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export { fetchContacts, addContacts, deleteContacts };
