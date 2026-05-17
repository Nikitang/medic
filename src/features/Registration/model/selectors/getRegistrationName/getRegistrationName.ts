import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRegistrationName = (state: StateSchema) =>
    state.registration.name;
