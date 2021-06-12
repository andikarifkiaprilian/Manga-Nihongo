import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Komentar1 from './Komentar1';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      paddingTop:"15px",
      paddingLeft:"10px",
    },
  },
  komentar:{
    paddingTop:"20px",
    paddingLeft:"10px",
  },
  link:{
    textDecoration:"none",
    color:"#c4c4c4",
    fontSize:"20px",
    '&:hover': {
      textDecoration:"none",
    },
  },
  submitKomentar:{
    backgroundColor : "#67DC1A",
    color:"#ffffff",
    float:"right",
    
    '&:hover': {
      background: "#4d8727",
      textDecoration:"none",
    },
    
  },
  field:{
    paddingBottom:"10px",
  },
  linkkomentar:{
    textDecoration:"none",
    fontSize:"20px",
    marginBottom:"30px",
    '&:hover': {
      textDecoration:"none",
    },
  },
//   avatar:{
//     paddingBottom:"20px",
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
}));

export default function KomentarMuncul() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography variant="h5" align="left" className={classes.komentar}>
            Komentar{' '} 
            
        </Typography>
        
        <TextField
          id="outlined-multiline-flexible"
          className={classes.field}
          multiline
          rowsMax={4}
          placeholder="Harap gunakan kolom komentar dengan baik. Pembaca yang menulis spam, komentar kasar, dan melanggar akan diblok tanpa peringatan"
          fullWidth
          variant="outlined"
        />
        <br/>
        <Link to="/KomentarBaru" className={classes.linkkomentar}>
            <Button
                type="submit"
                variant="contained"
                id="Komentar"
                justify="space-between"
                className={classes.submitKomentar}
            >
                Posting
            </Button>
        </Link>
        <br/>
        <Komentar1/>
      </div>
    </form>
  );
}