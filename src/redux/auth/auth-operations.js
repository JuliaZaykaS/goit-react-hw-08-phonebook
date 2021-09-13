import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenForFetch } from '../../services/contacts-api';

const register = createAsyncThunk(
    'auth/register',
    async credentials => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            return data;

        } catch (error) {

        }
    },
);
const logIn = createAsyncThunk(
    'auth/login',
    async credentials => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            return data;

        } catch (error) {

        }
    },
);
const logOut = createAsyncThunk(
    'auth/logout',
    async credentials => {
        try {
            const { data } = await axios.post('/users/logout', credentials);
            tokenForFetch.unset();
            return data;

        } catch (error) {

        }
    },
);

export { register, logIn, logOut };
