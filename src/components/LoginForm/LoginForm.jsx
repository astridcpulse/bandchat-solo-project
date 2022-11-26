import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import './LoginForm.css';
import {
  Card,
  Box,
  Typography,
  OutlinedInput,
  Input,
  Button,
  Container
}   from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();


  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Card 
      sx={{
        boxShadow: 5,
        p: 5,
        width: 350,
        display: 'flex',
        justifyContent: 'left',
        fontFamily: 'Helvetica, sans-serif',
        
      }}
    >
    <form className="formPanel" onSubmit={login}>
    <Box sx={{ 
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      <Typography variant='h5'>Login</Typography>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <Box
        sx={{display:'flex'}}  
      >
        <label htmlFor="username">
          Username:
          <OutlinedInput
            sx={{
              justifyContent: 'align-right',
              height: 30,
              m:1
            }}
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </Box>
      <Box>
        <label htmlFor="password">
          Password:
          <OutlinedInput
            sx={{
              justifyContent: 'align-right',
              height: 30,
              m:1
            }}
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </Box>
      <div>
        <Button variant='contained' className="btn" type="submit" name="submit" value="Log In">
            Login
        </Button>
      </div>
      </Box>
    </form>
    </Card>
  );
}

export default LoginForm;
