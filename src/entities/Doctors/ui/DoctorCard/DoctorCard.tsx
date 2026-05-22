import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './DoctorCard.module.scss';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { memo, useState } from 'react';
import { DoctorModal } from '../DoctorModal/DoctorModal';

interface ReviewCardProps {
    icon: string;
    fullName: string;
    specialization: string;
    id: string;
}

const DoctorCardComponent = ({
    icon,
    fullName,
    specialization,
    id,
}: ReviewCardProps) => {
    const [cardModal, setCardModal] = useState(false);

    const onCloseModal = () => {
        setCardModal(false);
    };

    const onShowModal = () => {
        setCardModal(true);
    };

    return (
        <>
            <Card
                background={CardBgOptions.PRIMARY}
                border
                onClick={onShowModal}
            >
                <div className={styles.icon}>
                    <img src={icon} alt="Фотография доктора" />
                </div>
                <div className={styles.fullName}>
                    <Text
                        title={fullName}
                        color={TextColors.BG}
                        align={TextAlign.CENTER}
                    />
                </div>
                <div className={styles.specialization}>
                    <Text text={specialization} color={TextColors.BG} bold />
                </div>
            </Card>
            {cardModal && (
                <DoctorModal
                    openState={cardModal}
                    onClose={onCloseModal}
                    image={icon}
                    specialization={specialization}
                    fullName={fullName}
                    id={id}
                />
            )}
        </>
    );
};

export const DoctorCard = memo(DoctorCardComponent);
