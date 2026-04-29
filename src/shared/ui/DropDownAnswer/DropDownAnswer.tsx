import { useState } from 'react';
import styles from './DropDownAnswer.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Plus from 'shared/assets/icons/plus.svg';
import { Text, TextColors } from '../Text/Text';

interface DropDownAnswerProps {
    className?: string;
    question?: string;
    answer?: string;
}

export const DropDownAnswer = ({
    className,
    question,
    answer,
}: DropDownAnswerProps) => {
    const [active, setActive] = useState(false);

    const onClickTask = () => {
        setActive((prev) => !prev);
    };

    return (
        <div className={classNames(styles.dropDownAnswer, {}, [className])}>
            <div className={styles.line}></div>
            <div className={styles.body} onClick={onClickTask}>
                <div className={styles.text}>
                    <Text text={question} color={TextColors.BG} />
                </div>
                <div
                    className={classNames(
                        styles.icon,
                        {
                            [styles.rotate]: active,
                        },
                        [],
                    )}
                >
                    <Plus />
                </div>
            </div>
            {active && (
                <div className={styles.answer}>
                    <Text text={answer} color={TextColors.BG} />
                </div>
            )}
        </div>
    );
};
