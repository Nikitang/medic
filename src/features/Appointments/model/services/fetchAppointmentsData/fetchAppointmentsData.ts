// fetchAppointmentsData.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Appoint } from '../../types/appointmentsSchema';

interface FetchAppointmentsProps {
    email: string;
}

export const fetchAppointmentsData = createAsyncThunk<
    Array<Appoint>,
    FetchAppointmentsProps,
    ThunkConfig
>(
    'appointments/fetchAppointmentsData',
    async ({ email }, { extra, rejectWithValue }) => {
        const { api } = extra;

        try {
            const response = await api.post<Array<Appoint>>('/appointments', {
                email,
            });

            if (!Array.isArray(response.data)) {
                return rejectWithValue('Invalid data format');
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('Error fetching appointments');
        }
    },
);
