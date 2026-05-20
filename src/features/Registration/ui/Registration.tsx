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
import { getRegistrationErrors } from '../model/selectors/getRegistrationErrors/getRegistrationErrors';
import { sendRegistrationData } from '../model/services/sendRegistrationData/sendRegistrationData';
import { validateRegistrationData } from '../model/services/validateRegistrationData/validateRegistrationData';

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

    const errors = useSelector(getRegistrationErrors);

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

    const onClickRegistration = useCallback(async () => {
        const fields = { name, surname, lastname, email, password };
        const errors = validateRegistrationData(fields);

        dispatch(registrationActions.setRegistrationErrors(errors));

        const hasErrors = Object.values(errors).some(Boolean);
        if (!hasErrors) {
            await dispatch(sendRegistrationData(fields));
        }
    }, [dispatch, name, surname, lastname, email, password]);

    return (
        <div className={classNames(styles.registration, {}, [className])}>
            <Text
                className={styles.title}
                title={'Регистрация'}
                color={TextColors.BG}
            />
            <div className={styles.name}>
                <Text
                    className={styles.formText}
                    text={'Имя'}
                    color={TextColors.BG}
                />
                <Input
                    value={name}
                    onChange={onChangeName}
                    placeholder={'Введите имя'}
                    errorText={errors?.nameError}
                />
            </div>
            <div className={styles.surname}>
                <Text
                    className={styles.formText}
                    text={'Фамилия'}
                    color={TextColors.BG}
                />
                <Input
                    value={surname}
                    onChange={onChangeSurname}
                    placeholder={'Введите фамилию'}
                    errorText={errors?.surnameError}
                />
            </div>
            <div className={styles.lastname}>
                <Text
                    className={styles.formText}
                    text={'Отчество'}
                    color={TextColors.BG}
                />
                <Input
                    value={lastname}
                    onChange={onChangeLastname}
                    placeholder={'Введите отчество'}
                    errorText={errors?.lastnameError}
                />
            </div>
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
                    errorText={errors?.emailError}
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
                    errorText={errors?.passwordError}
                    type="password"
                />
            </div>
            <Button
                onClick={onClickRegistration}
                className={styles.submit}
                theme={ButtonTheme.CLEAR}
            >
                Войти
            </Button>
        </div>
    );
};

export const Registration = memo(RegistrationComponent);
