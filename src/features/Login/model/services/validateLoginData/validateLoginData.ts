import { LoginErrors, LoginSchema } from '../../types/loginSchema';

export const validateLoginData = (fields: LoginSchema): LoginErrors => {
    const { email, password } = fields;

    const errors: LoginErrors = {};

    if (!email || !/^\S+@\S+\.\S+$/.test(email))
        errors.emailError = 'Некорректный email';
    if (!password || password.length < 8)
        errors.passwordError = 'Минимум 8 символов';

    return errors;
};
