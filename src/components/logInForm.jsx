import React, { useState } from 'react';
import { TextField, Typography, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import {Link} from 'wouter';
import { linkStyle } from './NavBard'; // style for link imported from NavBar component
import '../style/style.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Form = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)


  }
  const textFieldStyle = {
    color: 'black',
    borderRadius: '4px',
    width: '25vw',
    minWidth: '300px'
  };

  const placeholderStyle = {
    color: '#181818'
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setLoginError(loginValue.trim().length === 0);
    setPasswordError(passwordValue.trim().length === 0);

    if (loginValue.trim().length > 0 && passwordValue.trim().length > 0) {
      // Proceed with form submission
    }
  };

  const handleLoginChange = (event) => {
    setLoginValue(event.target.value);
    setLoginError(false);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
    setPasswordError(false);
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2vh',
        gap: '3vh'
      }}
      onSubmit={onSubmit}
    >
      <h1 className="h1--logIn" style={{ 
        textAlign: 'center', 
      display: 'flex', 
      justifyContent: 'center',
       alignItems: 'center',
       gap: '.5vw'
       }}>
       <PersonIcon sx={{fontSize: '2.2rem', marginTop: '5px'}}/> Log in
      </h1>
      <TextField
        fullWidth
        required
        id="login"
        label="Login"
        variant="outlined"
        color="secondary"
        style={textFieldStyle}
        InputProps={{
          inputProps: { style: placeholderStyle },
          sx: {
            '& .MuiInputLabel-root': {
              color: placeholderStyle.color
            }
          }
        }}
        value={loginValue}
        onChange={handleLoginChange}
        error={loginError}
      />
      {loginError && (
        <FormHelperText error={loginError}>
          Value is required
        </FormHelperText>
      )}
      <TextField
        required
        id="password"
        label="Password"
        type={visible ? 'text' : 'password'}
        variant="outlined"
        color="secondary"
        style={textFieldStyle}
        InputProps={{
          endAdornment: (          
          <InputAdornment position="end" >
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleVisible}
              edge="end"
            >
            {visible ? <Visibility sx={{width: '25px', color: 'black'}} /> : <VisibilityOff sx={{width: '25px', color: 'black'}} /> }
          </IconButton>
      </InputAdornment>),
          inputProps: { style: placeholderStyle },
          sx: {
            '& .MuiInputLabel-root': {
              color: placeholderStyle.color
            }
          }
        }}
        value={passwordValue}
        onChange={handlePasswordChange}
        error={passwordError}


      />
      {passwordError && (
        <FormHelperText error={passwordError}>
          Value is required
        </FormHelperText>
      )}
      <Button variant="contained" color="secondary" type="submit">
        Log In
      </Button>
      <Typography
        variant="text"
        color="secondary"
        sx={{ textTransform: 'lowercase ! important', cursor: 'pointer' }}
      >
        <Link href="/Signup" style={linkStyle}>* If you don't have an account, sign up!</Link>
      </Typography>
    </form>
  );
};

export default Form;