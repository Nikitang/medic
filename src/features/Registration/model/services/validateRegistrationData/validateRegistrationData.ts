import {
    RegistrationErrors,
    RegistrationSchema,
} from '../../types/registrationSchema';

export const validateRegistrationData = (
    fields: RegistrationSchema,
): RegistrationErrors => {
    const { name, surname, lastname, email, password } = fields;

    const errors: RegistrationErrors = {};

    if (!name || name.length < 2) errors.nameError = 'Минимум 2 символа';
    if (!surname || surname.length < 2)
        errors.surnameError = 'Минимум 2 символа';
    if (!lastname || lastname.length < 2)
        errors.lastnameError = 'Минимум 2 символа';
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
        errors.emailError = 'Некорректный email';
    if (!password || password.length < 8)
        errors.passwordError = 'Минимум 8 символов';

    return errors;
};
