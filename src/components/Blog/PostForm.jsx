import { Button, TextField, Typography } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

const Post = () => {
  const [selectedFile, setSelectedFile] = useState('');
  const [titleValue, setTitleValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (newValue) => {
    setSelectedFile(newValue)
  }
  const toggleErrorFile = () => {
    if (selectedFile === '') {
      setValue(true); // Input is empty, so set value to true
    } else if(selectedFile !== '') {
      setValue(false); // Input has a value, so set value to false
    }
  };
  const toggleErrorTitle = () => {
    if (titleValue === '') {
      return(setTitle(true))
    }
    else {
      return(setTitle(false))
    }
  }
  const toggleErrorDescription = () => {
    if (description === '') {
      return(setDescription(true))
    }
    else {
      return(setDescription(false))
    }
  }

  const toggleError = () =>{
    toggleErrorFile()
    toggleErrorTitle()
    toggleErrorDescription()
  }
  return (
    <>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Background color with transparency
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1', // Ensure it appears above the Card
        
    }}>
        <div style={{display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
            <Typography>ADD POST</Typography>
            <TextField
                id="name"
                error={title} // The error prop should be set to title (boolean)
                value={titleValue} // Use the titleValue state for input value
                onChange={(e) => setTitleValue(e.target.value)} // Update the titleValue state as the user types
                variant="filled"
                label="TITLE"
                color="secondary"
                required
                sx={{ margin: '2vw', width: '30vw' }}
            />
            
             <MuiFileInput
             variant="filled"
             id="img"
              onChange={handleChange}
              color="secondary" // Use secondary color
              label="LOAD POST IMAGE" // Custom label
              value={selectedFile}
              error={value}
              sx={{
                margin: '2vw', // Custom margin
                width: '30vw', // Custom width
                // height: '15vh',
                cursor: 'pointer',
              }}
            />
            <TextField
                error={description} // The error prop should be set to title (boolean)
                value={descriptionValue} // Use the titleValue state for input value
                onChange={(e) => setDescriptionValue(e.target.value)} // Update the titleValue state as the user types
                variant="filled"
                label="TITLE"
                color="secondary"
                required
                sx={{ margin: '2vw', width: '30vw' }}
                id="des"
            />
            <Button onClick={toggleError}  sx={{margin: '2vw',  width: '30vw', bgcolor: '#cf9fff', color: 'black', '&:hover': {
              color: '#bf2fff'
            }}}>Post</Button>
            </div>
            
        </div>
    </>
  );
};

export default Post;
