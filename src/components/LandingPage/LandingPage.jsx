import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import {
  Card,
  Box
}   from '@mui/material';  

import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('BandChat');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box className="container">
      <h1>{heading}</h1>

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
    </Box>
  );
}

export default LandingPage;
