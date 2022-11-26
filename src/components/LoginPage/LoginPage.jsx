import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import {
  Container
} from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <Container className='container-default'>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      
      </center>
        

    </Container>
  );
}

export default LoginPage;
