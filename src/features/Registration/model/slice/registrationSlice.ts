import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    RegistrationErrors,
    RegistrationSchema,
} from '../types/registrationSchema';

const initialState: RegistrationSchema = {
    name: '',
    surname: '',
    lastname: '',
    email: '',
    password: '',
    isLoading: false,
    errors: {
        nameError: '',
        surnameError: '',
        lastnameError: '',
        emailError: '',
        passwordError: '',
    },
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setSurname: (state, action: PayloadAction<string>) => {
            state.surname = action.payload;
        },
        setLastname: (state, action: PayloadAction<string>) => {
            state.lastname = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },

        setRegistrationErrors: (
            state,
            action: PayloadAction<RegistrationErrors>,
        ) => {
            state.errors = { ...state.errors, ...action.payload };
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: registrationActions } = registrationSlice;

export const { reducer: registrationReducer } = registrationSlice;
