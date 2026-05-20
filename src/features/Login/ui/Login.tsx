import { Text, TextColors } from 'shared/ui/Text/Text';
import styles from './Login.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { loginActions } from '../model/slice/loginSlice';
import { useSelector } from 'react-redux';
import { getLoginEmail } from '../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginPassword } from '../model/selectors/getLoginPassword/getLoginPassword';
import { sendLoginData } from '../model/services/sendLoginData/sendLoginData';
import { getLoginEmailError } from '../model/selectors/getLoginEmailError/getLoginEmailError';
import { getLoginPasswordError } from '../model/selectors/getLoginPasswordError/getLoginPasswordError';
import { validateLoginData } from '../model/services/validateLoginData/validateLoginData';

interface LoginProps {
    className?: string;
}

const LoginComponent = ({ className }: LoginProps) => {
    const dispatch = useAppDispatch();

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);

    const emailError = useSelector(getLoginEmailError);
    const passwordError = useSelector(getLoginPasswordError);

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(loginActions.setEmail(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onClickLogin = useCallback(async () => {
        const fields = { email, password };
        const errors = validateLoginData(fields);

        dispatch(loginActions.setLoginErrors(errors));

        const hasErrors = Object.values(errors).some(Boolean);
        if (!hasErrors) {
            await dispatch(sendLoginData(fields));
        }
    }, [dispatch, email, password]);

    return (
        <div className={classNames(styles.login, {}, [className])}>
            <Text
                className={styles.title}
                title={'Вход'}
                color={TextColors.BG}
            />
            <div className={styles.username}>
                <Text
                    className={styles.formText}
                    text={'Почта'}
                    color={TextColors.BG}
                />
                <Input
                    value={email}
                    onChange={onChangeEmail}
                    placeholder={'Введите почту'}
                    errorText={emailError}
                />
            </div>
            <div className={styles.password}>
                <Text
                    className={styles.formText}
                    text={'Пароль'}
                    color={TextColors.BG}
                />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder={'Введите пароль'}
                    type="password"
                    errorText={passwordError}
                />
            </div>

            <Button
                onClick={onClickLogin}
                className={styles.submitLogin}
                theme={ButtonTheme.CLEAR}
            >
                Войти
            </Button>
        </div>
    );
};

export const Login = memo(LoginComponent);
