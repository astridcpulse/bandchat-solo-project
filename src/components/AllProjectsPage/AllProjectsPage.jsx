import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import AddCollaborators from '../AddCollaborators/AddCollaborators'
import { 
        Button,
        OutlinedInput,
        Autocomplete,
        TextField,
        Box,
        Stack,
        Card,
        CardActionArea,
        Typography
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
  const postProject = (event) => {
    dispatch({ 
      type: 'POST_PROJECT', 
      payload: newProject 

    });
    document.getElementById('partname').value='';
    setNewProject('');
  }


  return (
    <Box 
      sx={{px: 5, height: '85vh'}}
      className="container"
    >
      <Typography 
        sx={{
          mt:3,
          pt:3,
          ml:3,
          pl:3,
          fontSize: 40
        }}
      >
        {user.username}'s Home Page 
      </Typography>
      <Typography
        sx={{
          ml:3,
          pl:3,
          mb:3,
          pb:3,
          fontSize:20
        }}
      >
        view all your music projects below!
      </Typography>
      
      <OutlinedInput 
        onChange={(evt) => setNewProject(evt.target.value)}
        placeholder="new project name"
        id='partname'
      ></OutlinedInput>

      <Button 
        onClick={postProject}
        variant="contained"
      >
        Create New Project
      </Button>
      
      {user.id && (
      <Box 
        sx={{
          display:'flex',
          wrap:'wrap' 
        }}
        
      >
      {projects.map(project => 
      
        <Card 
          sx={{
            width: 500, 
            borderBottom: 1, 
            borderColor: "divider",
            bgcolor: 'primary.light',
            p: 3,
            m:2,
            boxShadow: 6,
            border: 2,
            
          }}
          key={project.id}
        >
          <CardActionArea>
            <Typography 
              variant='h4'
              font
              onClick={() => history.push(`/workspace/${project.id}` )}
            >
              {project.project_name}
            </Typography>
          </CardActionArea>
          {/* removed <AddCollaborators> and moved to ProjectWorkspace. In future
          move back, add <Helpers> to individual parts */}
            {/* <AddCollaborators 
              projectId={project.id}
            /> */}
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

    </Box>
  );
}

// this allows us to use <App /> in index.js
export default AllProjectsPage;
