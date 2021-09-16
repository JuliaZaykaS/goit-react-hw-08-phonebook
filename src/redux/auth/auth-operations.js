import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { tokenForFetch } from '../../services/contacts-api';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    // console.log(credentials);
    try {
      const { data } = await axios.post('/users/signup', credentials);
      tokenForFetch.set(data.token);
      // console.log(data);
      return data;
    } catch (error) {
        // console.log(error);
        // console.log(thunkAPI);
      return thunkAPI.rejectWithValue(error.message);
    //   return 'The username or password you entered is incorrect';
    }
  },
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    tokenForFetch.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    tokenForFetch.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  // console.log(thunkAPI);
  // console.log(state);
  const persistToken = state.auth.token;
  // const persistToken = state.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  tokenForFetch.set(persistToken);
  try {
    const { data } = await axios.get('/users/current');
    // await axios.get('/users/current');
    // const contacts = await axios.get('/contacts');
    return data;
    // console.log(data);
    // console.log(contacts);
    // return contacts.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, logIn, logOut, getCurrentUser };
