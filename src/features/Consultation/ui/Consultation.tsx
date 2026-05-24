import { Card } from 'shared/ui/Card';
import styles from './Consultation.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import Support from 'shared/assets/icons/support3.svg';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getConsultationEmail } from '../model/selectors/getConsultationEmail/getConsultationEmail';
import { getConsultationName } from '../model/selectors/getConsultationName/getConsultationName';
import { getConsultationSurname } from '../model/selectors/getConsultationSurname/getConsultationSurname';
import { getConsultationLastname } from '../model/selectors/getConsultationLastname/getConsultationLastname';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { consultationActions } from '../model/slice/consultationSlice';
import { firstLetterUp } from 'shared/utils/firstLetterUp';
import { getConsultationData } from '../model/selectors/getConsultationData/getConsultationData';
import { sendConsultationData } from '../model/services/sendConsultationData/sendConsultationData';

interface ConsultationProps {
    className?: string;
}

const ConsultationComponent = ({ className }: ConsultationProps) => {
    const dispatch = useAppDispatch();

    const email = useSelector(getConsultationEmail);
    const name = useSelector(getConsultationName);
    const surname = useSelector(getConsultationSurname);
    const lastname = useSelector(getConsultationLastname);
    const consultationData = useSelector(getConsultationData);

    const onChangeName = useCallback(
        (value: string) => {
            dispatch(
                consultationActions.setData({
                    ...consultationData,
                    name: firstLetterUp(value).trim(),
                }),
            );
        },
        [dispatch, consultationData],
    );
    const onChangeSurname = useCallback(
        (value: string) => {
            dispatch(
                consultationActions.setData({
                    ...consultationData,
                    surname: firstLetterUp(value).trim(),
                }),
            );
        },
        [dispatch, consultationData],
    );
    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(
                consultationActions.setData({
                    ...consultationData,
                    lastname: firstLetterUp(value).trim(),
                }),
            );
        },
        [dispatch, consultationData],
    );
    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(
                consultationActions.setData({
                    ...consultationData,
                    email: value,
                }),
            );
        },
        [dispatch, consultationData],
    );

    const onClickSend = () => {
        dispatch(sendConsultationData({ name, surname, lastname, email }));
    };

    return (
        <Card className={styles.consultation}>
            <div className={styles.formTitle}>
                <Text
                    title={`Если вы нуждаетесь в консультации, 
            то просто оставьте ваши контакты 
            и мы с вами свяжемся`}
                    align={TextAlign.CENTER}
                    bold
                />
            </div>
            <div className={styles.supportIcon}>
                <Support />
            </div>
            <div className={styles.fieldsContainer}>
                <div className={styles.name}>
                    <Text text={'Имя'} />
                    <Input
                        placeholder={'Введите имя'}
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div className={styles.surname}>
                    <Text text={'Фамилия'} />
                    <Input
                        placeholder={'Введите фамилию'}
                        value={surname}
                        onChange={onChangeSurname}
                    />
                </div>
                <div className={styles.lastname}>
                    <Text text={'Отчество'} />
                    <Input
                        placeholder={'Введите отчество'}
                        value={lastname}
                        onChange={onChangeLastname}
                    />
                </div>
                <div className={styles.email}>
                    <Text text={'Почта'} />
                    <Input
                        placeholder={'Введите почту'}
                        value={email}
                        onChange={onChangeEmail}
                    />
                </div>
            </div>
            <Button onClick={onClickSend} className={styles.sendBtn}>
                Отправить
            </Button>
        </Card>
    );
};

export const Consultation = memo(ConsultationComponent);
