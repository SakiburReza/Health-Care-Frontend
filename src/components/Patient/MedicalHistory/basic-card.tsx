import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router';

export default function BasicCard({text,link} : {text:string,link:string}) {
    const navigate = useNavigate();
  return (
    <Card
  onClick={() => navigate(link)}
    sx={{ width: "100%" }} 
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={require("../images/mh.jpg")}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}
