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
  IconButton,
  List, 
  ListItem,
  // Link
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
        <Box sx={{display: 'flex'}}>
          <Typography variant='h4' sx={{m:1}}>What is a </Typography>
          <Typography variant='h3' sx={{m:1, fontFamily: 'Rubik Glitch'}}> 
            BandChat?
          </Typography>
        </Box>
        <Box
          sx={{display: 'flex'}}
        >
          <Typography 
            sx={{m:3, maxWidth: '70ch'}}
            variant='h5'
          >
            BandChat is a workspace for musicians to collaborate together on their musical projects without stepping on each other's toes. Everyone can have their own workspace, and with BandChat you wont need to wait til rehearsal to find out what your drummer has been up to!
          </Typography>
          
          <Typography>
            <List>
              <ListItem
                sx={{fontWeight: 'bold', textDecoration: 'underline',}}
              >
                Tech Used
              </ListItem>
              <ListItem> Node.js </ListItem>
              <ListItem> Express.js </ListItem>
              <ListItem> React-Redux-Saga.js </ListItem>
              <ListItem> Javascript </ListItem>
              <ListItem> PostgreSQL </ListItem>
              <ListItem> Material UI </ListItem>
            </List>
          </Typography>
          <Typography>
            <List>
              <ListItem>
                <Link sx={{color: 'secondary.light'}} href='https://www.npmjs.com/package/multer'>
                  Multer
                </Link>
              </ListItem>
              
              <ListItem>
                <Link sx={{color: 'secondary.light'}} href='https://github.com/mattdiamond/Recorderjs'>
                  RecorderJS by Matt Diamond 
                </Link>
              </ListItem>
            </List>
          </Typography>
        </Box>
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
          sx={{m: 2, maxWidth: '80ch'}}
          variant='h6'
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
