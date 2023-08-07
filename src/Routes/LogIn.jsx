import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import ResponsiveAppBar from '../components/NavBard';
import Form from '../components/logInForm';
import SignupForm from '../components/SingupForm';
import ExitToAppIcon from '@mui/icons-material/PersonSearch';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box } from '@mui/material';
const LogInForm = () => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState("")
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setHover(`Click to ${checked ? 'Sign up!' : 'Log in!' }`)
  };
  const handleHover = () => {
    setHover(`Click to ${checked ? 'Log in!' : 'Sign up!'}`)

  }
  const handleOut = () => {
    setHover('')
  }
  return (
    <>
      <ResponsiveAppBar />
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          opacity: '99%',
          width: '100vw',
          background: '#080808',
          
        }}
        
      >

        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column-reverse'}}> 
        
        <Switch
        onMouseOver={handleHover}
        onMouseOut={handleOut}
        color='secondary'
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}

          sx={{
            color:'white',
            marginTop: '15px',
            '& .MuiSwitch-track': {
              bgcolor: 'white',
            //   '&:hover': {marginTop: '-30px'}
            },
            
          }}
          icon={
            <div style={{marginBottom:'-15px', backgroundColor: '#cf9fff', width: '20px', height: '20px', borderRadius:'50%', color:'black', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <PersonAddIcon sx={{width: '17px',marginRight: '2px'}}/>
            </div>
          }
          checkedIcon={
            <div style={{backgroundColor: '#cf9fff', width: '20px', height: '20px', borderRadius:'50%', color:'black', display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <ExitToAppIcon sx={{width: '17px',marginLeft: '3px' }}/>
        </div>
          }
        />
               

            <Box  style={{position: 'absolute', marginBottom:'-5vh', color: '#eeefff', display: 'flex', justifyContent: 'center', alignItems: 'center', 
            flexDirection: 'column-reverse'}}>{hover}</Box>
                        <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div
          style={{
            marginTop: '15px',
            perspective: '1000px', // Add perspective for 3D transformation
            transformStyle: 'preserve-3d', // Preserve the 3D transformations
            backgroundColor: 'rgba(255, 255, 255, .85)',
            width: '25vw',
            height: '56vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '25px',
            borderRadius: '10px',
            minWidth: '300px',
            transition: 'transform .4s ease', // Add a transition for the flip effect
            transform: `rotateY(${checked ? 0 : 180}deg)`, // Apply the flip effect based on the switch state
          }}
        >
          <div style={{ transform: `rotateY(${checked ? 0 : -180}deg)` }}>
            {checked ? <SignupForm /> : <Form />}
          </div>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
