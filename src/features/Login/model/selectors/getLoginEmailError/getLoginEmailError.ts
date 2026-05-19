import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginEmailError = (state: StateSchema) =>
    state.login.errors?.emailError;
