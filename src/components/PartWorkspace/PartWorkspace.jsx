import {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {
    ButtonGroup, 
    Button, 
    Typography,
    Box 
} from '@mui/material';

import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Notes from '../Notes/Notes';
import Chords from '../Chords/Chords';

function PartWorkspace({part}){
    //local state to display or take away the tool elements from the workspace
    const [recordStatus, setRecordStatus] = useState(false);
    const [notesStatus, setNotesStatus] = useState(false);
    const [chordsStatus, setChordsStatus] = useState(false);

    const dispatch = useDispatch();
    const params = useParams();


    useEffect(() => {
        checkExists()
    }, [])


    const checkExists = () => {
        if( part.notes){
            setNotesStatus(true);
        }

        if( part.chord_value || part.chord_mode || part.chord_text){
            setChordsStatus(true);
        } 

        if (part.sound){
            setRecordStatus(true);
        }
    }


    const handleDeleteNotes = () => {
        setNotesStatus(false);
        dispatch({
            type: 'DELETE_NOTE',
            payload: {
                partId: part.id,
                projectId: params.id,
            }
        });
    }

    const handleDeleteChords = () => {
        setChordsStatus(false);
        dispatch({
            type: 'DELETE_CHORD',
            payload: {
                partId: part.id,
                projectId: params.id,
            }
        });
    }

    const handleDeleteAudio=() => {
        setRecordStatus(false);
        dispatch({
            type: 'DELETE_AUDIO',
            payload: {
                partId: part.id,
                projectId: params.id
            }
        });
    }

    return(
        <div>
            <ButtonGroup size='small' color='inherit' sx={{ px:5, pb:5}}>
                <Button
                    onClick={() => setNotesStatus(true)}
                    sx={{m:0}}
                > 
                    Notes 
                </Button>

                <Button
                    onClick={() => setChordsStatus(true)}
                    sx={{m:0}}
                > 
                    Chords 
                </Button>

                <Button
                    onClick={() => setRecordStatus(true)}
                    sx={{m:0}}
                > 
                    Record 
                </Button>
            </ButtonGroup>

            {notesStatus 
                && 
            <Box 
                sx={{display:'flex'}}    
            > 
                <Notes
                    part={part}
                /> 
                <Button 
                    sx={{
                        mt: '5%',
                        px:5, 
                        ml: 5,
                        width: 200,
                        height: 50
                    }}
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteNotes()}
                >
                Delete Notes</Button> 
            </Box>}  

            {chordsStatus 
                && 
            <Box
                sx={{display:'flex'}}
            > 
                <Chords

                    part={part}
                /> 
                <Button 
                    sx={{
                        align: 'center',
                        mt: '30%',
                        px:2, 
                        ml: 5,
                        width: 200,
                        height: 50
                    }}
                    variant='contained'
                    color="error"
                    onClick={() => handleDeleteChords()}
                >
                Delete Chords</Button> 
            </Box>}  

            {recordStatus 
                && 
            <Box
                sx={{display:'flex'}}
            > 
                <AudioRecorder 
                    part={part}
                /> 
                <Button 
                    sx={{
                        mt: '5%',
                        px:5, 
                        ml: 5,
                        width: 200,
                        height: 50
                    }}
                    variant='contained'
                    color="error"
                    onClick={() => handleDeleteAudio()}
                >
                Delete Audio</Button> 
            </Box>}            
        </div>
    )
}

export default PartWorkspace;