import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface DeleteAppointmentProps {
    appointmentId?: string;
    email?: string;
}

export const deleteAppointmentData = createAsyncThunk<
    string,
    DeleteAppointmentProps,
    ThunkConfig
>(
    'appointments/deleteAppointmentData',
    async ({ appointmentId, email }, { extra, rejectWithValue }) => {
        const { api } = extra;

        try {
            await api.delete(`/appointments/${appointmentId}`, {
                headers: {
                    Authorization: email,
                },
            });

            if (!appointmentId || !email) {
                return rejectWithValue('Недостаточно данных для удаления');
            }

            return appointmentId;
        } catch (error) {
            console.error('Delete appointment error:', error);
            return rejectWithValue('Ошибка при удалении записи');
        }
    },
);
