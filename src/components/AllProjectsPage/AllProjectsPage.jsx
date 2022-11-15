import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector} from 'react-redux';
import { Button, OutlinedInput } from '@mui/material';
import { useHistory } from 'react-router-dom';

function AllProjectsPage() {
  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const projects = useSelector((store) => store.project);
  // new project name set by create new proj button
  const [newProject, setNewProject]  = useState('');
  
  //gets all projects on load 
  useEffect(() => {
    fetchProjects();
  }, []);

  //gets all projects for this user from db
  //TODO make sure it only gets projects from current user
  const fetchProjects = () => {
    dispatch({
      type: 'FETCH_PROJECTS'
    });
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
      <ul>
      {projects.map(project => 
        <li key={project.id}>
          <h3>{project.project_name}</h3>
        </li>
        )}
      </ul>
      {/* TODO when all projects are listed out, pressing on one will push history to project workplace page */}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default AllProjectsPage;
