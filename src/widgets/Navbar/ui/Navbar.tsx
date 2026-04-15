import { memo } from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const NavbarComponent = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                О нас
            </Button>

            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                Мед. услуги
            </Button>
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.M}>
                Войти
            </Button>
        </div>
    );
};

export const Navbar = memo(NavbarComponent);
