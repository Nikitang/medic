import { AxiosInstance } from 'axios';
import { ServiceSchema } from 'features/Services';

export interface StateSchema {
    services: ServiceSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig {
    extra: ThunkExtraArg;
    state: StateSchema;
}
