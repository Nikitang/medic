import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ConsultationData,
    ConsultationsSchema,
} from '../types/consultationSchema';

const initialState: ConsultationsSchema = {
    data: {
        name: '',
        surname: '',
        lastname: '',
        email: '',
    },
};

export const consultationSlice = createSlice({
    name: 'consultation',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ConsultationData>) => {
            state.data = { ...state.data, ...action.payload };
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: consultationActions } = consultationSlice;

export const { reducer: consultationReducer } = consultationSlice;
