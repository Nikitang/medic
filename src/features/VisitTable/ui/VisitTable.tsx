import { Card, CardBgOptions } from 'shared/ui/Card';
import styles from './VisitTable.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Pharmacy from 'shared/assets/icons/pharmacy.svg';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { ServicesCards } from 'entities/ServicesCards';
import { ImgSlider } from 'shared/ui/ImgSlider/ImgSlider';
import { Input } from 'shared/ui/Input/Input';
import Support from 'shared/assets/icons/support3.svg';
import { Button } from 'shared/ui/Button/Button';

interface VIsitTableProps {
    className?: string;
}

export const VisitTable = ({ className }: VIsitTableProps) => {
    return (
        <div className={classNames(styles.visitTable, {}, [className])}>
            <Card className={styles.card} background={CardBgOptions.BG}>
                <div className={styles.icon}>
                    <Pharmacy />
                </div>
                <Text
                    align={TextAlign.CENTER}
                    title={'Med Clinic - лучшие специалисты'}
                />
                <Text
                    text="Клиника занимается предоставлением 
                    услуг разного спектра - от 
                    анализов, до проведения операций"
                    align={TextAlign.CENTER}
                    color={TextColors.SECONDARY}
                />
                <div className={styles.services}>
                    <ServicesCards />
                </div>
            </Card>
            <div className={styles.card2}>
                <ImgSlider />
                <Card className={styles.cardI}>
                    <div className={styles.formTitle}>
                        <Text
                            title={`Если вы нуждаетесь в консультации, 
            то просто оставьте выши контакты 
            и мы свами свяжемся`}
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
            </div>
        </div>
    );
};
