

import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { elements } from '../FENdata';
import { Button } from '@mui/material';

const Intro = () => {
  const [randomPosition, setRandomPosition] = useState('');

  useEffect(() => {
    // Function to pick a random FEN position
    const pickRandomPosition = () => {
      const randomIndex = Math.floor(Math.random() * elements.length);
      const selectedPosition = elements[randomIndex];
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
        marginTop: '10vh',
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
        Learn basic rules of chess!
      </h1>
      <Button variant="outlined" sx={{ 
        color: 'white', width: '10vw', 
        borderRadius: '25px', 
        border: '2px solid #CF9FFF',
        transition: '.5s',
        '&:hover': {
            backgroundColor: '#CF9FFF',
            border: '2px solid #CF9FFF',
            color: 'black'


        }
        }} >Start Course!</Button>
      </div>
      <div
        style={{
          width: '30vw',
          alignSelf: 'center',
          height: 'auto',
        }}
      >
        <Chessboard
          id="BasicBoard"
          arePiecesDraggable={false}
          customDarkSquareStyle={{ backgroundColor: '#CF9FFF' }}
          customLightSquareStyle={{ backgroundColor: '#896da5' }}
          position={randomPosition}
        />
      </div>
    </div>
  );
};

export default Intro;
