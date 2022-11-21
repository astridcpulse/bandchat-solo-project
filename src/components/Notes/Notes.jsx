import { useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';


import { 
    TextField,
    Button
} from '@mui/material';




function Notes({part}){
    const dispatch = useDispatch();
    const params = useParams();
    
    console.log('params', params)
    return(
        <form>
            <TextField
                defaultValue={part.notes}
                label='notes'
                variant="outlined"
                multiline
                onChange={(evt) => {dispatch({ 
                    type: 'POST_NOTE',
                    payload: {
                        value: evt.target.value,
                        partId: part.id,
                        projectId: params.id,
                        category: "notes"} 
                    })}}
            />
        </form>
    );
}

export default Notes;