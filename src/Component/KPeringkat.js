import React from 'react';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';


// Generate Peringkat
function createData(id, peringkat, nama, skor) {
  return { id, peringkat, nama, skor};
}

const rows = [
  createData(0, '1', 'Achvanda May Dellisa Sibarani', 866),
  createData(1, '2', 'Yuwanita Adis Adillia', 654),
  createData(2, '3', 'Fariqa Andzari Najwa',  312),
  createData(3, '4', 'Ricko Aldy Iskandar', 212),
  createData(4, '5', 'Afriza Wihadi', 100),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    textAlign:"left",
    paddingLeft:"10px",
  },
  typographyCard:{
    paddingBottom:"10px",
    paddingTop:"10px",
    paddingLeft:"10px",
  },
  link: {
    textDecoration:"none",
    
    '&:hover': {
      textDecoration:"underline",
    },
  },
}));

export default function KPeringkat() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Typography variant="h5" align="left" className={classes.typographyCard}>
        Peringkat
    </Typography>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell align="center">Peringkat</TableCell>
            <TableCell>Nama Lengkap</TableCell>
            <TableCell>Skor</TableCell>
            {/* <TableCell>Payment Method</TableCell> */}
            {/* <TableCell >Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.peringkat}</TableCell>
              <TableCell>{row.nama}</TableCell>
              <TableCell>{row.skor}</TableCell>
              {/* <TableCell>{row.kelas}</TableCell> */}
              {/* <TableCell >{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" to="/" className={classes.link} onClick={preventDefault}>
          Lihat Selengkapnya
        </Link>
      </div>
    </React.Fragment>
  );
}