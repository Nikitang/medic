import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import ServicesPage from 'pages/ServicesPage/ui/ServicesPage';
import { AuthPage } from 'pages/AuthPage';
import { AppointmentsPage } from 'pages/AppointmentsPage';
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    SERVICES = 'services',
    AUTH = 'auth',
    APPOINTEMENTS = 'appointments',
    //last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SERVICES]: '/services',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.APPOINTEMENTS]: '/appointments',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },

    [AppRoutes.SERVICES]: {
        path: RoutePath.services,
        element: <ServicesPage />,
    },

    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage />,
    },

    [AppRoutes.APPOINTEMENTS]: {
        path: RoutePath.appointments,
        element: <AppointmentsPage />,
    },

    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
