import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Doctor } from '../../types/doctorsSchema';
import { Appoint } from 'features/Appointments';

interface sendAppointDataProps {
    user: string;
    doctor: Doctor;
    time: string;
}

export const sendAppointData = createAsyncThunk<
    string,
    sendAppointDataProps,
    ThunkConfig
>(
    'appoint/sendAppointData',
    async ({ user, doctor, time }, { extra, rejectWithValue }) => {
        const { api, navigate } = extra;

        try {
            const response = await api.post<Appoint>('/appoint', {
                user,
                doctor,
                time,
            });

            if (!response.data) throw new Error();

            navigate?.('/appointments');

            return '';
        } catch (error) {
            console.error(error);
            return rejectWithValue('error');
        }
    },
);
