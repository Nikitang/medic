import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getConsultationEmail = (state: StateSchema) =>
    state.consultation.data?.email;
