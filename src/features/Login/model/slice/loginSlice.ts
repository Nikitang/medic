import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginErrors, LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false,
    //errors
    errors: {
        emailError: '',
        passwordError: '',
    },
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

        setLoginErrors: (state, action: PayloadAction<LoginErrors>) => {
            state.errors = { ...state.errors, ...action.payload };
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
