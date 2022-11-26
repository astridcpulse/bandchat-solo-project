import React from 'react';
import { useHistory } from 'react-router-dom';
import {GitHub} from '@mui/icons-material';

import {
  Box,
  Card,
  CardMedia,
  Typography,
  Link,
  Stack,
  Button,
  IconButton
} from '@mui/material';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const history = useHistory();

  return (
    <Box className="container">
      <Box
        sx={{px:2, pt:7}}
      >
        <Typography variant='h4' sx={{fontFamily: 'Rubik Glitch'}}> 
          What is a BandChat?
        </Typography>
        <Typography 
          sx={{m:3, }}
          variant='h4'
        >
          BandChat is a workspace for musicians to collaborate together on their musical projects without stepping on each other's toes. Everyone can have their own workspace, and with BandChat you wont need to wait til rehearsal to find out what your drummer has been up to!
        </Typography>
      </Box>
      <Card
        sx={{
          display: 'flex',
          height: 350,
          width: 600,
          boxShadow: 5,
          p: 4,
          ml: 5
        }}
      >
        <Stack>
        <Typography 
          sx={{m: 2}}
          variant='h5'
          color='text.secondary'
        > 
          BandChat is solely developed and maintained by Astrid Pulse. She sings and plays guitar. She's the total package. </Typography>
         
          <Button
          sx={{color: 'secondary.light', borderColor:'secondary.light'}}
          variant='outlined' 
          startIcon={<GitHub/>}
          className='navLink' 
          href='https://github.com/astridcpulse'>
            GitHub
          </Button>
        </Stack>
        <CardMedia  
          sx={{
            height: 300, 
            width: 800, 
            border: 5,
            borderRadius: 4,
            p:2
          }}
          image='images/my_linkedin_qr_code.jpeg'>
          <Typography> LinkedIn </Typography>

          
        </CardMedia>
      </Card>
    </Box>
  );
}

export default AboutPage;
