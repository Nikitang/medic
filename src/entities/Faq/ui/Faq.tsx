import { DropDownAnswer } from 'shared/ui/DropDownAnswer/DropDownAnswer';
import styles from './Faq.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getFaqData } from '../model/selectors/getFaqData';
import { useEffect } from 'react';
import { fetchFaqData } from '../model/services/fetchFaqData';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface FaqProps {
    className?: string;
}

export const Faq = ({ className }: FaqProps) => {
    const disptach = useAppDispatch();
    const faqData = useSelector(getFaqData);

    useEffect(() => {
        disptach(fetchFaqData());
    }, [disptach]);
    return (
        <div className={classNames(styles.faq, {}, [className])}>
            <Text
                align={TextAlign.CENTER}
                className={styles.title}
                title={'Популярные вопросы'}
            />
            {faqData?.map((item) => (
                <DropDownAnswer
                    key={item.id}
                    question={item.title}
                    answer={item.description}
                />
            ))}
        </div>
    );
};
