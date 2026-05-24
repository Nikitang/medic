import { Modal } from 'shared/ui/Modal/Modal';
import styles from './AppointmentsModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardBgOptions } from 'shared/ui/Card';
import { Text, TextColors } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Appoint } from '../../model/types/appointmentsSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { deleteAppointmentData } from '../../model/services/deleteAppointmentData/deleteAppointmentData';
import { User } from 'entities/User';
import { fetchAppointmentsData } from '../../model/services/fetchAppointmentsData/fetchAppointmentsData';

interface AppointmentsModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
    appoint?: Appoint;
    user?: User;
}

export const AppointmentsModal = ({
    className,
    isOpen,
    onClose,
    appoint,
    user,
}: AppointmentsModalProps) => {
    const dispatch = useAppDispatch();

    const onDeleteAppoint = () => {
        dispatch(
            deleteAppointmentData({
                appointmentId: appoint?.id,
                email: user?.email,
            }),
        );
        dispatch(fetchAppointmentsData({ email: user?.email || '' }));
        onClose?.();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(styles.appointmentsModal, {}, [className])}
        >
            <Card background={CardBgOptions.PRIMARY}>
                <Text color={TextColors.BG} title={'Хотите отменить запись?'} />
                <div className={styles.btns}>
                    <Button
                        onClick={onDeleteAppoint}
                        className={styles.yes}
                        theme={ButtonTheme.OUTLINE}
                    >
                        Да
                    </Button>
                    <Button
                        onClick={onClose}
                        className={styles.no}
                        theme={ButtonTheme.CLEAR}
                    >
                        Нет
                    </Button>
                </div>
            </Card>
        </Modal>
    );
};
