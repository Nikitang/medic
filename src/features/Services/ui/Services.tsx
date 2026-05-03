import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './Services.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getDataServices } from '../model/selectors/getDataServices/getDataServices';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchServicesData } from '../model/services/fetchServicesData';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card';
import { iconMap } from 'shared/utils/IconMap';
import { textPositionMap } from 'shared/utils/textPositionMap';

interface ServicesProps {
    className?: string;
}

export const Services = ({ className }: ServicesProps) => {
    const dispatch = useAppDispatch();
    const services = useSelector(getDataServices);

    useEffect(() => {
        dispatch(fetchServicesData());
    }, [dispatch]);

    console.log(services);

    return (
        <div className={classNames(styles.services, {}, [className])}>
            {services?.map((item) => (
                <Card
                    key={item.title}
                    className={classNames(
                        styles.card,
                        {
                            [styles.iconLeft]: item.iconPosition === 'left',
                            [styles.iconRight]: item.iconPosition === 'right',
                        },
                        [],
                    )}
                >
                    <div className={styles.service}>
                        <div className={styles.icon}>{iconMap[item.icon]}</div>
                        <div className={styles.description}>
                            <Text
                                align={textPositionMap[item.iconPosition]}
                                title={item.title}
                            />
                            <Text
                                color={TextColors.SECONDARY}
                                align={textPositionMap[item.iconPosition]}
                                text={item.description}
                            />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};
