import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appoint, AppointmentsSchema } from '../types/appointmentsSchema';
import { fetchAppointmentsData } from '../services/fetchAppointmentsData/fetchAppointmentsData';

const initialState: AppointmentsSchema = {
    data: undefined,
};

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchAppointmentsData.fulfilled,
                (state, action: PayloadAction<Array<Appoint>>) => {
                    state.data = action.payload;
                },
            )
            .addCase(fetchAppointmentsData.rejected, (_, action) => {
                console.error('rejected:', action.payload, action.error);
            });
    },
});

export const { actions: appointmentsActions } = appointmentsSlice;

export const { reducer: appointmentsReducer } = appointmentsSlice;
