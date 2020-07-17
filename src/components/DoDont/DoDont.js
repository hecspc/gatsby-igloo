import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DoIcon from '@material-ui/icons/CheckCircle';
import DontIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles({
  root: {
   //  maxWidth: 600,
    marginRight: "16px"
  },
  media: {
    height: 300,
  },
  doContent:{
   borderTop: "green 10px solid",
   paddingLeft: -16,
   marginTop: 16, 
  },
  dontContent:{
   borderTop: "red 10px solid",
   paddingLeft: -16,
   marginTop: 16, 
  },
  doIcon:{
     margin: "8px 8px -10px 8px",
     color: "green",
  },
  dontIcon:{
   margin: "8px 8px -10px 8px",
   color: "red",
}
});

export default function DoDont() {
  const classes = useStyles();

  return (
     <Box display="flex" style={{justifyContent: "space-around"}}>
    <Card className={classes.root} square>
       <DoIcon color="primary" fontSize="large" className={classes.doIcon}>check_circle</DoIcon>
      
        <CardMedia
          className={classes.media}
          image="https://www.carbondesignsystem.com/static/d8f98c7eb6068571b81cf437ef557fec/a5df1/button_usage_12.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.doContent}>
      <Typography color="green" display="inline" style={{color:"green"}}><strong>DO:</strong> </Typography>
          <Typography variant="subtitle1"  display="inline" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>       
        </CardContent>
      
    </Card>
    <Card className={classes.root} square>
       <DontIcon color="primary" fontSize="large" className={classes.dontIcon}>check_circle</DontIcon>
     
        <CardMedia
          className={classes.media}
          image="https://www.carbondesignsystem.com/static/d8f98c7eb6068571b81cf437ef557fec/a5df1/button_usage_12.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.dontContent}>
      <Typography color="green" display="inline" style={{color:"red"}}><strong>DON'T:</strong> </Typography>
          <Typography variant="subtitle1"  display="inline" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>       
        </CardContent>
      
    </Card>
    </Box>
  );
}
