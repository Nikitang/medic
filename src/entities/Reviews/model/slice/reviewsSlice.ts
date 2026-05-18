import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReviewsData } from '../services/fetchReviewsData';
import { Reviews, ReviewsSchema } from '../types/reviewsSchema';

const initialState: ReviewsSchema = {
    data: undefined,
};

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchReviewsData.fulfilled,
                (state, action: PayloadAction<Array<Reviews>>) => {
                    state.data = action.payload;
                },
            )
            .addCase(fetchReviewsData.rejected, (_, action) => {
                console.error('rejected:', action.payload, action.error);
            });
    },
});

export const { actions: reviewsActions } = reviewsSlice;

export const { reducer: reviewsReducer } = reviewsSlice;
