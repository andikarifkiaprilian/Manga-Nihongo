import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import avatar from '../Assets/Images/avatar.jpg';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import UbahPass from './UbahPass';


const useStyles = makeStyles((theme) => ({
  bio: {
    paddingLeft:"30px",
    paddingTop:"20px",
    display: 'block',
    '& > *': {
      // margin: theme.spacing(0),
      
    },
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  root:{
    '& .MuiInputBase-input': {
      height:"0.1576em",
      fontSize:"20px",
      borderWidth:"1px",
      border:"solid"
    },
  },
  body: {
    paddingTop:"20px",
  },
  // large: {
  //   width: theme.spacing(15),
  //   height: theme.spacing(15),
  // },
}));

export default function DataProfil() {
  const classes = useStyles();

  return (
    <div className={classes.bio}>
      {/* <Avatar alt="Remy Sharp" src={avatar} className={classes.large} /> */}
      {/* <Typography variant="body1" gutterBottom>Nama Lengkap</Typography> */}
      {/* <label htmlFor="Jumlah Mobil" className={classes.jummobil}> Jumlah Mobil </label> */}
      <form className={classes.form} noValidate>
        <Container>
          <Typography variant="body1" align="left">Nama Lengkap :</Typography>
            <br />
            <TextField
                disabled
                type="text"
                id="outlined-disabled"
                fullWidth
                defaultValue="Achvanda May Dellisa Sibarani"
                variant="outlined"
                className={classes.root}
            />

            <br />
            {/* Kelas */}
            <Typography variant="body1" align="left" className={classes.body}>Kelas :</Typography>
            <br />
            <TextField
                disabled
                type="text"
                id="outlined-disabled"
                fullWidth
                defaultValue="XI Bahasa"
                variant="outlined"
                className={classes.root}
            />
            {/* Email */}
            <Typography variant="body1" align="left" className={classes.body}>Email :</Typography>
            <br />
            <TextField
                type="Email"
                id="outlined"
                fullWidth
                defaultValue="vanda110@gmail.com"
                variant="outlined"
                disabled
                className={classes.root}
            />
            <br />
          </Container>
        </form>
        <UbahPass />
    </div>
  );
}