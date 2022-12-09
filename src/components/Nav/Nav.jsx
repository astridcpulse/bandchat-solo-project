import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

import { 
  Typography,
  Container,
  Button,
  Link
} from '@mui/material';

import './Nav.css';
function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  
  return (
    <Container 
      maxWidth
      sx={{
        display: 'flex',
        bgcolor: 'primary.dark',
        boxShadow: 5
      }}
      className="nav"
    >
      <Link variant='inherit' underline='none' href="https://band-chat.herokuapp.com/#/projects">
        <Typography 
          sx={{
            fontFamily: 'Rubik Glitch',
            color: 'rgba(255, 255, 255, 0.85)'
          }}
          variant='h2' 
          className="nav-title"
        >
          BandChat
        </Typography>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links

          <Button 
            sx={{color: 'secondary.light', borderColor:'secondary.light', mx: 10}}
            variant='outlined' 
            className='navLink' 
            onClick={() => {
            history.push('/login');
          }}>
          Login /Register
          </Button>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}
        <Button 
          sx={{color: 'secondary.light', borderColor:'secondary.light'}}
          variant='outlined' 
          className='navLink' 
          onClick={() => {
            history.push('/about');
          }}>
          About
        </Button>
        
      </div>
    </Container>
  );
}

export default Nav;
