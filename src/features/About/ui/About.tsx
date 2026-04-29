import { Text } from 'shared/ui/Text/Text';
import styles from './About.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Pharmacy from 'shared/assets/icons/pharmacy.svg';

interface AboutProps {
    className?: string;
}

export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.about, {}, [className])}>
            <Text title={'Med Clinic'} />
            <div className={styles.icon}>
                <Pharmacy />
            </div>
        </div>
    );
};
