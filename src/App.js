import './styles/App.css';
import { useEffect, useState } from 'react';
import ContentMain from './components/ContentMain';
import Aside from './components/Aside';
import getCountries from './services/getCountries';

function App() {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    let data = await getCountries();
    setCountries(data)
  }

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="App">
      <ContentMain countries={countries} />
      <Aside countries={countries} />
    </div>
  );
}

export default App;
