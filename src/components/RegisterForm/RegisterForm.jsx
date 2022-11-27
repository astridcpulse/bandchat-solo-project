import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Box,
  Typography,
  OutlinedInput,
  Input,
  Button
}   from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Card 
      sx={{
        boxShadow: 5,
        p: 5,
        width: 350,
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Helvetica, sans-serif',
        border:2,
        borderColor: 'secondary.light'
      }}
    >
    <form className="formPanel" onSubmit={registerUser}>
      <Box sx={{ 
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant='h5'>Register User</Typography>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Box
          sx={{display: 'flex' }}
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
              value={username}
              required
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
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </Box>
        <div>
          <Button variant='contained' 
            type="submit" 
            name="submit" 
            value="Register"
          >
              Register
          </Button>
        </div>
      </Box>
    </form>
    </Card>
  );
}

export default RegisterForm;
