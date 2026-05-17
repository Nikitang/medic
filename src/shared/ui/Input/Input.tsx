import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useState,
    FocusEvent,
    useEffect,
    useRef,
} from 'react';
import styles from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const InputComponent = ({
    className,
    value,
    onChange,
    type = 'text',
    autoFocus,
    readonly,
    ...otherProps
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onSelect = (e: FocusEvent<HTMLInputElement>) => {};

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div className={classNames(styles.inputWrapper, mods, [className])}>
            <div className={styles.caretWrapper}>
                <input
                    className={styles.input}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
            </div>
        </div>
    );
};

export const Input = memo(InputComponent);
