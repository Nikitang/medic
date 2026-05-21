import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { servicesReducer } from 'features/Services/model/slice/servicesSlice';
import { $api } from 'shared/api/api';
import { faqReducer } from 'entities/Faq/model/slice/faqSlice';
import { loginReducer } from 'features/Login';
import { registrationReducer } from 'features/Registration';
import { reviewsReducer } from 'entities/Reviews/model/slice/reviewsSlice';
import { userReducer } from 'entities/User/model/slice/userSlice';
import { NavigateOptions, To } from 'react-router-dom';

export const createReduxStore = (
    navigate?: (to: To, options?: NavigateOptions) => void,

    initialState?: StateSchema,
) => {
    return configureStore({
        reducer: {
            services: servicesReducer,
            faq: faqReducer,
            login: loginReducer,
            registration: registrationReducer,
            reviews: reviewsReducer,
            user: userReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                        navigate,
                    },
                },
            }),
    });
};

export const store = createReduxStore();

export type AppDispatch = typeof store.dispatch;
