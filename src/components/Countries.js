import '../styles/Countries.css';
import React from 'react';
import {
  makeStyles,
  withStyles,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography
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
        <Box p={3}>
          <Typography>{children}</Typography>
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


function Countries() {
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
        <CountryList type="cases" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CountryList type="deaths" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CountryList type="recovereds" />
      </TabPanel>
    </div>
  );
}

export default Countries;
