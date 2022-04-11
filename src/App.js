import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import About from "./pages/About";
import Error from './pages/Error';
import Posts from "./pages/Posts";
import './styles/App.css';

function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        
        <Route path="/error" element={<Error />} />           
        <Route path="*" element={<Navigate to="/error"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

