import React, { useContext } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from './../pages/Posts';
import { privateRoutes, publicRoutes } from './UI/router/routers';
import { AuthContext } from './UI/context/index';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return ( 
        isAuth
            ? 
            <Routes>
                <Route element={<Posts/>}/>
                    {privateRoutes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.component/>} 
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                <Route path="*" element={<Navigate to="/error"/>}/>
            </Routes>
            : 
            <Routes>
                    {publicRoutes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.component/>} 
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes> 
    );
}
 
export default AppRouter;