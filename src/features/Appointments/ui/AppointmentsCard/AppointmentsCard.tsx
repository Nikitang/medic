import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './AppointmentsCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColors } from 'shared/ui/Text/Text';
import Close from 'shared/assets/icons/close.svg';
import { AppointmentsModal } from '../AppointmentsModal/AppointmentsModal';
import { Appoint } from '../../model/types/appointmentsSchema';
import { memo, useState } from 'react';
import { User } from 'entities/User';

interface AppointmentsCardProps {
    className?: string;
    appoint?: Appoint;
    user?: User;
}

const AppointmentsCardComponent = ({
    className,
    appoint,
    user,
}: AppointmentsCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenModal = () => {
        setIsOpen(true);
    };

    const onCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Card
                className={styles.card}
                background={CardBgOptions.PRIMARY}
                key={appoint?.doctor?.id}
            >
                <div onClick={onOpenModal} className={styles.close}>
                    <Close />
                </div>
                <div className={styles.doctorInfo}>
                    <div className={styles.photo}>
                        <img
                            src={appoint?.doctor?.photo}
                            alt={appoint?.doctor?.fullName}
                        />
                    </div>
                    <Text
                        color={TextColors.BG}
                        text={appoint?.doctor?.specialization}
                        className={styles.specialization}
                    />
                </div>

                <div className={styles.details}>
                    <div className={styles.detailRow}>
                        <span className={styles.label}>Имя:</span>
                        <span className={styles.value}>
                            {appoint?.doctor?.fullName}
                        </span>
                    </div>
                    <div className={styles.detailRow}>
                        <span className={styles.label}>Время:</span>
                        <span className={styles.value}>{appoint?.time}</span>
                    </div>
                </div>
            </Card>
            {isOpen && (
                <AppointmentsModal
                    isOpen={isOpen}
                    onClose={onCloseModal}
                    appoint={appoint}
                    user={user}
                />
            )}
        </>
    );
};

export const AppointmentsCard = memo(AppointmentsCardComponent);
