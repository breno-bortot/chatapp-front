import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

import './styles/App.css';
import Container from 'react-bootstrap/Container';
import Navbar from './Components/navbar';
import EditPage from './Pages/EditPage';
import DeletePage from './Pages/DeletePage';

function App() {
  return (

    
      <BrowserRouter>
          <Container className="col-lg-6 col-md-8 col-sm-8 col-xs-8"> 
            <Navbar />
              <Routes>
                <Route exact path="/" element={<IndexPage />}/>
                <Route exact path="/user/login" element={<LoginPage />}/>
                <Route exact path="/dashboard" element={<DashboardPage />}/>
                <Route exact path="/user/register" element={<RegisterPage />}/>
                <Route exact path="/user/edit/:id" element={<EditPage />}/>
                <Route exact path="/user/delete/:id" element={<DeletePage />}/>
                
                
              </Routes>
          </Container>
        
      </BrowserRouter>
  
  );
}

export default App;
