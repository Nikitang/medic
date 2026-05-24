import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getConsultationData = (state: StateSchema) =>
    state.consultation.data;
