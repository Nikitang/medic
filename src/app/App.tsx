import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<div>Loading</div>}>
                <Navbar />
                <div className={classNames('content-page', {}, [])}>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
