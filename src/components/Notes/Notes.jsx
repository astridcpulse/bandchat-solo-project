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
    
    const handleSubmit = () => { 
        event.preventDefault();
        dispatch({ 
            type: 'UPDATE_PART',
            payload: part 
            });
    }

    return(
        <form
            //post to saga on submit
            onSubmit={() => handleSubmit()}
        >
            <Stack
                sx={{mx:5, width: 400}}
            >
                <TextField
                    sx={{
                        bgcolor: '#D8D8D8',
                        border: 2,
                        borderColor: 'primary.dark'
                    }}
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