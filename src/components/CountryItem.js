import {
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  number: {
    textAlign: 'right'
  }
}));

function CountryItem({ country, number }) {
  const classes = useStyles();

  return(
    <ListItem button>
      <ListItemText primary={country} />
      <ListItemText className={classes.number} primary={number} />
    </ListItem>
  );
}

export default CountryItem;
