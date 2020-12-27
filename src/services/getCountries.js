async function getCountries() {
  let res = await fetch('https://disease.sh/v3/covid-19/countries');
  let data = await res.json();
  return data;
}

export default getCountries;
