import { registrationReducer, registrationActions } from './registrationSlice';
import { RegistrationSchema } from '../types/registrationSchema';

describe('registrationSlice', () => {
    const initialState: RegistrationSchema = {
        name: '',
        surname: '',
        lastname: '',
        email: '',
        password: '',
        isLoading: false,
        errors: {
            nameError: '',
            surnameError: '',
            lastnameError: '',
            emailError: '',
            passwordError: '',
        },
    };

    test('should return initial state', () => {
        const state = registrationReducer(undefined, { type: '' });
        expect(state).toEqual(initialState);
    });

    test('should handle setName', () => {
        const state = registrationReducer(
            initialState,
            registrationActions.setName('Иван'),
        );
        expect(state.name).toBe('Иван');
    });

    test('should handle setSurname', () => {
        const state = registrationReducer(
            initialState,
            registrationActions.setSurname('Иванов'),
        );
        expect(state.surname).toBe('Иванов');
    });

    test('should handle setLastname', () => {
        const state = registrationReducer(
            initialState,
            registrationActions.setLastname('Иванович'),
        );
        expect(state.lastname).toBe('Иванович');
    });

    test('should handle setEmail', () => {
        const state = registrationReducer(
            initialState,
            registrationActions.setEmail('test@example.com'),
        );
        expect(state.email).toBe('test@example.com');
    });

    test('should handle setPassword', () => {
        const state = registrationReducer(
            initialState,
            registrationActions.setPassword('secure123'),
        );
        expect(state.password).toBe('secure123');
    });

    test('should handle setRegistrationErrors with partial errors', () => {
        const errors = { emailError: 'Неверный email' };
        const state = registrationReducer(
            initialState,
            registrationActions.setRegistrationErrors(errors),
        );
        expect(state?.errors?.emailError).toBe('Неверный email');
        expect(state?.errors?.nameError).toBe('');
    });

    test('should handle setRegistrationErrors with full errors', () => {
        const errors = {
            nameError: 'Обязательное поле',
            surnameError: 'Обязательное поле',
            lastnameError: 'Обязательное поле',
            emailError: 'Неверный email',
            passwordError: 'Слишком короткий',
        };
        const state = registrationReducer(
            initialState,
            registrationActions.setRegistrationErrors(errors),
        );
        expect(state.errors).toEqual(errors);
    });

    test('should merge errors correctly', () => {
        const initialWithError = {
            ...initialState,
            errors: {
                ...initialState.errors,
                nameError: 'Ошибка имени',
            },
        };

        const newErrors = { emailError: 'Ошибка email' };
        const state = registrationReducer(
            initialWithError,
            registrationActions.setRegistrationErrors(newErrors),
        );

        expect(state?.errors?.nameError).toBe('Ошибка имени');
        expect(state?.errors?.emailError).toBe('Ошибка email');
    });
});
