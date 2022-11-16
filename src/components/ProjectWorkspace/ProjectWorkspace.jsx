import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ThemeProvider, 
        TextField, 
        Autocomplete, 
        createMuiTheme, 
        Button, 
        Typography 
        } from '@mui/material';

import Toolbar from '../Toolbar/Toolbar';


function ProjectWorkspace(){
    const params = useParams();
    const dispatch = useDispatch();

    const project = useSelector(store => store.project)
    const user = useSelector((store) => store.user);

    const [thisProject, setThisProject] = useState('');

    const chosenProject = (project.find((project) => {
        if(project.id == params.id){
            return project;
        }
    }))

    useEffect(() => {
        setThisProject(chosenProject);
        dispatch({ type: 'FETCH_PROJECTS'});
    }, [params.id])


    //dummy data for helper search and add
    const helpers = [
        {label: 'Cara'},
        {label: 'Elena'},
        {label: 'Ohna'}
    ];

    return (
        <>
            <Typography 
                variant="h3"
                align='center'
            > {thisProject && thisProject.project_name}</Typography>
            <Typography 
                variant="h5"
                align='center'
            > PROJECT OWNER: {user.username}</Typography>

            {/* MUI auto complete, filled with dummy data BUT working
            TODO: get a store of your current collaborators for this to reference */}
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={helpers}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Helpers" />}
            />

            <Button
                variant="contained"
            > 
                + part
            </Button>

            <Button
                variant="contained"
                color="error"
            >
                Delete Part
            </Button>

            <Toolbar />
        </>
    );
}

export default ProjectWorkspace;