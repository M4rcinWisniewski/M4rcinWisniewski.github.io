import { TextField, Typography } from "@mui/material";

const Post = () => {
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
            <TextField variant="outlined" label="TITLE"  color="secondary"required sx={{margin: '2vw', width: '30vw'}} />
            <TextField variant="outlined" label="CONTENT" color="secondary" required multiline sx={{margin: '2vw',  width: '30vw'}}/>
            </div>
        </div>
    </>
  );
};

export default Post;
