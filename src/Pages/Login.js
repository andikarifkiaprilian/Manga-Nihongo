import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.typography}>
      {'Copyright © '}
      <Link color="inherit" to="/" className={classes.linktypo}>
        Manga Nihongo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    
  },
  typography: {
    
    color:"#c4c4c4",
  },
  linktypo: {
    textDecoration:"none",
    color:"#c4c4c4",
    '&:hover': {
      textDecoration:"underline",
    },
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/P8gLaJ-PZL0)",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submitLogin: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor : "#67DC1A",
    color:"#FFFFFF",
    '&:hover': {
      background: "#4d8727",
      textDecoration:"none",
    },
  },
  link: {
    textDecoration:"none",
    
  },
  linklupa: {
    textDecoration:"none",
    '&:hover': {
      textDecoration:"underline",
    },
  },
  submitRegister: {
    margin: theme.spacing(3, 0, 2),
    fontFamily : "Lexend Deca, sans-serif",
    backgroundColor : "#13C2B6",
    color:"#FFFFFF",
    marginRight:"30px",
    '&:hover': {
      background: "#21918a",
      
    },
    
  },
}));

export default function Login() {
  const classes = useStyles();
  const {register, handleSubmit, errors} = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log("login", data);
      return (
        Swal.fire({
          icon: "success",
          title: "Berhasil Login!",
          text: "Selamat datang di Manga Nihongo"
        }),
        history.push("/LandingPage")
      );
  };

  const [showPassword, setShowPassword] = useState (false);
  const handleClickShowPassword = () => setShowPassword (!showPassword);
  const handleMouseDownPassword = () => setShowPassword (!showPassword);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>
            Login Manga Nihongo
          </h1>
          <p>
            SMAN 110 JAKARTA
          </p>
          <form className={classes.form} 
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Alamat Email/Username"
              multiline InputProps
              name="email"
              autoFocus
              inputRef={register({required: true})}
            />
            {errors.email && <p>Silakkan di isi</p>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position = "end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            {errors.password && <p>Silakkan di isi</p>}
            <br />
            <Link to="/register" className={classes.link}>
              <Button
                type="submit"
                variant="contained"
                id="Register"
                className={classes.submitRegister}
              >
                Register
              </Button>
            </Link> {' '}
            {/* <Link to="/LandingPage" className={classes.link}> */}
              <Button
                type="submit"
                variant="contained"
                id="Login"
                className={classes.submitLogin}
              >
                Login
              </Button>
            {/* </Link> */}
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2" className={classes.linklupa}>
                  {"Lupa Password?"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}