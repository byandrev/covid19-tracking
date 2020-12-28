import '../styles/Charts.css';
import { useState } from 'react';
import ChartData from './ChartData';
import { Box } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="Countries-box">
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}


function Charts({ data, value }) {
  return(
    <section className="Charts">
      <TabPanel value={value} index={0}>
        <ChartData data={data && data.cases} type="cases" colorBG="#607D8B" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChartData data={data && data.deaths} type="deaths" colorBG="#D32F2F" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChartData data={data && data.recovered} type="recovered" colorBG="#388E3C" />
      </TabPanel>
    </section>
  );
}

export default Charts;
