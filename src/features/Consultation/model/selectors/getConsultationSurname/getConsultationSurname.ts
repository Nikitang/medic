import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getConsultationSurname = (state: StateSchema) =>
    state.consultation.data?.surname;
