import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop:"40px",
    marginBottom:"35px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    paddingRight:"250px",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  UbahPass: {
    '& .MuiInputBase-input': {
        height:"0.1576em",
        fontSize:"20px",
      },
  },
  body: {
    paddingTop:"20px",
  },
  link: {
    textDecoration:"none",
  },
  submitPassword: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor :"#67DC1A",
    color:"#FFFFFF",
    '&:hover': {
      background: "#4d8727",
    },
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {register, handleSubmit, errors} = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log("registrasi", data);
    if (data.password2 === data.password3) {
      return (
        Swal.fire({
          icon: "success",
          title: "Berhasil Merubah Password!",
          text: "Selamat Anda berhasil merubah password"
        }),
        history.push("/LandingPage")
      );
    } else if (
      data.password2 !== data.password3
    ) {
      return Swal.fire({
        icon: "error",
        title: "Password Tidak Sama!",
        text: "Perhatikan lagi pengisian passwordnya"
      });
    }
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

//show password lama
  const [showPassword, setShowPassword] = useState (false);
  const handleClickShowPassword = () => setShowPassword (!showPassword);
  const handleMouseDownPassword = () => setShowPassword (!showPassword);
//show password baru
const [showPasswordBaru, setShowPasswordBaru] = useState (false);
const handleClickShowPasswordBaru = () => setShowPasswordBaru (!showPasswordBaru);
const handleMouseDownPasswordBaru = () => setShowPasswordBaru (!showPasswordBaru);
//show password baru2
const [showPasswordBaruDua, setShowPasswordBaruDua] = useState (false);
const handleClickShowPasswordBaruDua = () => setShowPasswordBaruDua (!showPasswordBaruDua);
const handleMouseDownPasswordBaruDua = () => setShowPasswordBaruDua (!showPasswordBaruDua);


  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Ubah Password</Typography>
          
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <Divider /> 
        <AccordionDetails>
        
        <form className={classes.form} 
          onSubmit={handleSubmit(onSubmit)}
        >
            <br/>
            {/* Password Lama */}
            <Typography variant="body1" align="left">Password Lama :</Typography>
                <br />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={classes.UbahPass}
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
                <br />
                {/* Password Baru */}
            <Typography variant="body1" align="left" className={classes.body}>Password Baru :</Typography>
                <br />
                <TextField
                   variant="outlined"
                   margin="normal"
                   required
                   fullWidth
                   name="password2"
                   type={showPasswordBaru ? "text" : "password"}
                   id="password"
                   className={classes.UbahPass}
                   inputRef={register({required: true})}
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position = "end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordBaru}
                          onMouseDown={handleMouseDownPasswordBaru}
                        >
                          {showPasswordBaru ? <Visibility /> : <VisibilityOff/>}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                {errors.password2 && <p>Silakkan di isi</p>}
                {/* Konfirmasi Password */}
            <Typography variant="body1" align="left" className={classes.body}>Konfirmasi Password :</Typography>
                <br />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password3"
                    type={showPasswordBaruDua ? "text" : "password"}
                    id="password"
                    className={classes.UbahPass}
                    inputRef={register({required: true})}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position = "end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordBaruDua}
                            onMouseDown={handleMouseDownPasswordBaruDua}
                          >
                            {showPasswordBaruDua ? <Visibility /> : <VisibilityOff/>}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                />
                {errors.password3 && <p>Silakkan di isi</p>}
                <br />
                {/* <Link to="/LandingPage" className={classes.link}> */}
                    <Button
                        type="submit"
                        variant="contained"
                        id="UbahPassword"
                        fullWidth
                        className={classes.submitPassword}
                    >
                        <Typography>Simpan</Typography>
                    </Button>
                {/* </Link> */}
        </form>
        </AccordionDetails>
      </Accordion>
      </div>
    );
}