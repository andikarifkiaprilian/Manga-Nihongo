import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';

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
    '&:hover': {
      textDecoration:"none",
    },
  },
}));

export default function Komentar() {
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
        {/* <br/> */}
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
        
      </div>
    </form>
  );
}