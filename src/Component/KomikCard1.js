import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slide1 from '../Assets/Images/Slide1.jpg';
import Slide2 from '../Assets/Images/Slide2.jpg';
import Slide3 from '../Assets/Images/Slide3.jpg';
import Slide4 from '../Assets/Images/Slide4.jpg';
import Slide5 from '../Assets/Images/Slide5.jpg';
import Slide6 from '../Assets/Images/Slide6.jpg';
import Slide7 from '../Assets/Images/Slide7.jpg';
import Slide8 from '../Assets/Images/Slide8.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import KomentarMuncul from './KomentarMuncul';

const useStyles = makeStyles((theme) => ({
    typography: {
        // paddingBottom:"20px",
        paddingTop:"10px",
        paddingLeft:"15px",
    },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  gambar:{
    height:"100%",
  },
  link: {
    textDecoration:"none",
    color:"#000000",
    // backgroundColor: "#000000",

    '&:hover': {
      textDecoration:"none",
      background: "#ffffffff",
    },
  },
  submitLatihan: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor : "#13C2B6",
    color:"#FFFFFF",
    '&:hover': {
      background: "#21918a",
      textDecoration:"none",
    },
  },
}));



export default function KomikCard1() {
  const classes = useStyles();

  return (
      <main>
        <Typography variant="h6" align="left" className={classes.typography}>
          Nihongo Kira-Kira
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
        
          {/* End hero unit */}
          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.gambar}       
          > 
          <img src={Slide1} alt="slide1" />
          <img src={Slide2} alt="slide2" />
          <img src={Slide3} alt="slide3" />
          <img src={Slide4} alt="slide4" />
          <img src={Slide5} alt="slide5" />
          <img src={Slide6} alt="slide6" />
          <img src={Slide7} alt="slide7" />
          <img src={Slide8} alt="slide8" />
          {/* <Paper className={classes.paper}>
                <Typography>test</Typography>
            </Paper> */}
          </Grid>
          <Link to="/LatihanSoal1" className={classes.link}>
              <Button
                type="submit"
                variant="contained"
                id="Login"
                fullWidth
                className={classes.submitLatihan}
              >
                Latihan
              </Button>
            </Link>
            <br />
            
        </Container>
        <Divider/>
        <KomentarMuncul />
      </main>
  );
}