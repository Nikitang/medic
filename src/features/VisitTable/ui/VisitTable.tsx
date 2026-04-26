import { Card, CardBgOptions } from 'entities/Card';
import styles from './VisitTable.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Pharmacy from 'shared/assets/icons/pharmacy.svg';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { ServicesCards } from 'entities/ServicesCards';

interface VIsitTableProps {
    className?: string;
}

export const VisitTable = ({ className }: VIsitTableProps) => {
    return (
        <div className={classNames(styles.visitTable, {}, [className])}>
            <Card className={styles.card} background={CardBgOptions.BG}>
                <div className={styles.icon}>
                    <Pharmacy />
                </div>
                <Text
                    align={TextAlign.CENTER}
                    title={'Med Clinic - лучшие специалисты'}
                />
                <Text
                    text="Клиника занимается предоставлением 
                    услуг разного спектра - от 
                    анализов, до проведения операций"
                    align={TextAlign.CENTER}
                    color={TextColors.SECONDARY}
                />
                <div className={styles.services}>
                    <ServicesCards />
                </div>
            </Card>
            <Card>
                <Text
                    title={'Med Clinic - лучшие специалисты'}
                    text="Клиника занимается предоставлением 
                    услуг разного спектра от анализов, до проведения операций"
                />
            </Card>
        </div>
    );
};
