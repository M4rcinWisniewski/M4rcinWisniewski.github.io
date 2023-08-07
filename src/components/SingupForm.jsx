import React, { useState } from 'react';
import { TextField, Typography, FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import '../style/style.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

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

    setUsernameError(username.trim().length === 0);
    setPasswordError(password.trim().length === 0);
    setConfirmPasswordError(confirmPassword.trim().length === 0);
    setEmailError(email.trim().length === 0 || !validateEmail(email));

    if (
      username.trim().length > 0 &&
      password.trim().length > 0 &&
      confirmPassword.trim().length > 0 &&
      email.trim().length > 0 &&
      validateEmail(email)
    ) {
      // Proceed with form submission
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
      <h1
        className="h1--logIn"
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '.5vw',
          marginBottom: '5px'
        }}
      >
        <PersonAddIcon sx={{ fontSize: '2.2rem', marginTop: '5px' }} /> Sign up
      </h1>
      <TextField
        fullWidth
        required
        id="username"
        label="Username"
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
        value={username}
        onChange={handleUsernameChange}
        error={usernameError}
      />
      {usernameError && (
        <FormHelperText error={usernameError}>Value is required</FormHelperText>
      )}
            <TextField
        required
        id="email"
        label="Email"
        type="email"
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
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      {emailError && (
        <FormHelperText error={emailError}>Invalid email</FormHelperText>
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
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleVisible}
                edge="end"
              >
                {visible ? (
                  <Visibility sx={{ width: '25px', color: 'black' }} />
                ) : (
                  <VisibilityOff sx={{ width: '25px', color: 'black' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
          inputProps: { style: placeholderStyle },
          sx: {
            '& .MuiInputLabel-root': {
              color: placeholderStyle.color
            }
          }
        }}
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
      {passwordError && (
        <FormHelperText error={passwordError}>Value is required</FormHelperText>
      )}
      <TextField
        required
        id="confirmPassword"
        label="Confirm Password"
        type={visible ? 'text' : 'password'}
        variant="outlined"
        color="secondary"
        style={textFieldStyle}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleVisible}
                edge="end"
              >
                {visible ? (
                  <Visibility sx={{ width: '25px', color: 'black' }} />
                ) : (
                  <VisibilityOff sx={{ width: '25px', color: 'black' }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
          inputProps: { style: placeholderStyle },
          sx: {
            '& .MuiInputLabel-root': {
              color: placeholderStyle.color
            }
          }
        }}
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={confirmPasswordError}
      />
      {confirmPasswordError && (
        <FormHelperText error={confirmPasswordError}>
          Value is required
        </FormHelperText>
      )}



      <Button variant="contained" color="secondary" type="submit">
        Sign Up
      </Button>
      <Typography
        variant="text"
        color="secondary"
        sx={{ textTransform: 'lowercase ! important', cursor: 'pointer' }}
      ></Typography>
    </form>
  );
};

export default SignupForm;
