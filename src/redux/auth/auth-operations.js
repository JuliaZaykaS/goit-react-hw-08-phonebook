import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tokenForFetch } from '../../services/contacts-api';

const register = createAsyncThunk(
    'auth/register',
    async credentials => {
        console.log(credentials);
        try {
            const { data } = await axios.post('/users/signup', credentials);
            tokenForFetch.set(data.token)
            console.log(data);
            return data;

        } catch (error) {

        }
    }
);

const logIn = createAsyncThunk(
    'auth/login',
    async credentials => {
        try {
            const { data } = await axios.post('/users/login', credentials);
             tokenForFetch.set(data.token)
            return data;

        } catch (error) {

        }
    },
);
const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await axios.post('/users/logout');
            tokenForFetch.unset();
           

        } catch (error) {

        }
    },
);

export { register, logIn, logOut };
