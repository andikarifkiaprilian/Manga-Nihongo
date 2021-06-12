import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nkira1 from '../Assets/Images/Nkira-1.png';
import Nkira2 from '../Assets/Images/Nkira-2.png';
import NKira3 from '../Assets/Images/Nkira-3.png';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '90.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  link: {
    textDecoration:"none",
    color:"#000000",
    // backgroundColor: "#000000",
    fontFamily:"Lexend Deca, sans-serif",
    '&:hover': {
      textDecoration:"underline",
      background: "#ffffffff",
    },
  },
  typography: {
    fontFamily:"Lexend Deca, sans-serif",
  },
}));



export default function HCard() {
  const classes = useStyles();

  return (
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* nihongo kira-kira1 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Nkira1}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Nihongo Kira-kira 1
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              {/* Nihongo kira-kira 2 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Nkira2}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                    <Typography variant="body1" className={classes.typography}>
                        Nihongo Kira-kira 2
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              {/* nihongo kira-kira 3 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={NKira3}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Nihongo Kira-kira 3
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
  );
}