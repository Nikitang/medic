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
        builder.addCase(
            fetchServicesData.fulfilled,
            (state, action: PayloadAction<Array<Service>>) => {
                state.data = action.payload;
            },
        );
    },
});

export const { actions: servicesActions } = servicesSlice;

export const { reducer: servicesReducer } = servicesSlice;
