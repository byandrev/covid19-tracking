import '../styles/CountryInfo.css';
import { useState, useEffect } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from 'wouter';
import getCountryInfo from '../services/getCountryInfo';
import getHistoricalCases from '../services/getHistoricalCases';
import CardData from './CardData';
import Charts from './Charts';

const useStyles = makeStyles(theme => ({
  buttonHome: {
    marginBottom: '1rem',
  },
  buttonHomeLink: {
    color: '#fff'
  }
}));


function CountryInfo({ country }) {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [value, setValue] = useState(0);

  const getData = async () => {
    let resData = await getCountryInfo(country);
    setData(resData);
    getHistoricalData(country);
  }

  const getHistoricalData = async (country) => {
    let resData = await getHistoricalCases(country, 'all');
    setHistoricalData(resData);
  }

  useEffect(() => {
    getData();
  }, [country]);


  if(!data) {
    return <div className="CountryInfo"><span>Loading ...</span></div>
  }

  return(
    <div className="CountryInfo">
      <Button className={classes.buttonHome} variant="contained" color="primary"><Link className={classes.buttonHomeLink} href="/">To home</Link></Button>
      <h1>{data.country} <img className="CountryInfo-flag" alt={data.country} src={data.countryInfo.flag} /></h1>

      <section className="CountryInfo-ListCards">
        <div className="CountryInfo-card" onClick={() => setValue(0)}>
          <CardData key={0} type="Cases" number={data.cases} />
        </div>
        <div className="CountryInfo-card" onClick={() => setValue(1)}>
          <CardData key={1} type="Deaths" number={data.deaths} />
        </div>
        <div className="CountryInfo-card" onClick={() => setValue(2)}>
          <CardData key={2} type="Recovered" number={data.recovered} />
        </div>
      </section>

      <Charts value={value} data={historicalData.timeline && historicalData.timeline} />
    </div>
  );
}

export default CountryInfo;
