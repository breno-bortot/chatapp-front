import React from 'react';
import axios from 'axios';
import makeToast from '../Components/toast';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';

function RegisterPage() {
    const navigate = useNavigate();

    const nameRef = React.createRef();
    const lastNameRef = React.createRef();
    const phoneRef = React.createRef();
    const cpfRef = React.createRef();
    const passwordRef = React.createRef();
    const passwordCheckRef = React.createRef();

    const handleEnter = (event) => {
        if(event.keyCode === 13) {
            registerUser();
        }
    };
    
    const registerUser = () =>{
        const name = nameRef.current.value;
        const lastName = lastNameRef.current.value;
        const phone = phoneRef.current.value;
        const cpf = cpfRef.current.value;
        const password = passwordRef.current.value;
        const passwordCheck = passwordCheckRef.current.value;

        axios.post('http://localhost:5000/user/register', {
            name,
            lastName,
            phone,
            cpf,
            password,
            passwordCheck
        }).then(response => {
            console.log(response);
            makeToast('success', response.data.message);
            navigate('/user/login');
        }).catch(error => {
            console.log(error.response);
            makeToast('error', error.response.data.message);
        });
    };
    return (
        
        <Card className="my-3">
            <Card.Header>Criar Conta</Card.Header>
            <Card.Body >
             <Form onKeyUp={handleEnter}>
                 <Row xs={1} md={2}>
                     <Col>
                         <Form.Group className="form-group mb-3" controlId="formName">
                             <Form.Label>Nome</Form.Label>
                             <Form.Control type="text" ref={nameRef} placeholder="Insira seu Nome" />
                         </Form.Group>
                     </Col>
                     <Col>
                         <Form.Group className="form-group mb-3 " controlId="formLastName">
                             <Form.Label>Sobrenome</Form.Label>
                             <Form.Control type="text" ref={lastNameRef} placeholder="Insira seu Sobrenome" />
                         </Form.Group>
                     </Col>
                 </Row>
                 <Row>
                     <Form.Group className="form-group mb-3" controlId="formPhone">
                         <Form.Label>Telefone</Form.Label>
                         <Form.Control type="number" ref={phoneRef} placeholder="(00)00000-0000" />
                     </Form.Group>
                 </Row>
                 <Row>
                     <Form.Group className="form-group mb-3" controlId="formCPF">
                         <Form.Label>CPF</Form.Label>
                         <Form.Control type="number" ref={cpfRef} placeholder="888.888-88" />
                     </Form.Group>
                 </Row>
                 <Row xs={1} md={2}>
                     <Col>
                         <Form.Group className="form-group mb-3 " controlId="formPassword">
                             <Form.Label>Senha</Form.Label>
                             <Form.Control type="password" ref={passwordRef} placeholder="Insira sua Senha" />
                         </Form.Group>
                     </Col>
                     <Col>
                         <Form.Group className="form-group mb-3 " controlId="formPasswordCheck">
                             <Form.Label>Confirmar Senha</Form.Label>
                             <Form.Control type="password" ref={passwordCheckRef} placeholder="Insira sua Senha" />
                         </Form.Group>
                     </Col>
                 </Row>
                 <Button className='mt-2' onClick={registerUser}>
                     Criar
                 </Button>
             </Form>
            </Card.Body>
         </Card>
       
    )
}

export default RegisterPage
