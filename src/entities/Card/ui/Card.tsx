import styles from './Card.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';

export enum CardBgOptions {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    BG = 'bg',
    CUSTOM1 = '',
}

export enum CardHeightOptions {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    D = 'none',
}

export enum CardWidthOptions {
    W1 = 'w1',
    W2 = 'w2',
    W3 = 'w3',
    D = 'none',
}

interface CardProps {
    className?: string;
    children?: ReactNode;
    width?: CardWidthOptions;
    height?: CardHeightOptions;
    background?: CardBgOptions;
}

export const Card = ({
    className,
    children,
    width = CardWidthOptions.D,
    height = CardHeightOptions.D,
    background = CardBgOptions.BG,
}: CardProps) => {
    const mods: Mods = {
        [styles[width]]: width,
        [styles[height]]: height,
        [styles[background]]: background,
    };

    return (
        <div className={classNames(styles.card, mods, [className])}>
            {children}
        </div>
    );
};
