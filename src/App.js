import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import ('./pages/dashboard'));
const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const Profile = lazy(() => import ('./pages/profile'));
const NotFound = lazy(() => import ('./pages/not-found'));

export default function App() {
    const { user } = useAuthListener();

    return (
        <UserContext.Provider value={{ user }}>
            <Router>
                <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route 
                        path={ROUTES.LOGIN} 
                        element={user ? <Navigate to={ROUTES.DASHBOARD} /> : <Login />}
                    />
                    <Route path={ROUTES.SIGN_UP} element={<SignUp />}/>
                    <Route path={ROUTES.PROFILE} element={<Profile />} />
                    <Route 
                        path={ROUTES.DASHBOARD} exact  
                        element={user ? <Dashboard /> : <Navigate to={ROUTES.LOGIN} /> }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </Suspense>
            </Router>
        </UserContext.Provider>
    );
}
