import React from 'react';
import axios from 'axios';
import makeToast from '../Components/toast';
import { useNavigate } from 'react-router';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function LoginPage() {
    const navigate = useNavigate();

    const cpfRef = React.createRef();
    const passwordRef = React.createRef();
    const handleEnter = (event) => {
        if(event.keyCode === 13) {
            loginUser();
        }
    };

    const redirect = () =>{
        navigate('/user/register');
    }

    const loginUser = () =>{
        const cpf = cpfRef.current.value;
        const password = passwordRef.current.value;

        axios.post('http://localhost:5000/user/login', {
            cpf,
            password
        }).then(response => {
            console.log(response);
            makeToast('success', response.data.message);
            // console.log(response.data.token)
            sessionStorage.setItem('CHAT_TOKEN', response.data.token);
            sessionStorage.setItem('USER_ID', response.data.userId);
            navigate('/dashboard');
        }).catch(error => {
            console.log(error.response);
            makeToast('error', error.response.data.message);
        });
    };
    return (
         
            <Container>
                <Card>
                    <Card.Header>Login</Card.Header>
                        <Card.Body>
                        <Form onKeyUp={handleEnter}>
                            <Form.Group className="form-group mb-3" controlId="formCPF">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="number" ref={cpfRef} placeholder="Insira seu CPF" />
                            </Form.Group>
                            <Form.Group className="form-group mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" ref={passwordRef} placeholder="Insira sua Senha" />
                            </Form.Group>
                            <Button className='mt-2' onClick={loginUser}>
                                Entrar
                            </Button>
                            <Button className='mt-2 createBtn'onClick={redirect} >
                                Criar Conta
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
      
         
      
    );
};

export default LoginPage;
