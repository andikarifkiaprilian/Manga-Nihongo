import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  Typography:{
    color:"#000000",
  },
  link: {
    textDecoration:"none",
    color:"#808080",
    '&:hover': {
      textDecoration:"underline",
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function PBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" >
        <Link href="/LandingPage" className={classes.link} onClick={handleClick}>
          Home
        </Link>
        <Typography className={classes.Typography}>Peringkat</Typography>
      </Breadcrumbs>
    </div>
  );
}