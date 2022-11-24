import {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import { ThemeProvider, createMuiTheme, ButtonGroup, Button, Typography } from '@mui/material';

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
            payload: part.id
        });
    }

    return(
        <div>
            <ButtonGroup size='small' color='inherit'>
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
            <div> 
                <Notes
                    part={part}
                /> 
                <Button 
                    color="error"
                    onClick={() => handleDeleteNotes()}
                >
                Delete</Button> 
            </div>}  

            {chordsStatus 
                && 
            <div> 
                <Chords
                    part={part}
                /> 
                <Button 
                    color="error"
                    onClick={() => handleDeleteChords()}
                >
                Delete</Button> 
            </div>}  

            {recordStatus 
                && 
            <div> 
                <AudioRecorder 
                    part={part}
                /> 
                <Button 
                    color="error"
                    onClick={() => handleDeleteAudio()}
                >
                Delete</Button> 
            </div>}            
        </div>
    )
}

export default PartWorkspace;