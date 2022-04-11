import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from './../pages/Posts';
import { privateRoutes, publicRoutes } from './UI/router/routers';

const AppRouter = () => {
    const isAuth = true;
    return ( 
        isAuth
            ? 
            <Routes>
                <Route path="/" element={<Posts/>}/>
                    {privateRoutes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.component/>} 
                            exact={route.exact}
                        />
                    )}
                <Route path="*" element={<Navigate to="/error"/>}/>
            </Routes>
            : 
            <Routes>
                <Route path="/" element={<Posts/>}/>
                    {publicRoutes.map(route => 
                        <Route 
                            path={route.path} 
                            element={<route.component/>} 
                            exact={route.exact}
                        />
                    )}
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes> 
    );
}
 
export default AppRouter;