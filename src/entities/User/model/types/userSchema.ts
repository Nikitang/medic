import { Doctor } from 'entities/Doctors/model/types/doctorsSchema';

export interface User {
    id: string;
    name?: string;
    surname?: string;
    lastname?: string;
    email: string;
    appointments?: Array<Doctor>;
}

export interface UserSchema {
    authData?: User;
}
