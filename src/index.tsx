import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/zh-tw/home" element={<App />} />
              <Route path="/zh-cn/home" element={<App />} />
          </Routes>
      </BrowserRouter>
);

