import { Card } from 'shared/ui/Card';
import styles from './Consultation.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import Support from 'shared/assets/icons/support3.svg';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { memo } from 'react';

interface ConsultationProps {
    className?: string;
}

const ConsultationComponent = ({ className }: ConsultationProps) => {
    return (
        <Card className={styles.consultation}>
            <div className={styles.formTitle}>
                <Text
                    title={`Если вы нуждаетесь в консультации, 
            то просто оставьте ваши контакты 
            и мы с вами свяжемся`}
                    align={TextAlign.CENTER}
                    bold
                />
            </div>
            <div className={styles.supportIcon}>
                <Support />
            </div>
            <div className={styles.fieldsContainer}>
                <div className={styles.name}>
                    <Text text={'Имя'} />
                    <Input />
                </div>
                <div className={styles.surname}>
                    <Text text={'Фамилия'} />
                    <Input />
                </div>
                <div className={styles.lastname}>
                    <Text text={'Отчество'} />
                    <Input />
                </div>
                <div className={styles.email}>
                    <Text text={'Почта'} />
                    <Input />
                </div>
            </div>
            <Button className={styles.sendBtn}>Отправить</Button>
        </Card>
    );
};

export const Consultation = memo(ConsultationComponent);
