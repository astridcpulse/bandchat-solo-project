import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

import { 
  Typography,
  Container
} from '@mui/material';

import './Nav.css';
function Nav() {
  const user = useSelector((store) => store.user);
  

  
  return (
    <Container 
      sx={{
        display: 'flex'
      }}
      className="nav"
    >
      <Link to="/home">
        <Typography 
          sx={{
            fontFamily: 'Rubik Glitch',
            color: 'secondary.light'
          }}
          variant='h2' 
          className="nav-title"
        >BandChat</Typography>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </Container>
  );
}

export default Nav;
