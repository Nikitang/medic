export interface RegistrationErrors {
    nameError?: string;
    surnameError?: string;
    lastnameError?: string;
    emailError?: string;
    passwordError?: string;
}

export interface RegistrationSchema {
    name: string;
    surname: string;
    lastname: string;
    email: string;
    password: string;
    isLoading?: boolean;
    errors?: RegistrationErrors;
}
