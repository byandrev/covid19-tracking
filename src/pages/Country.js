import '../styles/Home.css';
import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import CountryInfo from '../components/CountryInfo';
import Aside from '../components/Aside';
import getCountries from '../services/getCountries';

function Country() {
  const [match, params] = useRoute('/country/:id');
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    let data = await getCountries();
    setCountries(data)
  }

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="Home Country">
      <CountryInfo country={params.id} />
      <Aside countries={countries} />
    </div>
  );
}

export default Country;
