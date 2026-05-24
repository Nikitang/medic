import { Modal } from 'shared/ui/Modal/Modal';
import styles from './DoctorModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardBgOptions } from 'shared/ui/Card';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { TimePicker } from 'shared/ui/TimePicker/TimePicker';
import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { sendAppointData } from 'entities/Doctors/model/services/sendAppointData/sendAppointData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import AppLink from 'shared/ui/AppLink/AppLink';

interface DoctorModalProps {
    className?: string;
    openState?: boolean;
    onClose?: () => void;
    image: string;
    fullName: string;
    specialization: string;
    id: string;
}

export const DoctorModal = ({
    className,
    onClose,
    fullName,
    specialization,
    image,
    openState,
    id,
}: DoctorModalProps) => {
    const [activeTime, setActiveTime] = useState('');
    const dispatch = useAppDispatch();

    const user = useSelector(getUserAuthData);
    const data = {
        email: user?.email,
        doctor: { id, fullName, photo: image, specialization },
        time: activeTime,
    };

    const onSetAppoint = () => {
        if (user && user?.email) {
            dispatch(
                sendAppointData({
                    user: user.email,
                    doctor: { id, fullName, photo: image, specialization },
                    time: activeTime,
                }),
            );
        }
    };

    return (
        <Modal
            className={classNames(styles.doctorModal)}
            isOpen={openState}
            onClose={onClose}
        >
            {user && (
                <Card background={CardBgOptions.PRIMARY} border>
                    <div className={styles.specialization}>
                        <Text
                            text={specialization}
                            color={TextColors.BG}
                            bold
                        />
                    </div>
                    <div className={styles.icon}>
                        <img src={image} alt="Фотография доктора" />
                    </div>
                    <div className={styles.fullName}>
                        <Text
                            title={fullName}
                            color={TextColors.BG}
                            align={TextAlign.CENTER}
                        />
                    </div>

                    <TimePicker
                        activeTime={activeTime}
                        setActiveTime={setActiveTime}
                    />

                    <Button
                        onClick={onSetAppoint}
                        theme={ButtonTheme.CLEAR}
                        className={styles.appointBtn}
                    >
                        Записаться
                    </Button>
                </Card>
            )}

            {!user && (
                <Card background={CardBgOptions.PRIMARY}>
                    <Text
                        color={TextColors.BG}
                        title={'Для записи к врачу, требуется войти в систему'}
                        className={styles.loginText}
                    />
                    <AppLink className={styles.redirect} to={'/auth'}>
                        Войти
                    </AppLink>
                </Card>
            )}
        </Modal>
    );
};
