import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getDataServices = (state: StateSchema) => state?.services?.data;
