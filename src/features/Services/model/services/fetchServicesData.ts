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
        const responce = await api.get<ServiceSchema>('/services');

        if (!responce?.data.data) throw new Error('Error');

        return responce.data.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
