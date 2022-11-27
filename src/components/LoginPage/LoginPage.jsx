import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.css'

import {
  Container,
  Button,
  Typography
} from '@mui/material';



function LoginPage() {
  const history = useHistory();
  const [heading, setHeading] = useState('BandChat');


  return (
    <Container 
      sx={{
        pt: 20
      }}
      align='center'
      className='content'>

      <Typography 
          variant='h1'
          sx={{
            fontFamily: 'Rubik Glitch',
            mb:4,
            color: 'text.bandchat'
          }}
          className='title content'
          
      >{heading}</Typography>
      <div className='content'>
        <LoginForm  />
      </div>
      <center class='content'>
        <Button
          sx={{color: 'secondary.light', borderColor:'secondary.light'}}
          variant='outlined'
          type="button"
          className='btn'
          onClick={() => {
            history.push('/home');
          }}
        >
          
          Register
        </Button>
      
      </center>
        
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/rooftop_band.mp4" type="video/mp4"/>
      </video>
    </Container>


// -=----------\

// <Container 
//       sx={{
//         pt: 20
//       }}
//       align='center' 
//       className="container-default"
//     >
//       <Typography 
//         variant='h1'
//         sx={{fontFamily: 'Rubik Glitch', mb:4}}
//       >{heading}</Typography>

//       <div className="grid">
//         <div className="grid-col grid-col_8">
          
//         </div>
//         <div className="grid-col grid-col_4">
//           <RegisterForm />

//           <center>
//             <Typography
//               sx={{mt: 5}}
//             >
//               Already a BandChatter?
//             </Typography>
//             <Button 
//               sx={{color: 'secondary.light', borderColor:'secondary.light'}}
//               variant='outlined' 
//               className="btn btn_sizeSm" 
//               onClick={onLogin}
//             >
//               Login
//             </Button>
//           </center>
//         </div>
//       </div>
//     </Container>

  );
}

export default LoginPage;
