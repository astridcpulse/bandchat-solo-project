import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  Button 
} from '@mui/material';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Button
     
      sx={{color: 'secondary.light', borderColor:'secondary.light', mx: 10}}
      variant='outlined'
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
