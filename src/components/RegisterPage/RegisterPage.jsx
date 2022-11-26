import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import {
  Container
} from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <Container className='container-default'>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </Container>
  );
}

export default RegisterPage;
