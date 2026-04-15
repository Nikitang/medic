import { memo } from 'react';
import styles from './Text.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export enum TextAlign {
    RIGHT = 'right',
    CENTER = 'center',
    LEFT = 'left',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    align?: TextAlign;
}

const TextComponent = ({
    className,
    title,
    text,
    align = TextAlign.LEFT,
}: TextProps) => {
    const mods: Mods = {
        [styles[align]]: true,
    };

    return (
        <div className={classNames(styles.text, mods, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};

export const Text = memo(TextComponent);
