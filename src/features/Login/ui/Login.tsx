import { Text, TextColors } from 'shared/ui/Text/Text';
import styles from './Login.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LoginProps {
    className?: string;
}

export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.login, {}, [className])}>
            <Text
                className={styles.title}
                title={'Вход'}
                color={TextColors.BG}
            />
            <div className={styles.username}>
                <Text text={'Почта'} color={TextColors.BG} />
                <Input />
            </div>
            <div className={styles.password}>
                <Text text={'Пароль'} color={TextColors.BG} />
                <Input />
            </div>
            <Button className={styles.submit} theme={ButtonTheme.CLEAR}>
                Войти
            </Button>
        </div>
    );
};
