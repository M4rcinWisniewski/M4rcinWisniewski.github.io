

import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { chessPositions } from '../../data/FENdata';
import { Button, Typography, Box } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Intro = () => {
  const [randomPosition, setRandomPosition] = useState('');

  useEffect(() => {
    // Function to pick a random FEN position
    const pickRandomPosition = () => {
      const randomIndex = Math.floor(Math.random() * chessPositions.length);
      const selectedPosition = chessPositions[randomIndex];
      setRandomPosition(selectedPosition);
    };

    // Pick a random position initially
    pickRandomPosition();

    // Execute the function every 5 seconds
    const intervalId = setInterval(pickRandomPosition, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        width: '100vw',
        marginTop: '6vh',
        height: '90vh',
        gap: '15vw',
       
      }}
    >
      <div><h1
        style={{
          fontSize: '4rem',
          width: '30vw',
          color: '#CF9FFF',
          fontFamily: 'Inter, sans-serif',
          textShadow: '4px 4px 6px #755991',
          alignSelf: 'flex-start',
          marginTop: '12vh',
        }}
      >
        First steps at chess!
      </h1>
      <Typography sx={{
        width: '25vw',
        color: '#eeefff',
        fontFamily: 'Inter, sans-serif',
        fontSize: '.9rem'
      }}>
        Your friend challenged you to play but you dont know how? 
        Or you just allways wanted to learn basics but never found time to do it? Now you have a chance!
        Dive in to our "First steps at chess" and start playing chess!
      </Typography>
      <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', gap:'.5vw', marginTop: '5vh'}}>
      <Button variant="outlined" sx={{ 
         color: 'white', width: '9.8vw', 
        borderRadius: '25px', 
        border: '2px solid #CF9FFF',
        transition: '.6s',
        fontWeight: '700',
        fontFamily: 'Inter, sans-serif',
        filter: 'drop-shadow(0px 0px 25px #CF9FFF)',
        '&:hover': {
            backgroundColor: '#CF9FFF',
            border: '2px solid #CF9FFF',
            color: 'black',
            filter: 'drop-shadow(0px 0px 5px #CF9FFF)'


        }
        }} >Start Course!</Button>
        <Typography sx={{
            color: "#eeefff",
            textAlign: 'center',
            width: '30px',
            height: '28px'
            }}>
                <LockOpenIcon sx={{color: 'green'}}/>
        </Typography>
        </div>
      </div>
      <div
        style={{
          width: '30vw',
          alignSelf: 'center',
          height: 'auto',
        }}
      >
        <Box sx={{filter: 'drop-shadow(0px 0px 15px #CF9FFF)', transition: '1s', '&:hover':{filter: 'drop-shadow(0px 0px 30px #CF9FFF)'}}}><Chessboard
          id="BasicBoard"
          arePiecesDraggable={false}
          customDarkSquareStyle={{ backgroundColor: '#CF9FFF' }}
          customLightSquareStyle={{ backgroundColor: '#896da5' }}
          position={randomPosition}
          areArrowsAllowed={false}
        />
        </Box>
      </div>
    </div>
  );
};

export default Intro;
