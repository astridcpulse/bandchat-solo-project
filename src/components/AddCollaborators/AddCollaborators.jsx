
import React, { useState} from 'react';

import { Button, OutlinedInput, Autocomplete, TextField } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';

function AddCollaborators(){
    const [value, setValue] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const allUsers = useSelector((store) => store.allUsers);

    return(
        <>
        <Autocomplete
            multiple
            sx={{
              width: 400
            }}
            id="collaborator-input"
            options={allUsers.map((option) => option.username)}
            renderInput={(params) => <TextField {...params} label="Add Collaborator" />}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            
          />
        
        </>
    )
}

export default AddCollaborators;