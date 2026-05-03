import { useRef } from 'react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import styles from './Reviews.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';

interface ReviewsProps {
    className?: string;
}

const mock = [
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
    {
        icon: 'src',
        fullName: 'Иванов Михал Палыч',
        specialization: 'Пластический хирург',
    },
];

export const Reviews = ({ className }: ReviewsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -190, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 190, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.reviewsWrapper}>
            <div onClick={scrollLeft} className={styles.navBtn}>
                <ArrowLeft />
            </div>
            <div
                ref={containerRef}
                className={classNames(styles.reviews, {}, [className])}
            >
                {mock.map((item) => (
                    <ReviewCard key={item.fullName} {...item} />
                ))}
            </div>
            <div onClick={scrollRight} className={styles.navBtn}>
                <ArrowRight />
            </div>
        </div>
    );
};
