import '../styles/Countries.css';
import React from 'react';
import {
  makeStyles,
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';
import CountryList from './CountryList';

const AntTab = withStyles((theme) => ({
  root: {
    minWidth: '70px'
  }
}))((props) => <Tab disableRipple {...props} />);


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


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#222529',
    color: '#fff'
  },
  appBar: {
    backgroundColor: '#333639',
    color: '#fff',
    borderRadius: '5px'
  }
}));


function Countries({ countries }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return(
    <div className="Countries">
      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs variant="fullWidth" indicatorColor="primary" value={value} onChange={handleChange} aria-label="simple tabs example">
          <AntTab className={classes.tab} label="Cases" {...a11yProps(0)}></AntTab>
          <AntTab className={classes.tab} label="Deaths" {...a11yProps(1)}></AntTab>
          <AntTab className={classes.tab} label="Recovered" {...a11yProps(2)}></AntTab>
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <CountryList countries={countries} type="cases" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CountryList countries={countries} type="deaths" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CountryList countries={countries} type="recovereds" />
      </TabPanel>
    </div>
  );
}

export default Countries;
