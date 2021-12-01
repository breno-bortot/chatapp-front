import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router';

function NavigationBar() {
    const navigate = useNavigate();

    return (
    <Navbar expand={false}>
        <Container>
            {/* <Navbar.Brand href="#">Menu</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Bate Papo WOW!!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                
                <Nav.Link onClick={() =>{
                    navigate('/dashboard')
                }} >Dashboard</Nav.Link>
                <Nav.Link onClick={() =>{
                    navigate('/user/login')
                }} >Entrar</Nav.Link>
                <Nav.Link onClick={() =>{
                    navigate('/user/register')}} >Criar Conta</Nav.Link>
                <Nav.Link onClick={() =>{
                    navigate('/user/edit/:id')}}>Editar Conta</Nav.Link>
                <Nav.Link onClick={() =>{
                    navigate('/user/delete/:id')}}>Deletar Conta</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    )
}

export default NavigationBar;
