import { Text, TextColors } from 'shared/ui/Text/Text';
import styles from './Registration.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getRegistrationName } from '../model/selectors/getRegistrationName/getRegistrationName';
import { getRegistrationSurname } from '../model/selectors/getRegistrationSurname/getRegistrationSurname';
import { getRegistrationLastname } from '../model/selectors/getRegistrationLastname/getRegistrationLastname';
import { getRegistrationEmail } from '../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { memo, useCallback } from 'react';
import { registrationActions } from '../model/slice/registrationSlice';
import { firstLetterUp } from 'shared/utils/firstLetterUp';

interface RegistrationProps {
    className?: string;
}

const RegistrationComponent = ({ className }: RegistrationProps) => {
    const dispatch = useAppDispatch();

    const name = useSelector(getRegistrationName);
    const surname = useSelector(getRegistrationSurname);
    const lastname = useSelector(getRegistrationLastname);
    const email = useSelector(getRegistrationEmail);
    const password = useSelector(getRegistrationPassword);

    const onChangeName = useCallback(
        (value: string) => {
            dispatch(registrationActions.setName(firstLetterUp(value).trim()));
        },
        [dispatch],
    );
    const onChangeSurname = useCallback(
        (value: string) => {
            dispatch(
                registrationActions.setSurname(firstLetterUp(value).trim()),
            );
        },
        [dispatch],
    );
    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(
                registrationActions.setLastname(firstLetterUp(value).trim()),
            );
        },
        [dispatch],
    );
    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(registrationActions.setEmail(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(registrationActions.setPassword(value));
        },
        [dispatch],
    );

    return (
        <div className={classNames(styles.registration, {}, [className])}>
            <Text
                className={styles.title}
                title={'Регистрация'}
                color={TextColors.BG}
            />
            <div className={styles.name}>
                <Text text={'Имя'} color={TextColors.BG} />
                <Input
                    value={name}
                    onChange={onChangeName}
                    placeholder={'Введите имя'}
                />
            </div>
            <div className={styles.surname}>
                <Text text={'Фамилия'} color={TextColors.BG} />
                <Input
                    value={surname}
                    onChange={onChangeSurname}
                    placeholder={'Введите фамилию'}
                />
            </div>
            <div className={styles.lastname}>
                <Text text={'Отчество'} color={TextColors.BG} />
                <Input
                    value={lastname}
                    onChange={onChangeLastname}
                    placeholder={'Введите отчество'}
                />
            </div>
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
                />
            </div>
            <Button className={styles.submit} theme={ButtonTheme.CLEAR}>
                Войти
            </Button>
        </div>
    );
};

export const Registration = memo(RegistrationComponent);
