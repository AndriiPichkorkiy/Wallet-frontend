import Loader from "../../Loader/Loader";
import React, { lazy, Suspense } from "react";
import {Routes, Route} from "react-router-dom";

// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import PublicRoute from "../PublicRoute/PublicRoute ";

const DashboardPage = lazy(()=> import('../../../pages/DashboardPage/DashboardPage'));
const RegistrationPage = lazy(()=> import('../../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(()=> import('../../../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import ("../../../pages/NotFoundPage/NotFoundPage"));

const UserRouters = () => {
    return (
        <>
        <Suspense fallback={<Loader/>}>
            <Routes> 
                {/* <Route element={<PublicRoute/>}> */}
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                {/* </Route> */}
                {/* <Route element={<PrivateRoute/>}> */}
                    <Route path="/" element={<DashboardPage />} />
                {/* </Route> */}
                <Route path="*"  element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
        </>
    );
}

export default UserRouters;