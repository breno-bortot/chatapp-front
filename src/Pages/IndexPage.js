import React from 'react';
import { useNavigate } from 'react-router';

function IndexPage() {
    const navigate = useNavigate();

    React.useEffect(()=> {
        const token = sessionStorage.getItem('CHAT_Token');
        if(!token){
            navigate('user/login');
        } else {
            navigate('/dashboard');
        }
    
       
        // eslint-disable-next-line
    }, []); 

    return (
        <div>
            Index Page
        </div>
    )
}

export default IndexPage
