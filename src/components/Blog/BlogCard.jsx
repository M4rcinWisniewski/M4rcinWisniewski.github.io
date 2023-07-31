import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import image from "../../static/dataImages/start.png";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Post from './PostForm'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





const  BlogCard = props => {
    const [isClicked, setIsClicked] = useState(false)
    const [isToggle, setIsToggle] = useState(false)
    
    const cardStyle ={
        marginTop: '14vh',
        
    }

    const handleClick = () => {
        setIsClicked((prevIsClicked) => !prevIsClicked);

    }

    const toggleForm = () => {
      setIsToggle((prevIsToggle) => !prevIsToggle)
    }
    
    return (
      <main style={{display: 'flex', justifyContent:'center', alignItems:'flex-start',flexDirection: 'column', width:'100vw', zIndex: 0}}>
      
      <Button onClick={toggleForm} variant="conteined" style={{
        backgroundColor: '#CF9FFF'
      
    }} sx={{
        top: '12%', 
      left: '2%',
       zIndex:'5', 
      position: 'fixed',
       color: '#eeefff', 
      borderColor:'#CF9FFF', '&:hover': {
        outline: isToggle ? '2px black solid' : '2px #eeefff solid',
        borderColor:'#CF9FFF', outlineOffset:'.15rem'}, width: '.5vw'
        }}>
        {isToggle ? <ArrowBackIcon sx={{color: '#181818'}} value="add"/>: <AddIcon sx={{color: '#181818'}}/>}
      </Button>
      {isToggle && <Post style={{zIndex: 3}} />}
      <div style={{display:'flex', justifyContent: 'center', width:'100vw'}}>
        <Card style={cardStyle} sx={{ borderRadius:'0', maxWidth: 345, transition: 'ease', width:'20vw', zIndex: 0,
         '&:hover': { outline:' 3px #CF9FFF solid', cursor: 'pointer', outlineOffset: '.2rem'} }} >
      <CardHeader sx={{}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.image}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="someones article"
        sx={{display:'flex', justifyContent:'center', alignItems:'center', width: '100%'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClick} style={{color: isClicked ? 'rgba(244, 58, 71, 1)' : ''}} id='like'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
        
    </Card>
    </div>
    </main>
    )
}

export default BlogCard