import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginPasswordError = (state: StateSchema) =>
    state.login.errors?.passwordError;
