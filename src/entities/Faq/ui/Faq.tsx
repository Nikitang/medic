import { DropDownAnswer } from 'shared/ui/DropDownAnswer/DropDownAnswer';
import styles from './Faq.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface FaqProps {
    className?: string;
}

const mokData = [
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
    { answer: 'yes', question: 'how' },
];

export const Faq = ({ className }: FaqProps) => {
    return (
        <div className={classNames(styles.Faq, {}, [className])}>
            {mokData.map((item) => (
                <DropDownAnswer
                    key={item.answer}
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    );
};
