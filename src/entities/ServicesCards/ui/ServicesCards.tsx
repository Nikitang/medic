import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './ServicesCards.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColors } from 'shared/ui/Text/Text';

import { iconMap } from 'shared/utils/IconMap';
import { useNavigate } from 'react-router-dom';

interface ServicesCardsProps {
    className?: string;
}

export const ServicesCards = ({ className }: ServicesCardsProps) => {
    const navigate = useNavigate();

    const sendToServices = () => {
        navigate('/services');
    };

    return (
        <div className={classNames(styles.servicesCards, {}, [className])}>
            <Card
                onClick={sendToServices}
                background={CardBgOptions.PRIMARY}
                className={styles.card}
            >
                <div className={styles.icon}>{iconMap.scalpel}</div>
                <Text color={TextColors.BG} text="Операции" />
            </Card>

            <Card
                onClick={sendToServices}
                background={CardBgOptions.PRIMARY}
                className={styles.card}
            >
                <div className={styles.icon}>{iconMap.beaker}</div>
                <Text color={TextColors.BG} text="Анализы" />
            </Card>

            <Card
                onClick={sendToServices}
                background={CardBgOptions.PRIMARY}
                className={styles.card}
            >
                <div className={styles.icon}>{iconMap.surgeon}</div>
                <Text color={TextColors.BG} text="Консультации с врачом" />
            </Card>

            <Card
                onClick={sendToServices}
                background={CardBgOptions.PRIMARY}
                className={styles.card}
            >
                <div className={styles.icon}>{iconMap.checkUp}</div>
                <Text color={TextColors.BG} text="Полный чекап здоровья" />
            </Card>

            <Card
                onClick={sendToServices}
                background={CardBgOptions.PRIMARY}
                className={styles.card}
            >
                <div className={styles.icon}>{iconMap.magnifying}</div>
                <Text color={TextColors.BG} text="Плановые осмотры" />
            </Card>

            <Card
                onClick={sendToServices}
                background={CardBgOptions.PRIMARY}
                className={styles.card}
            >
                <div className={styles.icon}>{iconMap.paper}</div>
                <Text color={TextColors.BG} text="Выдача справок" />
            </Card>
        </div>
    );
};
