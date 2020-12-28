import { useState, useEffect } from 'react';
import { makeStyles, Card } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    alignItems: 'center'
  },
  number: {
    marginLeft: '1rem'
  },
  left: {
    width: '80px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Cases: {
    backgroundColor: '#607D8B',
  },
  Deaths: {
    backgroundColor: '#D32F2F',
  },
  Recovered: {
    backgroundColor: '#388E3C',
  },
  icon: {
    width: '30px',
    height: '30px',
    display: 'block'
  }
}));

function CardData({ type, number }) {
  const classes = useStyles();
  const [icon, setIcon] = useState('');


  useEffect(() => {
    switch(type) {
      case 'Cases':
        setIcon('https://www.flaticon.es/svg/static/icons/svg/497/497738.svg');
        break;
      case 'Recovered':
        setIcon('https://www.flaticon.es/svg/static/icons/svg/2754/2754791.svg');
        break;
      case 'Deaths':
        setIcon('https://www.flaticon.es/svg/static/icons/svg/855/855016.svg');
        break;
      default:
        setIcon('');
    }
  }, [type]);

  return(
    <Card className={classes.root}>
      <div className={`${classes.left} ${classes[type]}`}>
        <img className={classes.icon} alt={type} src={icon} />
      </div>
      <div className={classes.number}>
        <p>{type}</p>
        <span>{number}</span>
      </div>
    </Card>
  );
}

export default CardData;
