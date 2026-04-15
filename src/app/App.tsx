import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';

const App = () => {
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
