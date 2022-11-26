import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Box,
  Typography,
  Container,
  Button
}   from '@mui/material';  

import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('BandChat');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Container 
      sx={{
        pt: 20
      }}
      align='center' 
      className="container-default"
    >
      <Typography 
        variant='h1'
        sx={{fontFamily: 'Rubik Glitch', mb:4}}
      >{heading}</Typography>

      <div className="grid">
        <div className="grid-col grid-col_8">
          
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <Typography
              sx={{mt: 5}}
            >
              Already a BandChatter?
            </Typography>
            <Button 
              sx={{color: 'secondary.light', borderColor:'secondary.light'}}
              variant='outlined' 
              className="btn btn_sizeSm" 
              onClick={onLogin}
            >
              Login
            </Button>
          </center>
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
