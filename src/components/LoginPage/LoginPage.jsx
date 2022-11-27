import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.css'

import {
  Container,
  Button,
  Typography
} from '@mui/material';


function LoginPage() {
  const history = useHistory();
  const [heading, setHeading] = useState('BandChat');

// This component has the login elements. The LandingPage has the register elements
  return (
    <Container 
      sx={{
        pt: 20
      }}
      align='center'
      className='content'>

      {/* Title  */}
      <Typography 
          variant='h1'
          sx={{
            fontFamily: 'Rubik Glitch',
            mb:4,
            color: 'text.bandchat'
          }}
          className='title content'
      >{heading}</Typography>
      
      <div className='content'>
        <LoginForm  />
      </div>
      <center class='content'>

        {/* redirects to register version of front page */}
        <Button
          sx={{color: 'secondary.light', borderColor:'secondary.light'}}
          variant='outlined'
          type="button"
          className='btn'
          onClick={() => {
            history.push('/home');
          }}
        >
          Register
        </Button>
      
      </center>
        
      {/* background video on front page */}
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/rooftop_band.mp4" type="video/mp4"/>
      </video>
    </Container>
  );
}

export default LoginPage;
