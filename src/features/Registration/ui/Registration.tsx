import { Text, TextColors } from 'shared/ui/Text/Text';
import styles from './Registration.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface RegistrationProps {
    className?: string;
}

export const Registration = ({ className }: RegistrationProps) => {
    return (
        <div className={classNames(styles.registration, {}, [className])}>
            <Text
                className={styles.title}
                title={'Регистрация'}
                color={TextColors.BG}
            />
            <div className={styles.name}>
                <Text text={'Имя'} color={TextColors.BG} />
                <Input />
            </div>
            <div className={styles.surname}>
                <Text text={'Фамилия'} color={TextColors.BG} />
                <Input />
            </div>
            <div className={styles.lastname}>
                <Text text={'Отчество'} color={TextColors.BG} />
                <Input />
            </div>
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
