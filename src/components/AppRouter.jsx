import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import About from './../pages/About';
import Error from './../pages/Error';
import Posts from './../pages/Posts';
import PostIdPage from './../pages/PostIdPage';

const AppRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            
            <Route path="/error" element={<Error />} />           
            <Route path="*" element={<Navigate to="/error"/>}/>
      </Routes>
     );
}
 
export default AppRouter;