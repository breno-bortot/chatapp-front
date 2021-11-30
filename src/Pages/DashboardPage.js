import React from 'react';
import Navbar from '../Components/navbar';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DashboardPage() {
    return (
        
        <div>
             
            <Card className="position-absolute top-50 start-50 translate-middle">
            <Navbar />
            <Card.Header>Bate Papo WOW!</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group className="form-group mb-3" controlId="formChatroomName">
                        <Form.Label>Nome da Sala</Form.Label>
                        <Form.Control type="text" placeholder="Insira o Nome" />
                    </Form.Group>
                    <Button className='mt-2' type="submit">
                        Criar
                    </Button>
                </Form>
                <div className="chatrooms">
                    <div className="chatroom">
                        <div>Quer TC??</div>
                        <div className="join">Entrar</div>
                    </div>
                    <div className="chatroom">
                        <div>Quer TC??</div>
                        <div className="join">Entrar</div>
                    </div>
                </div>
            </Card.Body>
                </Card>
        </div>
    )
}

export default DashboardPage
