import {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { ThemeProvider, createMuiTheme, ButtonGroup, Button, Typography } from '@mui/material';

import AudioRecorder from '../AudioRecorder/AudioRecorder';
import Notes from '../Notes/Notes';
import Chords from '../Chords/Chords';

function PartWorkspace({part}){
    //local state to display or take away the tool elements from the workspace
    const [recordStatus, setRecordStatus] = useState(false);
    const [notesStatus, setNotesStatus] = useState(false);
    const [chordsStatus, setChordsStatus] = useState(false);


    return(
        <div>
            <ButtonGroup size='small' color='secondary'>
                <Button
                    onClick={() => setNotesStatus(true)}
                > 
                    Notes 
                </Button>

                <Button
                    onClick={() => setChordsStatus(true)}
                > 
                    Chords 
                </Button>

                <Button
                    onClick={() => setRecordStatus(true)}
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
                    onClick={() => setNotesStatus(false)}
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
                    onClick={() => setChordsStatus(false)}
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
                    onClick={() => setRecordStatus(false)}
                >
                Delete</Button> 
            </div>}            
        </div>
    )
}

export default PartWorkspace;