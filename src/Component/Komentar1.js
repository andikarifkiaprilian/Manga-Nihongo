import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../Assets/Images/avatar.jpg';
// import avatar1 from '../Assets/Images/avatar1.jpg';
import { Divider, Typography, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root:{
    paddingTop:"60px",
    paddingLeft:"20px",
    marginBottom:"30px",
  },
  garis:{
    marginBottom:"25px",
  },
  foto: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  nama: {
    margin:"0px",
    paddingBottom:"6px",
    fontWeight:"bold",
  },
  konten:{
    paddingBottom:"20px",
  },
  post:{
      color:"#808080",
      paddingBottom:"20px",
  },
  // garis1:{
  //   marginTop:"25px",
  //   marginBottom:"20px",
  // },
}));

export default function Komentar1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider className={classes.garis} />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Komatsu Nana" src={avatar} className={classes.foto}/>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="body1" className={classes.nama} align="left">
              Achvanda May Dellisa Sibarani
            </Typography>
            <Typography variant="h6" className={classes.konten} align="left">
                Wah sangat menarik komiknya ditunggu kelanjutannya
            </Typography>
            <Typography variant="body2" className={classes.post} align="left">
            Diposting 1 menit lalu
            </Typography>
          </Grid>
        </Grid>
        {/* <Divider className={classes.garis1}  />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Muhammad Remi" src={avatar1} className={classes.foto}/>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="body1" className={classes.nama} align="left">
                Muhammad Refi
            </Typography>
            <Typography variant="h6" className={classes.konten} align="left">
                Keren jadi gak bosen kalo belajar pake komik
            </Typography>
            <Typography variant="body2" className={classes.post} align="left">
            Diposting 2 Jam lalu
            </Typography>
          </Grid>
        </Grid> */}
      
    </div>
  );
}