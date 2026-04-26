import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { servicesReducer } from 'features/Services/model/slice/servicesSlice';
import { $api } from 'shared/api/api';

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore({
        reducer: { services: servicesReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    });
};

export const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
