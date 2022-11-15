import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { Button, OutlinedInput } from '@mui/material';

function AllProjectsPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const [newProject, setNewProject]  = useState('');

  const fetchProjects = () => {
    //TODO create fetch projects GET_PROJECTS
    //TODO put this fetchPrjects function in a useEffect
  }

  const postProject = () => {

    console.log('newproj state', newProject);
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
    </div>
  );
}

// this allows us to use <App /> in index.js
export default AllProjectsPage;
