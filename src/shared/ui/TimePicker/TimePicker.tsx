import { useState } from 'react';
import styles from './TimePicker.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { availableAppointmentTimes } from 'shared/const/availableAppointmentTimes';
import { Button } from '../Button/Button';

interface TimePickerProps {
    className?: string;
    activeTime?: string;
    setActiveTime: (arg: string) => void;
}

export const TimePicker = ({
    className,
    activeTime,
    setActiveTime,
}: TimePickerProps) => {
    const onClickTime = (time: string) => {
        setActiveTime(time);
    };
    return (
        <div className={classNames(styles.timePicker, {}, [className])}>
            {availableAppointmentTimes.map((time) => (
                <Button
                    onClick={() => onClickTime(time)}
                    className={classNames(styles.timeBtn, {
                        [styles.active]: activeTime === time,
                    })}
                    key={time}
                >
                    {time}
                </Button>
            ))}
        </div>
    );
};
