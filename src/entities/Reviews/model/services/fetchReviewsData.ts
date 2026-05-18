import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Reviews, ReviewsSchema } from '../types/reviewsSchema';

export const fetchReviewsData = createAsyncThunk<
    Array<Reviews>,
    void,
    ThunkConfig
>('services/fetchReviewsData', async (_, { extra, rejectWithValue }) => {
    const { api } = extra;

    try {
        const response = await api.get<Array<Reviews>>('/doctors');

        if (!Array.isArray(response.data)) {
            return rejectWithValue('Invalid data format');
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('Error');
    }
});
