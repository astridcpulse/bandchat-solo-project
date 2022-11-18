import {useEffect, useState } from 'react';

import PartWorkspace from '../PartWorkspace/PartWorkspace';

import PropTypes from "prop-types";
import { ThemeProvider, 
    TextField, 
    Autocomplete, 
    createMuiTheme, 
    Button, 
    Typography,
    Tab,
    Tabs, 
    Box
    } from '@mui/material';



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
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
} 

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
}
  


function WorkspaceTabs(){
    const [view, setView] = useState(0);
    const handleChange = (event, newView) => {
        setView(newView);
    };

    return (
        <>
            <Box className="boxDefault" sx={{bgcolor: "whitesmoke"}}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                value={view}
                onChange={handleChange}
                aria-label="part"
                >
                <Tab label="Guitar" {...a11yProps(0)} />
                <Tab label="Bass" {...a11yProps(1)} />
                <Tab label="Drums" {...a11yProps(2)} />
                <Tab label="Lyrics" {...a11yProps(3)} />
                {/* <Tab label="Problems" {...a11yProps(4)} />
                <Tab label="Ally Applications" {...a11yProps(5)} /> */}
                </Tabs>
            </Box>
            <TabPanel value={view} index={0}>
                <PartWorkspace />
            </TabPanel>
            <TabPanel value={view} index={1}>
                <PartWorkspace />
            </TabPanel>
            <TabPanel value={view} index={2}>
               <PartWorkspace />
            </TabPanel>
            <TabPanel value={view} index={3}>
                <PartWorkspace />
            </TabPanel>
            {/* <TabPanel value={view} index={4}>
                <ReportReport />
            </TabPanel>
            <TabPanel value={view} index={5}>
                <AllyApplicationReport />
            </TabPanel> */}
            </Box>
        </>
      );
}

export default WorkspaceTabs;