import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RegisterPage() {
    return (
        
        <Card className="my-3">
            <Card.Header>Criar Conta</Card.Header>
            <Card.Body >
             <Form>
                 <Row xs={1} md={2}>
                     <Col>
                         <Form.Group className="form-group mb-3" controlId="formName">
                             <Form.Label>Nome</Form.Label>
                             <Form.Control type="text" placeholder="Insira seu Nome" />
                         </Form.Group>
                     </Col>
                     <Col>
                         <Form.Group className="form-group mb-3 " controlId="formLastName">
                             <Form.Label>Sobrenome</Form.Label>
                             <Form.Control type="text" placeholder="Insira seu Sobrenome" />
                         </Form.Group>
                     </Col>
                 </Row>
                 <Row>
                     <Form.Group className="form-group mb-3" controlId="formPhone">
                         <Form.Label>Telefone</Form.Label>
                         <Form.Control type="number" placeholder="(00)00000-0000" />
                     </Form.Group>
                 </Row>
                 <Row>
                     <Form.Group className="form-group mb-3" controlId="formCPF">
                         <Form.Label>CPF</Form.Label>
                         <Form.Control type="number" placeholder="888.888-88" />
                     </Form.Group>
                 </Row>
                 <Row xs={1} md={2}>
                     <Col>
                         <Form.Group className="form-group mb-3 " controlId="formPassword">
                             <Form.Label>Senha</Form.Label>
                             <Form.Control type="password" placeholder="Insira sua Senha" />
                         </Form.Group>
                     </Col>
                     <Col>
                         <Form.Group className="form-group mb-3 " controlId="formPasswordCheck">
                             <Form.Label>Confirmar Senha</Form.Label>
                             <Form.Control type="password" placeholder="Insira sua Senha" />
                         </Form.Group>
                     </Col>
                 </Row>
                 <Button className='mt-2' type="submit">
                     Criar
                 </Button>
             </Form>
            </Card.Body>
         </Card>
       
    )
}

export default RegisterPage
