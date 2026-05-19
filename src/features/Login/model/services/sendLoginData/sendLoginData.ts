import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface sendLoginDataProps {
    email: string;
    password: string;
}

export const sendLoginData = createAsyncThunk<
    User,
    sendLoginDataProps,
    ThunkConfig
>(
    'login/sendLoginData',
    async ({ email, password }, { extra, rejectWithValue, dispatch }) => {
        const { api } = extra;
        try {
            const response = await api.post<User>('/login', {
                email,
                password,
            });

            if (!response.data) throw new Error();

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data),
            );

            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('error');
        }
    },
);
