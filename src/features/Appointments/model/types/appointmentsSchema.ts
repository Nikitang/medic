import { Doctor } from 'entities/Doctors';

export interface Appoint {
    id: string;
    email?: string;
    doctor?: Doctor;
    time?: string;
}

export interface AppointmentsSchema {
    data?: Array<Appoint>;
}
