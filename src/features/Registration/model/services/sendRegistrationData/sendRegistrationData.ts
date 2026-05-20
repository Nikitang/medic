import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface sendRegistrationDataProps {
    name: string;
    surname: string;
    lastname: string;
    email: string;
    password: string;
}

export const sendRegistrationData = createAsyncThunk<
    User,
    sendRegistrationDataProps,
    ThunkConfig
>(
    'registration/sendRegistrationData',
    async (
        { name, surname, lastname, email, password },
        { extra, rejectWithValue, dispatch },
    ) => {
        const { api } = extra;
        try {
            const response = await api.post<User>('/registration', {
                name,
                surname,
                lastname,
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
