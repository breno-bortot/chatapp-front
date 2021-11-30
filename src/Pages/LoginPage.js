import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function LoginPage() {
    return (
            
        <Card className="position-absolute top-50 start-50 translate-middle">
            <Card.Header>Login</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group className="form-group mb-3" controlId="formCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="number" placeholder="Insira seu CPF" />
                    </Form.Group>
                    <Form.Group className="form-group mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua Senha" />
                    </Form.Group>
                    <Button className='mt-2' type="submit">
                        Entrar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
         
      
    );
};

export default LoginPage;
