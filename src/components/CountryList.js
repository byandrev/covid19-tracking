import '../styles/CountryList.css';
import CountryItem from './CountryItem';

function CountryList({ countries, type }) {
  return(
    <div className="CountryList">
      {
        countries.map(country => {
          let numbers = 0;
          if(type === 'cases') numbers = country.cases
          if(type === 'deaths') numbers = country.deaths
          if(type === 'recovereds') numbers = country.recovered

          return <CountryItem
                  key={country.country}
                  flag={country.countryInfo.flag}
                  country={country.country}
                  number={numbers}
                />
        })
      }
    </div>
  );
}

export default CountryList;
