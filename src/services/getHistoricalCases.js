async function getHistoricalCases(country, lastDays) {
  let res = await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=${lastDays}`);
  let data = await res.json();
  return data;
}

export default getHistoricalCases;
