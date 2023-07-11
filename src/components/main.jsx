import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../style/board.css'

export default function ActionAreaCard(props) {
  return (
    <Card className='' sx={{ width: 345,minWidtsh:300, m: 2, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="course image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.level}
            <br></br>
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}