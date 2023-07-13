import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../style/board.css'


export default function ActionAreaCard(props) {
  return (
    <Card className='card' sx={{
      transition: '.7s',
      m: 5,
      marginBottom: '0',
      boxShadow: '0px 2px 35px -9px #555',
      "&:hover": {
      boxShadow: '0px 8px 35px 2px rgba(207, 159, 255, 1)'} ,
      border: "1px solid ",
      borderRadius: '15px'}}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="110"
          image={props.image}
          alt="course image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.level}
            {props.price}
            <br></br>
            <span style={{color: '#CF9FFF', fontWeight: '600', fontSize: '1rem', display: 'flex'}}>Read more< ArrowForwardIcon sx={{width: '1.2rem'}}/></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}