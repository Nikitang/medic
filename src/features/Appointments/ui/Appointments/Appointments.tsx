import { useSelector } from 'react-redux';
import styles from './Appointments.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getAppointmentsData } from '../../model/selctors/getAppointmentsData/getAppointmentsData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchAppointmentsData } from '../../model/services/fetchAppointmentsData/fetchAppointmentsData';
import { getUserAuthData } from 'entities/User';
import { Text, TextAlign, TextColors } from 'shared/ui/Text/Text';
import { AppointmentsCard } from '../AppointmentsCard/AppointmentsCard';

interface AppointmentsProps {
    className?: string;
}

export const Appointments = ({ className }: AppointmentsProps) => {
    const dispatch = useAppDispatch();
    const appointments = useSelector(getAppointmentsData);
    const user = useSelector(getUserAuthData);

    useEffect(() => {
        if (!appointments) {
            dispatch(fetchAppointmentsData({ email: user?.email || '' }));
        }
    }, [dispatch, appointments, user?.email]);

    return (
        <div className={classNames(styles.appointments, {}, [className])}>
            <Text
                title={'Записи'}
                color={TextColors.BG}
                align={TextAlign.CENTER}
                className={styles.title}
            />
            <div className={styles.cards}>
                {appointments?.map((appoint) => (
                    <AppointmentsCard
                        key={appoint.id}
                        appoint={appoint}
                        user={user}
                    />
                ))}
            </div>
        </div>
    );
};
