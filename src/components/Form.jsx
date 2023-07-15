import { TextField, Typography } from "@mui/material"
import Button from '@mui/material/Button';

import '../style/board.css'
const Form = () => {



    
    const textFieldStyle = {
        color: "black", // Set the text color to black
        borderRadius: "4px", // Add some border radius for a rounded look
        width: '25vw'

      };
      const placeholderStyle = {
        color: "#181818", // Change the placeholder color here
      };

    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '2vh',
            gap: '3vh'
        }}>
            <h1 className="h1--logIn" style={{textAlign: 'center'}}>Log in to your account</h1>
        <TextField
        required
        id="outlined-basic"
        label="Login"
        variant="outlined"
        color="primary"
        style={textFieldStyle} // Apply the custom style
        InputProps={{
            inputProps: { style: placeholderStyle },
            sx: {
                "& .MuiInputLabel-root": {
                  color: placeholderStyle.color, // Set the label color to the same as placeholder color
                },
            }
          }}

      />
              <TextField
        required
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        color="primary"
        style={textFieldStyle} // Apply the custom style
        InputProps={{
            inputProps: { style: placeholderStyle },
            sx: {
                "& .MuiInputLabel-root": {
                  color: placeholderStyle.color, // Set the label color to the same as placeholder color
                },
            }
          }}

      />
      <Button variant="contained" color="primary">Log In</Button>
      <Typography variant="text" color="primary" sx={{textTransform: 'lowercase ! important', cursor: 'pointer'}}>* If you dont have account, sing up!</Typography>
      </form>
    )
}

export default Form