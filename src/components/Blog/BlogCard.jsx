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






const  BlogCard = props => {
    const [isClicked, setIsClicked] = useState(false)
    
    const cardStyle ={
        marginTop: '14vh'
    }

    const handleClick = () => {
        setIsClicked((prevIsClicked) => !prevIsClicked);
        console.log(!isClicked)

    }
    
    return (
        <Card style={cardStyle} sx={{ maxWidth: 345, transition: '.4s ', '&:hover': {bgcolor: '#CF9FFF', cursor: 'pointer'} }} >
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
    )
}

export default BlogCard