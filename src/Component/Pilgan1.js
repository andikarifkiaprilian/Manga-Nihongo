import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LatihanSoal2 from '../Pages/LatihanSoal2';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    paddingLeft:"20px",
    float:"left",
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  Radio:{
      paddingRight:"10px",
      
  },
  submitSoal: {
    margin: theme.spacing(3, 0, 2),
    fontFamily : "Lexend Deca, sans-serif",
    backgroundColor : "#13C2B6",
    color:"#FFFFFF",
    marginBottom:"20px",
    '&:hover': {
      background: "#21918a",
    },
  },
  linksoal: {
    textDecoration:"none",
    paddingTop:"5px",
    marginBottom:"10px",
    color:"#ffffff ",
    '&:hover': {
      textDecoration:"none",
      color:"#ffffff",
    },
  },
}));

export default function ErrorRadios() {
  const classes = useStyles();
  const [openButton, setOpenButton] = React.useState(true); 
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  // const [helperTextBaru, setHelperTextBaru] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'betul') {
      setHelperText('Jawaban Anda benar');
      setError(false);
    } else if (value === 'salah') {
      setHelperText('Maaf, jawaban Anda salah!');
      setError(true);
    } else if (value === 'salah1') {
        setHelperText('Maaf, jawaban Anda salah!');
        setError(true);
    } else if (value === 'salah2') {
        setHelperText('Maaf, jawaban Anda salah!');
        setError(true);
    } else {
      setHelperText('Pilih salah satu jawaban.');
      setError(true);
    }
  };

  const handleOpenButton = () => {
    setOpenButton (false)
  };  

  return (
    <form onSubmit={handleSubmit}>

      <FormControl component="fieldset" error={error} className={classes.formControl}>
        
        <RadioGroup row name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel 
            value="betul" 
            control={<Radio />} 
            label="A. どこ"
            className={classes.Radio} 
          />
          <FormControlLabel 
            value="salah" 
            control={<Radio />} 
            label="B. なに"
            className={classes.Radio} 
           />
          <FormControlLabel 
            value="salah1" 
            control={<Radio />} 
            label="C. だれ"
            className={classes.Radio} 
          />
          <FormControlLabel 
            value="salah2" 
            control={<Radio />} 
            label="D. どうして"
            className={classes.Radio} 
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" 
        variant="outlined" 
        color="primary" 
        className={classes.button}
        onClick={handleOpenButton}
        >
          Periksa jawaban
        </Button>

        
      </FormControl>

      <Button
            type="submit"
            variant="contained"
            id="soal"
            fullWidth
            className={classes.submitSoal}
            disabled = {openButton}          
            >
              <Link to="/LatihanSoal2" className={classes.linksoal}>
                Selanjutnya
              </Link>
      </Button>
      
    </form>
  );
}