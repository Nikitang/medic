import { memo } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import AppLink from 'shared/ui/AppLink/AppLink';
import Pharmacy from 'shared/assets/icons/pharmacy.svg';
import { Text } from 'shared/ui/Text/Text';

interface NavbarProps {
    className?: string;
}

export const NavbarComponent = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <AppLink to={'/'}>
                <div className={styles.icon}>
                    <Pharmacy />
                    <Text text="На главную" />
                </div>
            </AppLink>

            <div className={styles.navLinks}>
                <AppLink to={'/about'} bold underline>
                    О нас
                </AppLink>

                <AppLink to={'/services'} bold underline>
                    Мед. услуги
                </AppLink>
                <AppLink to={'/login'} bold underline>
                    Войти
                </AppLink>
            </div>
        </div>
    );
};

export const Navbar = memo(NavbarComponent);
