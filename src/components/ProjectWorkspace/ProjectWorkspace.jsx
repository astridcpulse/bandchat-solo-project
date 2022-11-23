import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ThemeProvider, 
        TextField, 
        Autocomplete, 
        createMuiTheme, 
        Button, 
        Typography
        } 
        from '@mui/material';

import WorkspaceTabs from '../WorkspaceTabs/WorkspaceTabs';


function ProjectWorkspace(){
    const params = useParams();
    const dispatch = useDispatch();

    
    const user = useSelector((store) => store.user);
    const project = useSelector(store => store.project)
    const [thisProject, setThisProject] = useState('');


    // const chosenProject = (project.find((project) => {
    //     if(project.id == params.id){
    //         return project;
    //     }
    // }))

    useEffect(() => {
        dispatch({ type: 'FETCH_PROJECT', payload: params.id});
        // setThisProject(chosenProject);
    }, [params.id])
 

    //dummy data for helper search and add
    const helpers = [
        {label: 'Cara'},
        {label: 'Elena'},
        {label: 'Ohna'}
    ];

    const handleCreatePart = (event) => {
        event.preventDefault();
        dispatch({
            type: 'POST_PART',
            payload: {
                name: event.target.partname.value,
                projectId: params.id
            }
        })

    }

    return (
        <>
            <Typography 
                variant="h3"
                align='center'
            > {project && project[0].project_name}</Typography>
            <Typography 
                variant="h5"
                align='center'
            > PROJECT OWNER: {user.username}</Typography>

            {/* MUI auto complete, filled with dummy data BUT working
            TODO: get a store of your current collaborators for this to reference */}
            <Autocomplete
                disablePortal
                id="helper-input"
                options={helpers}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Helpers" />}
            />

            <form
                onSubmit={(evt) => handleCreatePart(evt)}
            >
                <TextField
                    name="partname"
                    placeholder='new part name'
                />
                
                <Button
                    type='submit'
                    variant="contained" 
                > 
                    + part
                </Button>
            </form>
            <WorkspaceTabs />

            

            {/* <AudioRecorder /> */}
        </>
    );
}



export default ProjectWorkspace;