async function getCountryInfo(country) {
  let res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
  let data = await res.json();
  return data;
}

export default getCountryInfo;
