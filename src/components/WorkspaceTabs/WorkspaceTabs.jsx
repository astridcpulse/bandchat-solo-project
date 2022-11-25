import {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

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
    Box,
    Card,
    Stack
    } from '@mui/material';



// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//         >
//         {value === index && (
//             <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//             </Box>
//         )}
//         </div>
//     );
// } 

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };
  
// function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       "aria-controls": `simple-tabpanel-${index}`,
//     };
// }
  


function WorkspaceTabs(){
    const [view, setView] = useState(0);

    const params = useParams();
    const dispatch = useDispatch();

    const handleChange = (event, newView) => {
        setView(newView);
    };

     // dispatch on load to get parts based on project id (params.id)
     useEffect(() => {
        console.log('params id', params.id);
        dispatch({
            type: 'FETCH_PARTS',
            payload: params.id
        })

    }, [])

    const projectParts = useSelector((store) => store.part);


    const handleDeletePart = (partId) => {
        dispatch({
            type: 'DELETE_PART',
            payload: { 
                partId: partId,
                projectId: params.id
            }
        })

    }
    
    return (
        <>
            <Stack
                direction="column"
                sx={{bgcolor: "primary.light", m:2 }}
            >
                {projectParts && projectParts.map((part) =>  

                <Card
                    key={part.id}
                    sx={{ borderBottom: 1, 
                        borderColor: "divider",
                        bgcolor: 'primary.light',
                        p:10,
                        m:2,
                        display:"flex",
                        boxShadow: 6,
                        border: 2

                    }}
                >
                    <Stack
                    >
                    <Box
                        display='flex'
                        sx={{
                            m: 5
                        }}
                    >
                    <Typography 
                        
                        variant='h5'
                    >
                        {part.part_name}
                    </Typography>
                    <Button
                        // sx={{size: 'small'}}
                        value={part.id}
                        
                        variant="contained"
                        color="error"
                        onClick={(evt) => handleDeletePart(evt.target.value)}
                    >
                    Delete Part
                    </Button>
                    </Box>

                    <Box>
                    <PartWorkspace
                        justifyContent="end"
                        sx={{marginLeft: "auto"}}
                        part={part}
                    />
                    </Box>
                    </Stack>
                    
                </Card>
                )}
            </Stack>


            {/* <Box className="boxDefault" sx={{bgcolor: "whitesmoke"}}>
                    <Tabs
                        value={view}
                        onChange={handleChange}
                        aria-label="part"
                        >
                        {projectParts && projectParts.map((part) =>  
                            <Tab label={part.part_name} {...a11yProps(part.id)} />
                        )} 
                    </Tabs>
                   
                    
                {projectParts && projectParts.map((part) =>  {
                    return(
                    <TabPanel value={view} index={part.id}>
                        <PartWorkspace 
                            stuff={part}
                        />
                    </TabPanel>
                    )}   
                )}
            </Box> */}


        </>
      );
}

export default WorkspaceTabs;


{/* <Box className="boxDefault" sx={{bgcolor: "whitesmoke"}}>
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
                
                </Tabs>
            </Box>
            <TabPanel value={view} index={0}>
                <PartWorkspace 
                    stuff={'test1'}
                />
            </TabPanel>
            <TabPanel value={view} index={1}>
                <PartWorkspace 
                    stuff={'test2'}
                />
            </TabPanel>
            <TabPanel value={view} index={2}>
                <PartWorkspace 
                    stuff={'test3'}
                />
            </TabPanel>
            <TabPanel value={view} index={3}>
                <PartWorkspace 
                    stuff={'test4'}
                />
            </TabPanel> */}