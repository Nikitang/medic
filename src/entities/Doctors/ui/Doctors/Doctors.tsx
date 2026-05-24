import { useEffect, useRef } from 'react';
import { DoctorCard } from '../DoctorCard/DoctorCard';
import styles from './Doctors.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchReviewsData } from 'entities/Doctors/model/services/fetchReviewsData/fetchReviewsData';
import { useSelector } from 'react-redux';
import { getReviewsData } from 'entities/Doctors/model/selectors/getReviewsData';

interface ReviewsProps {
    className?: string;
}

export const Doctors = ({ className }: ReviewsProps) => {
    const dispatch = useAppDispatch();
    const doctors = useSelector(getReviewsData);


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
                        <DoctorCard
                            key={item.id}
                            id={item.id}
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
