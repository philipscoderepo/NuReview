import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import ReadArticle from './components/ReadArticle/ReadArticle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Search" element={<Search/>}></Route>
        <Route path="/ReadArticle" element={<ReadArticle/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

