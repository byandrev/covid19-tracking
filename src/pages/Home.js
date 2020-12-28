import '../styles/Home.css';
import { useEffect, useState } from 'react';
import ContentMain from '../components/ContentMain';
import Aside from '../components/Aside';
import getCountries from '../services/getCountries';

function Home() {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    let data = await getCountries();
    setCountries(data)
  }

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="Home">
      <ContentMain countries={countries} />
      <Aside countries={countries} />
    </div>
  );
}

export default Home;
