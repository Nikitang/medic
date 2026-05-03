import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Faq, FaqSchema } from '../types/faqSchema';
import { fetchFaqData } from '../services/fetchFaqData';

const initialState: FaqSchema = {
    data: undefined,
};

export const faqSlice = createSlice({
    name: 'FAQ',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchFaqData.fulfilled,
                (state, action: PayloadAction<Array<Faq>>) => {
                    state.data = action.payload;
                },
            )
            .addCase(fetchFaqData.rejected, (_, action) => {
                console.error('rejected:', action.payload, action.error);
            });
    },
});

export const { actions: faqActions } = faqSlice;

export const { reducer: faqReducer } = faqSlice;
