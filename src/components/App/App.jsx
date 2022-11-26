import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider} from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css'
import AboutPage from '../AboutPage/AboutPage';
import AllProjectsPage from '../AllProjectsPage/AllProjectsPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProjectWorkspace from '../ProjectWorkspace/ProjectWorkspace';


import Theme from './Theme.jsx';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    
      <ThemeProvider theme={Theme}>
        <Paper
      sx={{
        backgroundColor: 'paper.main', 
        // height: '100vh', 
        width:'100vw'
    }}
      >
      <Router>
        <div>
          
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <Nav />
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
              Visiting localhost:3000/user will show the AllProjectsPage if the user is logged in.
              If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
              Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows AllProjectsPage else shows LoginPage
              exact
              path="/projects"
            >
              <Nav />
              <AllProjectsPage />
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/projects" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/projects" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/projects" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>


            <ProtectedRoute path='/workspace/:id' exact>
            
              <Nav />
              <ProjectWorkspace />
            </ProtectedRoute>    
            

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <Nav />
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
      </Paper>
      </ThemeProvider>
    
  );
}

export default App;
