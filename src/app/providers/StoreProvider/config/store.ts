import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { servicesReducer } from 'features/Services/model/slice/servicesSlice';
import { $api } from 'shared/api/api';
import { faqReducer } from 'entities/Faq/model/slice/faqSlice';
import { loginReducer } from 'features/Login';
import { registrationReducer } from 'features/Registration';
import { reviewsReducer } from 'entities/Reviews/model/slice/reviewsSlice';

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore({
        reducer: {
            services: servicesReducer,
            faq: faqReducer,
            login: loginReducer,
            registration: registrationReducer,
            reviews: reviewsReducer,
        },
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
