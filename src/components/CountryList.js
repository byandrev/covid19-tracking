import '../styles/CountryList.css';
import { useEffect, useState } from 'react';
import CountryItem from './CountryItem';
import getCountries from '../services/getCountries';

function CountryList({ type }) {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    let data = await getCountries();
    setCountries(data)
  }

  useEffect(() => {
    getCountriesData();
  }, []);

  return(
    <div className="CountryList">
      {
        countries.map(country => {
          let numbers = 0;
          if(type === 'cases') numbers = country.cases
          if(type === 'deaths') numbers = country.deaths
          if(type === 'recovereds') numbers = country.recovered

          return <CountryItem key={country.country} country={country.country} number={numbers} />
        })
      }
    </div>
  );
}

export default CountryList;
