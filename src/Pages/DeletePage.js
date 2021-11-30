import React from 'react';
import axios from 'axios';
import makeToast from '../Components/toast';
import { useNavigate } from 'react-router';


import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'


function DeletePage() {
    const navigate = useNavigate();

    const userId = sessionStorage.getItem('USER_ID')

    const deleteUser = () =>{
        
       if(window.confirm('Você está certo disto??')){
            axios.delete(`http://localhost:5000/user/delete/${userId}`, {
            }).then(response => {
                console.log(response);
                makeToast('success', response.data.message);
                navigate('/dashboard');
            }).catch(error => {
                console.log(error.response);
                makeToast('error', error.response.data.message);
            });
        }
    };
    return (
         
            <Container>
                <Card>
                    <Card.Header className="delete">Deletar Conta</Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">Nome</div>
                                    Josias do Bate Papo
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">CPF</div>
                                        024.614.222-50
                                    </div>
                                </ListGroup.Item>
                
                            </ListGroup>
                            <Button className='mt-4 delete' onClick={deleteUser}>
                                Deletar
                            </Button>
                    </Card.Body>
                </Card>
            </Container>
      
         
      
    );
};

export default DeletePage;
