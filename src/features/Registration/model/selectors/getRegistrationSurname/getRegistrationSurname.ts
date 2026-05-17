import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationSurname = (state: StateSchema) =>
    state.registration.surname;
