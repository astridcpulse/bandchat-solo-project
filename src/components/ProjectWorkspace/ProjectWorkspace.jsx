import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ThemeProvider, createMuiTheme, Typography } from '@mui/material';


function ProjectWorkspace(){
    const params = useParams();
    const dispatch = useDispatch();

    const project = useSelector(store => store.project)

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


    return (
        <>
            <Typography 
                variant="h3"
                align='center'
            > {thisProject && thisProject.project_name}</Typography>
        </>
    );
}

export default ProjectWorkspace;