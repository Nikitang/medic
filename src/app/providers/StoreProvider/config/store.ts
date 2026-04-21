import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { servicesReducer } from 'features/Services/model/slice/servicesSlice';

export const createReduxStore = () => {
    return configureStore<StateSchema>({
        reducer: { services: servicesReducer },
        devTools: __IS_DEV__,
    });
};

export const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
