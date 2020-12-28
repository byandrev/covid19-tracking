import { Link } from 'wouter';
import {
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Poppins',
    display: 'flex',
    justifyContent: 'space-between'
  },
  number: {
    textAlign: 'right',
    fontWeight: '200',
    color: '#aaa'
  },
  flag:{
    width: '30px'
  }
}));

function CountryItem({ flag, country, number }) {
  const classes = useStyles();

  return(
    <Link href={`/country/${country}`}>
      <ListItem button className={classes.root}>
        <img className={classes.flag} src={flag} alt={country} />
        <p>{country}</p>
        <p className={classes.number}>{number}</p>
      </ListItem>
    </Link>
  );
}

export default CountryItem;
