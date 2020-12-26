import logo from './logo.svg';
import Customer from './components/customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Component } from 'react';

const styles = theme =>({
  root: {
    width : '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth:1080
  }
})

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: "정성현",
    birthdate: "970510",
    gender: "male",
    occupation: "student"
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: "남동호",
    birthdate: "950829",
    gender: "male",
    occupation: "blockchain developer"
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: "최민성",
    birthdate: "950413",
    gender: "male",
    occupation: "naver webtoon developer"
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthdate</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Occupation</TableCell>
              <TableCell>What Comes Next?</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthdate={c.birthdate} gender={c.gender} occupation={c.occupation} /> })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
