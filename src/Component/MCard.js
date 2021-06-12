import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import KK1_1 from '../Assets/Images/kk1_1.png';
// import KK1_2 from '../Assets/Images/kk1_2.png';
// import KK1_3 from '../Assets/Images/kk1_3.png';
// import KK1_4 from '../Assets/Images/kk1_4.png';
// import KK2_1 from '../Assets/Images/kk2_1.png';
import KK2_2 from '../Assets/Images/kk2_2.png';
import KK2_3 from '../Assets/Images/kk2_3.png';
import KK2_4 from '../Assets/Images/kk2_4.png';
import KK2_5 from '../Assets/Images/kk2_5.png';
// import KK3_1 from '../Assets/Images/kk3_1.png';
// import KK3_2 from '../Assets/Images/kk3_2.png';
// import KK3_3 from '../Assets/Images/kk3_3.png';
// import KK3_4 from '../Assets/Images/kk3_4.png';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';


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
    paddingTop: '95.25%',
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
  // typographykk1: {
  //   paddingBottom:"20px"
  // },
  typographykk2: {
    // paddingBottom:"20px",
    paddingTop:"10px",
    paddingLeft:"15px",
  },
}));



export default function MCard() {
  const classes = useStyles();

  return (
      <main>
        <Typography variant="h6" align="left" className={classes.typographykk2}>
            Nihongo Kira-kira 2
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        {/* nihongo kira-kira1 */}
        {/* <Typography variant="h6" align="left" className={classes.typographykk1}>
            Nihongo Kira-kira 1
        </Typography>
          <Grid container spacing={4}> */}
            {/* Bab 1 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK1_1}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 1
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> */}
              {/* Bab 2 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK1_2}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                    <Typography variant="body1" className={classes.typography}>
                        Bab 2
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              {/* Bab 3 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK1_3}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 3
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> */}
              {/* Bab 4 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK1_4}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 4
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
          </Grid> */}
          {/* Nihongo Kira-kira 2 */}
        
          <Grid container spacing={4}>
            {/* Bab 13 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK2_1}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/Komik" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 13
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> */}
              {/* Bab 14 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to ="/Komik">
                    <CardMedia
                      className={classes.cardMedia}
                      image={KK2_2}
                      title="Image title"
                    />
                  </Link>
                  <CardActions>
                    <Link to="/Komik" className={classes.link}>
                    <Typography variant="body1" className={classes.typography}>
                        Bab 14
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              {/* Bab 15 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <Link to ="/Komik">
                    <CardMedia
                      className={classes.cardMedia}
                      image={KK2_3}
                      title="Image title"
                    />
                  </Link>
                  <CardActions>
                    <Link to="/Komik" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 15
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              {/* Bab 16 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <Link to ="/Komik">
                    <CardMedia
                      className={classes.cardMedia}
                      image={KK2_4}
                      title="Image title"
                    />
                  </Link>
                  <CardActions>
                    <Link to="/Komik" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 16
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              {/* Bab 17 */}
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <Link to ="/Komik">
                    <CardMedia
                      className={classes.cardMedia}
                      image={KK2_5}
                      title="Image title"
                    />
                  </Link>
                  <CardActions>
                    <Link to="/Komik" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 17
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
          {/* Nihongo Kira-kira 3 */}
        {/* <Typography variant="h6" align="left" className={classes.typographykk2}>
            Nihongo Kira-kira 3
        </Typography> */}
          {/* <Grid container spacing={4}> */}
            {/* Bab 25 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK3_1}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 25
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> */}
              {/* Bab 26 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK3_2}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                    <Typography variant="body1" className={classes.typography}>
                        Bab 26
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> */}
              {/* Bab 27 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK3_3}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 27
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid> */}
              {/* Bab 28 */}
              {/* <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card} >
                  <CardMedia
                    className={classes.cardMedia}
                    image={KK3_4}
                    title="Image title"
                  />
                  <CardActions>
                    <Link to="/" className={classes.link}>
                      <Typography variant="body1" className={classes.typography}>
                        Bab 28
                      </Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
          </Grid> */}
        </Container>
      </main>
  );
}