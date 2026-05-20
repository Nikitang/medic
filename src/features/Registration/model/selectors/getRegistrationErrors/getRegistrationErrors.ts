import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationErrors = (state: StateSchema) =>
    state.registration.errors;
