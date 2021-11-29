import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

import './styles/App.css';

function App() {
  return (

    <div className="container d-flex justify-content-center align-items-center ">
      <BrowserRouter>
          
            <Routes>
              <Route path="/register" element={<RegisterPage />}/>
              <Route path="/login" element={<LoginPage />}/>
              <Route path="/dashboard" element={<DashboardPage />}/>
            </Routes>
        
      </BrowserRouter>
      </div>
  );
}

export default App;
