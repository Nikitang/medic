import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Doctor, DoctorsSchema } from '../../types/doctorsSchema';

export const fetchReviewsData = createAsyncThunk<
    Array<Doctor>,
    void,
    ThunkConfig
>('services/fetchDoctorsData', async (_, { extra, rejectWithValue }) => {
    const { api } = extra;

    try {
        const response = await api.get<Array<Doctor>>('/doctors');

        if (!Array.isArray(response.data)) {
            return rejectWithValue('Invalid data format');
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('Error');
    }
});
