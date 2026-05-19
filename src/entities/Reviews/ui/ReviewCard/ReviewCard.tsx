import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './ReviewCard.module.scss';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface ReviewCardProps {
    icon?: string;
    fullName?: string;
    specialization?: string;
}

export const ReviewCard = ({
    icon,
    fullName,
    specialization,
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
            {/* {cardModal && (
                <Modal isOpen={cardModal} onClose={onCloseModal}>
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
                            <Text
                                text={specialization}
                                color={TextColors.BG}
                                bold
                            />
                        </div>
                    </Card>
                </Modal>
            )} */}
        </>
    );
};
