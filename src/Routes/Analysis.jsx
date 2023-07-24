import { Box, TextField } from "@mui/material"
import { Chessboard } from "react-chessboard"
import ResponsiveAppBar from "../components/NavBard"
import React, { useState } from 'react';
const Analysis = () => {

    const [FEN, setFEN] = useState('start');

    return (
        <>
            <ResponsiveAppBar/>
            <Box sx={{width: '100vw', 
            height: '90vh', 
            marginTop: '9vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',}}>
                <Box sx={{width: '40vw', 
                display:'flex',}}>
                    <Chessboard 
                    id='analysis'
                    position={FEN}
                    customDarkSquareStyle={{ backgroundColor: '#CF9FFF' }}
                    customLightSquareStyle={{ backgroundColor: '#896da5' }}
          />

                </Box>
                <Box sx={{ borderRadius: '10px', 
                backgroundColor: 'rgba(32, 32, 32, 0.3)', 
                width: '30vw', 
                marginLeft: '5vw', 
                height: '85vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection:'column',
                gap: '1vw'}}>
                    <TextField id='fen' variant="outlined" label='FEN'  onChange={(e) => setFEN(e.target.value)}  sx={{

                    "& .MuiInputLabel-root": {color: 'white'},
                    "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "#eeefff" },
                    '&:hover': {
                        "& > fieldset": { borderColor: "#CF9FFF" }
                    },

                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        
                        "& > fieldset": {
                  borderColor: "#896da5",
                  
                        }
                      },

                    }} 
                    inputProps={{ style: { color: "white" } }}
                    ></TextField>
                </Box>

            </Box>
        </>
    )
}

export default Analysis

