import { AxiosInstance } from 'axios';
import { FaqSchema } from 'entities/Faq';
import { LoginSchema } from 'features/Login';
import { RegistrationSchema } from 'features/Registration';
import { ServiceSchema } from 'features/Services';

export interface StateSchema {
    services: ServiceSchema;
    faq: FaqSchema;
    login: LoginSchema;
    registration: RegistrationSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig {
    extra: ThunkExtraArg;
    state: StateSchema;
}
