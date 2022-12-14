import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Box,
  Typography,
  Container,
  Button,
  CardMedia
}   from '@mui/material';  
import './LandingPage.css';

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
      className="content"
      
    >
      {/* Title logo */}
      <Typography 
          variant='h1'
          sx={{
            fontFamily: 'Rubik Glitch',
            mb:4,
            color: 'text.bandchat'
          }}
          className='title content'
      >{heading}</Typography>

      <div className="content">
        <div>
          
        </div>
        <div>
          <RegisterForm />

          <center>
            <Typography
              sx={{mt: 5}}
            >
              Already a BandChatter?
            </Typography>
            {/* redirects to Login version of front page */}
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
      
      {/* background video on front page */}
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/rooftop_band.mp4" type="video/mp4"/>
      </video>
    </Container>
  );
}

export default LandingPage;
