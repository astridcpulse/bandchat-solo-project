
import React, { useEffect, useState} from 'react';

import { Button, OutlinedInput, Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

//passing up the specific project id as a prop
function AddCollaborators({projectId}){
    const dispatch = useDispatch();

    const [value, setValue] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const allUsers = useSelector((store) => store.allUsers);
    const collaborator = useSelector((store) => store.collaborator);

    useEffect(() => {
        fetchCollaborators();
    },[])
    // useSElector the store.collaborators and display them to the dom. 
    // put fetchCollaborators in a useEffect

    const postCollaborators = (evt) => {
        evt.preventDefault();

        for(let person of value){
            // posting directly to server and db, collaborator saga is unused right now
            // console.log('person', person)
            // isolating the id number from the string
            let userId = parseInt(person.split(' ')[person.split(' ').length - 1]);

            // console.log('userid', userId)
            // posting the user id number, and the passed up project id number
            axios.post('/api/collaborators', {userId: userId, projectId: projectId });
            
           
            
        }
        fetchCollaborators();
    }

    const fetchCollaborators = () => {
        dispatch({
            type: 'FETCH_COLLABORATORS',
            payload: projectId
        })
       
    }
    return(
        <>
        <h4> collaborators: </h4>
        <ul>
            {collaborator && collaborator.map((person) => {
                if(person.project_id === projectId){
                    return(
                        <li> {person.username} </li>  
                    )
                }
            })}
            
        </ul>
        
        <form
            onSubmit={postCollaborators}
        >
        <Autocomplete
            multiple
            sx={{
              width: 400
            }}
            id="collaborator-input"
            options={allUsers.map((option) => `${option.username}, ID: ${option.id}`)}
            renderInput={(params) => <TextField {...params} label="Collaborators" />}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            
          />
        <Button 
            sx={{ size: 'small' }}
            variant="contained"
            type="submit"
        >
            add collaborators
        </Button>
        </form>
        </>
    )
}

export default AddCollaborators;