import { loginReducer, loginActions } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    const initialState: LoginSchema = {
        email: '',
        password: '',
        isLoading: false,
        errors: {
            emailError: '',
            passwordError: '',
        },
    };

    test('should return initial state', () => {
        const state = loginReducer(undefined, { type: '' });
        expect(state).toEqual(initialState);
    });

    test('should handle setEmail', () => {
        const state = loginReducer(
            initialState,
            loginActions.setEmail('user@example.com'),
        );
        expect(state.email).toBe('user@example.com');
    });

    test('should handle setPassword', () => {
        const state = loginReducer(
            initialState,
            loginActions.setPassword('mySecurePassword123'),
        );
        expect(state.password).toBe('mySecurePassword123');
    });

    test('should handle setLoginErrors with partial errors', () => {
        const errors = { emailError: 'Неверный формат email' };
        const state = loginReducer(
            initialState,
            loginActions.setLoginErrors(errors),
        );
        expect(state?.errors?.emailError).toBe('Неверный формат email');
        expect(state?.errors?.passwordError).toBe('');
    });

    test('should handle setLoginErrors with full errors', () => {
        const errors = {
            emailError: 'Email обязателен',
            passwordError: 'Пароль обязателен',
        };
        const state = loginReducer(
            initialState,
            loginActions.setLoginErrors(errors),
        );
        expect(state.errors).toEqual(errors);
    });

    test('should merge errors correctly', () => {
        const stateWithExistingError = {
            ...initialState,
            errors: {
                ...initialState.errors,
                emailError: 'Старая ошибка email',
            },
        };

        const newErrors = { passwordError: 'Новый пароль ошибки' };
        const state = loginReducer(
            stateWithExistingError,
            loginActions.setLoginErrors(newErrors),
        );

        expect(state?.errors?.emailError).toBe('Старая ошибка email');
        expect(state?.errors?.passwordError).toBe('Новый пароль ошибки');
    });
});
