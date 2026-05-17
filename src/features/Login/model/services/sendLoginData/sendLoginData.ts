import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameProps {
    email: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    LoginSchema,
    LoginByUsernameProps,
    ThunkConfig
>(
    'login/loginByUsername',
    async ({ email, password }, { extra, rejectWithValue, dispatch }) => {
        const { api } = extra;
        try {
            const response = await api.post<LoginSchema>('/login', {
                email,
                password,
            });

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('error');
        }
    },
);
