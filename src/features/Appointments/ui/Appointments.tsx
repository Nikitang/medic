import { useSelector } from 'react-redux';
import styles from './Appointments.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { getAppointmentsData } from '../model/selctors/getAppointmentsData/getAppointmentsData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchAppointmentsData } from '../model/services/fetchAppointmentsData/fetchAppointmentsData';
import { getUserAuthData } from 'entities/User';
import { Card } from 'shared/ui/Card';

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
            {appointments?.map((appoint) => (
                <Card key={appoint.doctor?.id}>
                    <div>{appoint.doctor?.fullName}</div>
                </Card>
            ))}
        </div>
    );
};
