import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export { register };
