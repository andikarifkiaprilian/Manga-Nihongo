import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import Swal from 'sweetalert2'
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
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    color:"#c4c4c4",
    paddingBottom:"30px",
  },
  linktypo: {
    textDecoration:"none",
    color:"#c4c4c4",
    '&:hover': {
      textDecoration:"underline",
    },
  },
  avatar: {
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submitRegister: {
    margin: theme.spacing(3, 0, 2),
    fontFamily : "Lexend Deca, sans-serif",
    backgroundColor : "#13C2B6",
    color:"#FFFFFF",
    marginBottom:"6px",
    '&:hover': {
      background: "#21918a",
    },
  },
  link: {
    textDecoration:"none",
  },
  
  copy: {
    fontFamily:"Lexend Deca, sans-serif",
    marginTop: theme.spacing(3),
  },
}));

export default function Register() {
  const classes = useStyles();
  const {register, handleSubmit, control, errors} = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log("registrasi", data);
      return (
        Swal.fire({
          icon: "success",
          title: "Berhasil Mendaftar!",
          text: "Pendaftaran akun sukses"
        }),
        history.push("/LandingPage")
      );
  };

  const [showPassword, setShowPassword] = useState (false);
  const handleClickShowPassword = () => setShowPassword (!showPassword);
  const handleMouseDownPassword = () => setShowPassword (!showPassword);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>
            Register Manga Nihongo
          </h1>
          <p>
            SMAN 110 JAKARTA
          </p>
        <form 
          className={classes.form} 
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                  autoComplete="nama"
                  name="NamaLengkap"
                  variant="outlined"
                  required
                  fullWidth
                  id="Nama"
                  label="Nama"
                  inputRef={register({required: true})}
                  autoFocus
                />
                {errors.NamaLengkap && errors.NamaLengkap.type==="required"(
                <p>Silakkan di isi</p>)}
            </Grid>
            <Grid item xs={12}>
              <TextField
                  autoComplete="kelas"
                  name="kelas"
                  variant="outlined"
                  required
                  fullWidth
                  id="kelas"
                  label="Kelas"
                  inputRef={register({required: true})}
                />
                {errors.Kelas && <p>Silakkan di isi</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                  autoComplete="username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  inputRef={register({required: true})}
                />
                {errors.username && <p>Silakkan di isi</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Alamat Email"
                name="email"
                autoComplete="email"
                inputRef={register({required: true})}
              />
              {errors.email && <p>Silakkan di isi</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                inputRef={register({required: true})}
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel 
                control={
                  <Controller as={Checkbox} control={control} name="setuju" color="secondary" defaultValue={false}/>}
                label="Saya setuju dengan Syarat Penggunaan dan Kebijakan Privasi Manga Nihongo." 
              />
              
            </Grid>
          </Grid>
          {/* <Link to="/LandingPage" className={classes.link}> */}
              <Button
                type="submit"
                variant="contained"
                id="Register"
                fullWidth
                className={classes.submitRegister}
              >
                Register
              </Button>
            {/* </Link> */}
        </form>
      </div>
      <Box mt={5} className={classes.copy}>
        <Copyright />
      </Box>
    </Container>
  );
}