import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getConsultationName = (state: StateSchema) =>
    state.consultation.data?.name;
