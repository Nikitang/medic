import { ReactNode, useState } from 'react';
import styles from './DropDownMenu.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import MenuIcon from 'shared/assets/icons/menu.svg';
import AppLink from '../AppLink/AppLink';
import { Card } from '../Card';
import { Button, ButtonTheme } from '../Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';

interface DropDownMenuProps {
    children?: ReactNode;

    className?: string;
}

export const DropDownMenu = ({ className, children }: DropDownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    return (
        <div className={classNames(styles.dropDownMenu, {}, [className])}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={classNames(styles.icon, { [styles.rotate]: isOpen })}
            >
                <MenuIcon />
            </div>
            {isOpen && (
                <Card className={styles.menu}>
                    <AppLink to={'/appointments'}>Записи</AppLink>
                    <div className={styles.line}></div>
                    <div onClick={onLogout} className={styles.logout}>
                        Выйти
                    </div>
                </Card>
            )}
        </div>
    );
};
