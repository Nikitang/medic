import { useEffect, useState } from 'react';
import styles from './ImgSlider.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { sliderImages } from 'shared/const/sliderImages';

interface ImgSliderProps {
    className?: string;
}

export const ImgSlider = ({ className }: ImgSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className={classNames(styles.ImgSlider, {}, [className])}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={sliderImages[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.image}
                />
            </div>

            <div className={styles.indicators}>
                {sliderImages.map((_, index) => (
                    <button
                        key={index}
                        className={classNames(styles.indicator, {
                            [styles.active]: index === currentIndex,
                        })}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};
