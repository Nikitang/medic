import styles from './AppLink.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    bold?: boolean;
    underline?: boolean;
}

const AppLinkComponent = ({
    to,
    className,
    children,
    bold,
    underline,
    ...otherProps
}: AppLinkProps) => {
    const mods: Mods = {
        [styles.bold]: bold,
        [styles.underline]: underline,
    };
    return (
        <Link
            to={to}
            className={classNames(styles.appLink, mods, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

const AppLink = memo(AppLinkComponent);

export default AppLink;
