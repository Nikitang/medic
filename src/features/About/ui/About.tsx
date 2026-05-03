import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import styles from './About.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Pharmacy from 'shared/assets/icons/pharmacy-bg.svg';
import LeftWing from 'shared/assets/icons/left-wing.svg';
import RightWing from 'shared/assets/icons/right-wing.svg';

interface AboutProps {
    className?: string;
}

export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.about, {}, [className])}>
            <Text
                title={'Med Clinic'}
                color={TextColors.BG}
                bold
                align={TextAlign.CENTER}
                className={styles.title}
            />
            <div className={styles.icon}>
                <LeftWing className={styles.iconL} />
                <Pharmacy />
                <RightWing className={styles.iconR} />
            </div>
            <div className={styles.text}>
                <p>
                    Медицинская клиника <strong>«Med Clinic»</strong> — это
                    современный многопрофильный центр, предлагающий полный
                    спектр услуг от диагностики до хирургического вмешательства.
                </p>
                <p>
                    Мы начали работу в <strong>2015 году</strong> с одной
                    небольшой амбулатории, а сегодня оказываем помощь более чем
                    в <strong>12 городах России</strong>.
                </p>
                <p>
                    Наша миссия — сделать качественную медицину
                    <em>доступной, безопасной и человечной</em> для каждого
                    пациента.
                </p>
                <p>
                    В штате клиники — более
                    <strong>200 сертифицированных специалистов</strong>, включая
                    врачей высшей категории, кандидатов и докторов наук.
                </p>
                <p>
                    Все диагностическое оборудование обновляется ежегодно, а
                    лаборатория аккредитована по международным стандартам
                    <strong> ISO 15189</strong>.
                </p>
                <p>
                    Мы не работаем по ОМС — это позволяет нам гарантировать
                    <strong> отсутствие очередей</strong>, индивидualный подход
                    и прозрачное ценообразование.
                </p>
                <p>
                    Более <strong>90% пациентов</strong> приходят к нам по
                    рекомендации — и мы гордимся каждым доверившимся нам
                    человеком.
                </p>
            </div>
        </div>
    );
};
