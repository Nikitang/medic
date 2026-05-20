export interface LoginErrors {
    emailError?: string;
    passwordError?: string;
}

export interface LoginSchema {
    email: string;
    password: string;
    isLoading?: boolean;
    errors?: LoginErrors;
}
