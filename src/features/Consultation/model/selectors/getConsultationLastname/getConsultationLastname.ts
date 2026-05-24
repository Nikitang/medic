import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getConsultationLastname = (state: StateSchema) =>
    state.consultation.data?.lastname;
