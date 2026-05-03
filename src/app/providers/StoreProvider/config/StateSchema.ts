import { AxiosInstance } from 'axios';
import { FaqSchema } from 'entities/Faq';
import { ServiceSchema } from 'features/Services';

export interface StateSchema {
    services: ServiceSchema;
    faq: FaqSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig {
    extra: ThunkExtraArg;
    state: StateSchema;
}
