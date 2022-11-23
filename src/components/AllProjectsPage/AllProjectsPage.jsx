import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AddCollaborators from '../AddCollaborators/AddCollaborators'
import { 
        Button,
        OutlinedInput,
        Autocomplete,
        TextField,
        Box,
        Stack,
        Card,
        CardActionArea
      } from '@mui/material';


function AllProjectsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const projects = useSelector((store) => store.project);
  // new project name set by create new proj button
  const [newProject, setNewProject]  = useState('');

  //gets all projects on load 
  useEffect(() => {
    fetchProjects();
    fetchAllUsers();
  }, []);

  //gets all projects for this user from db
  //TODO make sure it only gets projects from current user
  const fetchProjects = () => {
    dispatch({
      type: 'FETCH_ALL_PROJECTS'
    });
  }

  const fetchAllUsers = () =>{
    dispatch({
      type: 'FETCH_ALL_USERS'
    })
  }

  //dispatches project to saga, redux store, and posts to database
  const postProject = () => {
    dispatch({ 
      type: 'POST_PROJECT', 
      payload: newProject 
    });
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
      <OutlinedInput 
        onChange={(evt) => setNewProject(evt.target.value)}
        placeholder="new project name"
      ></OutlinedInput>

      <Button 
        onClick={postProject}
        variant="contained"
      >
        Create New Project
      </Button>
      
      {user.id && (
      <Box>
      {projects.map(project => 
      
        <Card 
          sx={{width: 500, m: 1}}
          key={project.id}
        >
          <CardActionArea>
            <h3 onClick={() => history.push(`/workspace/${project.id}`)}
            >{project.project_name}</h3>
          </CardActionArea>
            <AddCollaborators 
              projectId={project.id}
            />
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch({type: 'DELETE_PROJECT', payload: project.id})}
              >
              Delete Project
            </Button>
          
          {/* TODO add input autocomplete field to add all users to the project */}
        </Card>
        
        )}
      </Box>
      )}

      {/* TODO when all projects are listed out, pressing on one will push history to project workplace page */}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default AllProjectsPage;
