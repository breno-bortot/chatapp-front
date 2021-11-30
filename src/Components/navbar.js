import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
// import Link  from 'react-router-dom';

function navbar() {
    return (
    <Navbar expand={false}>
        <Container   fluid>
            {/* <Navbar.Brand href="#">Menu</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* <Nav.Link><Link to="/dashboard">Dashboard</Link></Nav.Link> */}
                <Nav.Link path="/user/register">Criar Conta</Nav.Link>
                <Nav.Link path="/user/edit/:id">Editar Conta</Nav.Link>
                <Nav.Link path="/user/delete/:id">Deletar Conta</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    )
}

export default navbar
