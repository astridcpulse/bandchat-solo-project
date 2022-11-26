import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Box,
  Typography,
  Container
}   from '@mui/material';  

import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('BandChat');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Container className="container-default">
      <Typography 
        variant='h1'
        sx={{fontFamily: 'Rubik Glitch'}}
      >{heading}</Typography>

      <div className="grid">
        <div className="grid-col grid-col_8">
          
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
