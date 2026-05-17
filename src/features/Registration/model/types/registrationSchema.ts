export interface RegistrationSchema {
    name: string;
    surname: string;
    lastname: string;
    email: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
