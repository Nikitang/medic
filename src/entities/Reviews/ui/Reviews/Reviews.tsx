import { useEffect, useRef } from 'react';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import styles from './Reviews.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchReviewsData } from 'entities/Reviews/model/services/fetchReviewsData';
import { useSelector } from 'react-redux';
import { getReviewsData } from 'entities/Reviews/model/selectors/getReviewsData';

interface ReviewsProps {
    className?: string;
}

export const Reviews = ({ className }: ReviewsProps) => {
    const dispatch = useAppDispatch();
    const doctors = useSelector(getReviewsData);

    console.log(doctors);

    useEffect(() => {
        if (!doctors) {
            dispatch(fetchReviewsData());
        }
    }, [dispatch, doctors]);

    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (containerRef.current?.firstElementChild) {
            const cardWidth =
                containerRef.current.firstElementChild.getBoundingClientRect()
                    .width;
            containerRef.current.scrollBy({
                left: -cardWidth - 20,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current?.firstElementChild) {
            const cardWidth =
                containerRef.current.firstElementChild.getBoundingClientRect()
                    .width;
            containerRef.current.scrollBy({
                left: cardWidth + 20,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Text
                className={styles.title}
                title={'Наши врачи'}
                align={TextAlign.CENTER}
            />
            <div className={styles.reviewsWrapper}>
                <div onClick={scrollLeft} className={styles.navBtn}>
                    <ArrowLeft />
                </div>
                <div
                    ref={containerRef}
                    className={classNames(styles.reviews, {}, [className])}
                >
                    {doctors?.map((item) => (
                        <ReviewCard
                            key={item.id}
                            fullName={item.fullName}
                            icon={item.photo}
                            specialization={item.specialization}
                        />
                    ))}
                </div>
                <div onClick={scrollRight} className={styles.navBtn}>
                    <ArrowRight />
                </div>
            </div>
        </>
    );
};
