import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationLastname = (state: StateSchema) =>
    state.registration.lastname;
