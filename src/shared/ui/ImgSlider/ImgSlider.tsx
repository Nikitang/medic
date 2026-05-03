import { useEffect, useState } from 'react';
import styles from './ImgSlider.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

import img1 from 'shared/assets/img/1.jpg';
import img2 from 'shared/assets/img/2.jpg';
import img3 from 'shared/assets/img/3.jpg';
import img4 from 'shared/assets/img/4.jpg';
import img5 from 'shared/assets/img/5.jpg';
import img6 from 'shared/assets/img/6.jpg';
import img7 from 'shared/assets/img/7.jpg';
import img8 from 'shared/assets/img/8.jpg';
import img9 from 'shared/assets/img/9.jpg';
import img10 from 'shared/assets/img/10.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

interface ImgSliderProps {
    className?: string;
}

export const ImgSlider = ({ className }: ImgSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
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
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.image}
                />
            </div>

            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={classNames(styles.indicator, {
                            [styles.active]: index === currentIndex,
                        })}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
