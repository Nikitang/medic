import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getFaqData = (state: StateSchema) => state?.faq?.data;
