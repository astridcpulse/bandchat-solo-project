import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';
import AddCollaborators from '../AddCollaborators/AddCollaborators'

import { useParams } from 'react-router-dom';
import './ProjectWorkspace.css'
import { ThemeProvider, 
        TextField, 
        Autocomplete, 
        createMuiTheme, 
        Button, 
        Typography,
        Container
        } 
        from '@mui/material';

import WorkspaceTabs from '../WorkspaceTabs/WorkspaceTabs';


function ProjectWorkspace(){
    const params = useParams();
    const dispatch = useDispatch();
    
    const user = useSelector((store) => store.user);
    const thisProject = useSelector(store => {
        return store.project.find((project) => {
            return project.id == params.id;
        }) || {};
    });

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_PROJECTS', payload: params.id});
    }, [params.id])
 

    //dummy data for <Helper> search and add
    // const helpers = [
    //     {label: 'Cara'},
    //     {label: 'Elena'},
    //     {label: 'Ohna'}
    // ];

    const handleCreatePart = (event) => {
        event.preventDefault();
        dispatch({
            type: 'POST_PART',
            payload: {
                name: event.target.partname.value,
                projectId: params.id
            }
        })
        event.target.partname.value='';
    }

    return (
        <>
            <Container
                className='content'
                // sx={{px: 5}}
            >    
                <Typography
                    // sx ={{
                    //     color: 
                    // }} 
                    variant="h3"
                    align='center'
                > {thisProject.project_name}</Typography>

                <Typography 
                    variant="h5"
                    align='center'
                > PROJECT OWNER: {user.username}</Typography>

                {/* HELPER MUI auto complete, filled with dummy data BUT working
                TODO: get a store of your current collaborators for this to reference */}
                {/* <Autocomplete
                    disablePortal
                    id="helper-input"
                    options={helpers}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Helpers" />}
                /> */}

                {/* COLLABORATOR component moved into project workspace, helpers removed.
                    In future versions moved <Collaborators> to All Projects, and then 
                    <Helpers> to individual parts */}

                    <AddCollaborators
                        projectId={params.id}
                    />
                {/*  create new part */}
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
            </Container>

            {/* background image for page */}
            <img className='projectBackground dimpic' src='/images/the-mountain-goats.jpeg' />

        </>
    );
}



export default ProjectWorkspace;