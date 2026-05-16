import { Login } from 'features/Login';
import styles from './AuthForm.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Registration } from 'features/Registration';
import { Button } from 'shared/ui/Button/Button';

interface AuthFormProps {
    className?: string;
}

export const AuthForm = ({ className }: AuthFormProps) => {
    const [auth, setAuth] = useState<'auth' | 'register'>('auth');
    return (
        <div className={classNames(styles.AuthForm, {}, [className])}>
            <div className={styles.selectionBlock}>
                <Button
                    className={classNames(
                        styles.loginBtn,
                        { [styles.active]: auth === 'auth' },
                        [],
                    )}
                    onClick={() => setAuth('auth')}
                >
                    Вход
                </Button>
                <Button
                    className={classNames(
                        styles.registerBtn,
                        { [styles.active]: auth === 'register' },
                        [],
                    )}
                    onClick={() => setAuth('register')}
                >
                    Регистрация
                </Button>
            </div>
            {auth === 'auth' ? <Login /> : <Registration />}
        </div>
    );
};
