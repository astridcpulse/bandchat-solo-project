import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Box,
  Typography,
  OutlinedInput
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
        width: '40%',
        display: 'flex',
        justifyContent: 'left'
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
        <Box>
          <label htmlFor="username">
            Username:
            <OutlinedInput
              sx={{
                height: 30
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
                height: 30
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
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </Box>
    </form>
    </Card>
  );
}

export default RegisterForm;
