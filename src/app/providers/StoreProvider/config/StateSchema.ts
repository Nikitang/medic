import { AxiosInstance } from 'axios';
import { FaqSchema } from 'entities/Faq';
import { ReviewsSchema } from 'entities/Reviews/model/types/reviewsSchema';
import { UserSchema } from 'entities/User/model/types/userSchema';
import { LoginSchema } from 'features/Login';
import { RegistrationSchema } from 'features/Registration';
import { ServiceSchema } from 'features/Services';

export interface StateSchema {
    services: ServiceSchema;
    faq: FaqSchema;
    login: LoginSchema;
    registration: RegistrationSchema;
    reviews: ReviewsSchema;
    user: UserSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig {
    extra: ThunkExtraArg;
    state: StateSchema;
}
