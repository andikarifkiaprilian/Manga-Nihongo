// header baru
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import KPeringkat from '../Component/KPeringkat';
import PBreadcrumbs from '../Component/PBreadcrumbs';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.typography}>
      {'Copyright © '}
      <Link color="inherit" to="/LandingPage" className={classes.linktypo}>
        Manga Nihongo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  submitLogout:{
    backgroundColor:"#1837E2",
    color:"#FFFFFF",
    '&:hover': {
      background: "#1026A3",
    },
  },
  linkkeluar: {
    textDecoration:"none",
  },
  menuButton: {
    marginRight: 36,
  },
  typographyApp: {
    fontFamily:"Lexend Deca, sans-serif",
    paddingRight:"75%",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  list: {
    fontFamily:"Lexend Deca, sans-serif",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(1),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  typography: {
    fontFamily:"Lexend Deca, sans-serif",
    color:"#c4c4c4",
  },
  typographyCard:{
    paddingLeft:"25px",
    paddingTop:"10px",
  },
  link: {
    textDecoration:"none",
    color:"#000000",
    '&:hover': {
      textDecoration:"underline",
    },
  },
  linktypo: {
    textDecoration:"none",
    color:"#c4c4c4",
    '&:hover': {
      textDecoration:"underline",
    },
  },
}));

export default function Peringkat() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.typographyApp}>
            Manga Nihongo
          </Typography>
          <Link to="/" className={classes.linkkeluar}>
          <Button
                type="submit"
                variant="contained"
                id="Register"
                className={classes.submitLogout}
              >
                Keluar
              </Button>
              </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List >
          <Link to="/LandingPage" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          {/* <Link to="/Materi" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Materi"} />
            </ListItem>
          </Link> */}
          <Link to="/Peringkat" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={"Peringkat"} />
            </ListItem>
          </Link>
          <Link to="/Profil" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={"Profil"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      {/* main */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
              {/* breadcrumbs */}
              <Grid item xs={12}>
                  <PBreadcrumbs />
              </Grid>
              {/* buku */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {/* <Typography variant="h5" align="left" className={classes.typographyCard}>
                      Peringkat
                    </Typography> */}
                    <KPeringkat />
                </Paper>
              </Grid>
          </Grid>
        </Container>
        <Box pt={4}>
            <Copyright />
        </Box>
      </main>
    </div>
  );
}