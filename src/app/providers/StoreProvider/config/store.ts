import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { servicesReducer } from 'features/Services/model/slice/servicesSlice';
import { $api } from 'shared/api/api';
import { faqReducer } from 'entities/Faq/model/slice/faqSlice';

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore({
        reducer: { services: servicesReducer, faq: faqReducer },
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
