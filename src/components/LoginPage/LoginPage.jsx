import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import {
  Container,
  Button
} from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <Container 
      align='center'
      className='container-default'>
      <LoginForm />

      <center>
        <Button
          sx={{color: 'secondary.light', borderColor:'secondary.light'}}
          variant='outlined'
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/home');
          }}
        >
          
          Register
        </Button>
      
      </center>
        

    </Container>
  );
}

export default LoginPage;
