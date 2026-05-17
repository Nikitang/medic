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

interface LoginProps {
    className?: string;
}

const LoginComponent = ({ className }: LoginProps) => {
    const dispatch = useAppDispatch();

    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);

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

    return (
        <div className={classNames(styles.login, {}, [className])}>
            <Text
                className={styles.title}
                title={'Вход'}
                color={TextColors.BG}
            />
            <div className={styles.username}>
                <Text text={'Почта'} color={TextColors.BG} />
                <Input
                    value={email}
                    onChange={onChangeEmail}
                    placeholder={'Введите почту'}
                />
            </div>
            <div className={styles.password}>
                <Text text={'Пароль'} color={TextColors.BG} />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder={'Введите пароль'}
                    type="password"
                />
            </div>
            <Button className={styles.submitLogin} theme={ButtonTheme.CLEAR}>
                Войти
            </Button>
        </div>
    );
};

export const Login = memo(LoginComponent);
