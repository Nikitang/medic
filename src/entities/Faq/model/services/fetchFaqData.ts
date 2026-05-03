import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Faq } from '../types/faqSchema';

export const fetchFaqData = createAsyncThunk<Array<Faq>, void, ThunkConfig>(
    'services/fetchFaqData',
    async (_, { extra, rejectWithValue }) => {
        const { api } = extra;

        try {
            const response = await api.get<Array<Faq>>('/faq');

            if (!Array.isArray(response.data)) {
                return rejectWithValue('Invalid data format');
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('Error');
        }
    },
);
