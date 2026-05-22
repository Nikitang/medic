import { AxiosInstance } from 'axios';
import { FaqSchema } from 'entities/Faq';
import { DoctorsSchema } from 'entities/Doctors/model/types/doctorsSchema';
import { UserSchema } from 'entities/User/model/types/userSchema';
import { LoginSchema } from 'features/Login';
import { RegistrationSchema } from 'features/Registration';
import { ServiceSchema } from 'features/Services';
import { NavigateOptions, To } from 'react-router-dom';
import { AppointmentsSchema } from 'features/Appointments';

export interface StateSchema {
    services: ServiceSchema;
    faq: FaqSchema;
    login: LoginSchema;
    registration: RegistrationSchema;
    reviews: DoctorsSchema;
    user: UserSchema;
    appointments: AppointmentsSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig {
    extra: ThunkExtraArg;
    state: StateSchema;
}
