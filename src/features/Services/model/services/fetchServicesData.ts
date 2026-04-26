import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Service, ServiceSchema } from '../types/servicesSchema';

export const fetchServicesData = createAsyncThunk<
    Array<Service>,
    void,
    ThunkConfig
>('services/fetchServicesData', async (_, { extra, rejectWithValue }) => {
    const { api } = extra;

    try {
        const response = await api.get<Array<Service>>('/services');

        if (!Array.isArray(response.data)) {
            return rejectWithValue('Invalid data format');
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('Error');
    }
});
