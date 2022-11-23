import { useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';


import { 
    TextField,
    Button,
    Stack
} from '@mui/material';




function Notes({part}){
    const dispatch = useDispatch();
    const params = useParams();
    
    const handleSubmit = (value) => { 
        event.preventDefault();
        console.log('notes value', value)
    //     dispatch({ 
    //         type: 'POST_NOTE',
    //         payload: {
    //             value: value,
    //             partId: part.id,
    //             projectId: params.id,
    //             } 
    //         });
    }

    return(
        <form
            //post to saga on submit
            onSubmit={(evt) => handleSubmit(evt.target.notes.value)}
        >
            <Stack>
                <TextField
                    defaultValue={part.notes = null ? '' : part.notes}
                    label='notes'
                    name='notes'
                    variant="outlined"
                    multiline
                    //update redux onChange
                    onChange={(evt) => dispatch({ 
                        type: 'EDIT_PART_NOTE',
                        payload: {
                            notes: evt.target.value,
                            partId: part.id,
                            projectId: params.id,
                            }
                        })}
                />
                <Button 
                    type='submit'
                    variant='contained'
                >
                    Save Notes
                </Button>
            </Stack>
        </form>
    );
}

export default Notes;