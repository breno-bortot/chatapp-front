import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DashboardPage() {
    return (
        <Card className="position-absolute top-50 start-50 translate-middle">
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
    )
}

export default DashboardPage
