import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import {
  Container,
  Button
} from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <Container className='container-default'>
      <RegisterForm />

      <center>
        <Button
          sx={{color: 'secondary.light', borderColor:'secondary.light'}}
          variant='outlined'
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </Container>
  );
}

export default RegisterPage;
