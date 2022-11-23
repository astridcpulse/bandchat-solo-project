import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  Typography
} from '@mui/material';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3> What is BandChat?</h3>
        <Typography>BandChat is a workspace for musicians to collaborate together on their musical projects, without stepping on each others toes. Everyone can have their own workspace, and with BandChat you wont need to wait til rehearsal to learn what your drummer has been up to!</Typography>
      </div>
      <Card
        sx={{
          display: 'flex',
          height: 350,
          width: 600,
          boxShadow: 3,
          p: 5
        }}
      >
        <Typography> 
          BandChat is soley developed and maintained by Astrid Pulse. She sings and plays guitar. Shes the total package. </Typography>
        <CardMedia  
          sx={{
          
            height: 300, 
            width: 300, 
            border: 10,
            borderRadius: 4

          }}
          image='images/my_linkedin_qr_code.jpeg'>
          
        </CardMedia>
      </Card>
    </div>
  );
}

export default AboutPage;
