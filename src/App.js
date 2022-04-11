import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css';

function App() {
  return(
    <BrowserRouter>
    <div className="navbar">
      <div className="navbar__links">
        <a href="/about">Про автора</a>
        <a href="/posts">Пости</a>
      </div>
    </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

