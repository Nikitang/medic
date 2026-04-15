import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    bold?: boolean;
    scale?: boolean;
}

const ButtonComponent = ({
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    bold,
    scale,
    ...otherProps
}: ButtonProps) => {
    const mods: Record<string, boolean | undefined> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
        [styles.bold]: bold,
        [styles.scale]: scale,
    };

    return (
        <button
            className={classNames(styles.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const Button = memo(ButtonComponent);
