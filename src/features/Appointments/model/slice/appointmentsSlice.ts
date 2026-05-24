import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appoint, AppointmentsSchema } from '../types/appointmentsSchema';
import { fetchAppointmentsData } from '../services/fetchAppointmentsData/fetchAppointmentsData';
import { deleteAppointmentData } from '../services/deleteAppointmentData/deleteAppointmentData';

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
            })
            .addCase(deleteAppointmentData.fulfilled, (state, action) => {
                const deletedId = action.payload;
                if (state.data) {
                    state.data = state.data.filter(
                        (app) => app.id !== deletedId,
                    );
                }
            });
    },
});

export const { actions: appointmentsActions } = appointmentsSlice;

export const { reducer: appointmentsReducer } = appointmentsSlice;
