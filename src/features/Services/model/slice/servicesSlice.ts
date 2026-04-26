import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service, ServiceSchema } from '../types/servicesSchema';
import { fetchServicesData } from '../services/fetchServicesData';

const initialState: ServiceSchema = {
    data: undefined,
};

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchServicesData.fulfilled,
                (state, action: PayloadAction<Array<Service>>) => {
                    console.log('action', action.payload);

                    state.data = action.payload;
                },
            )
            .addCase(fetchServicesData.rejected, (state, action) => {
                console.error('rejected:', action.payload, action.error);
            });
    },
});

export const { actions: servicesActions } = servicesSlice;

export const { reducer: servicesReducer } = servicesSlice;
