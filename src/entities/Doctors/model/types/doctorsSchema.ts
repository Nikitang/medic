export interface Doctor {
    id: string;
    fullName: string;
    photo: string;
    specialization: string;
}

export interface DoctorsSchema {
    data?: Array<Doctor>;
}
