import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getReviewsData = (state: StateSchema) => state.reviews.data;
