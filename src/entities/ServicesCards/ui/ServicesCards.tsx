import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './ServicesCards.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColors } from 'shared/ui/Text/Text';

import Surgeon from 'shared/assets/icons/surgeon.svg';
import Magnifying from 'shared/assets/icons/magnifying.svg';
import Scalpel from 'shared/assets/icons/scalpel.svg';
import Beaker from 'shared/assets/icons/beaker.svg';
import Paper from 'shared/assets/icons/paper.svg';
import Checkup from 'shared/assets/icons/checkup.svg';
import { iconMap } from 'shared/utils/IconMap';

interface ServicesCardsProps {
    className?: string;
}

export const ServicesCards = ({ className }: ServicesCardsProps) => {
    return (
        <div className={classNames(styles.servicesCards, {}, [className])}>
            <Card background={CardBgOptions.PRIMARY} className={styles.card}>
                <div className={styles.icon}>{iconMap.scalpel}</div>
                <Text color={TextColors.BG} text="Операции" />
            </Card>
            <Card background={CardBgOptions.PRIMARY} className={styles.card}>
                <div className={styles.icon}>
                    <Beaker />
                </div>
                <Text color={TextColors.BG} text="Анализы" />
            </Card>
            <Card background={CardBgOptions.PRIMARY} className={styles.card}>
                <div className={styles.icon}>
                    <Surgeon />
                </div>
                <Text color={TextColors.BG} text="Консультации с врачом" />
            </Card>
            <Card background={CardBgOptions.PRIMARY} className={styles.card}>
                <div className={styles.icon}>
                    <Checkup />
                </div>
                <Text color={TextColors.BG} text="Полный чекап здоровья" />
            </Card>
            <Card background={CardBgOptions.PRIMARY} className={styles.card}>
                <div className={styles.icon}>
                    <Magnifying />
                </div>
                <Text color={TextColors.BG} text="Плановые осмотры" />
            </Card>
            <Card background={CardBgOptions.PRIMARY} className={styles.card}>
                <div className={styles.icon}>
                    <Paper />
                </div>
                <Text color={TextColors.BG} text="Выдача справок" />
            </Card>
        </div>
    );
};
