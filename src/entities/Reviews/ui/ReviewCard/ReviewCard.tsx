import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './ReviewCard.module.scss';
import { Text, TextColors } from 'shared/ui/Text/Text';

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
    return (
        <Card background={CardBgOptions.PRIMARY} border>
            <div className={styles.icon}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.fullName}>
                <Text title={fullName} color={TextColors.BG} />
            </div>
            <div className={styles.specialization}>
                <Text text={specialization} color={TextColors.SECONDARY} />
            </div>
        </Card>
    );
};
