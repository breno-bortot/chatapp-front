import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

import './styles/App.css';

function App() {
  return (

    
      <BrowserRouter>
          
            <Routes>
              <Route exact path="/" element={<IndexPage />}/>
              <Route path="user/register" element={<RegisterPage />}/>
              <Route path="user/login" element={<LoginPage />}/>
              <Route path="/dashboard" element={<DashboardPage />}/>
            </Routes>
        
      </BrowserRouter>
  
  );
}

export default App;
