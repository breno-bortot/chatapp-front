import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

import './styles/App.css';

function App() {
  return (

    
    
      <BrowserRouter>
          <Routes>
      
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
          </Routes>
      </BrowserRouter>
    
  );
}

export default App;
