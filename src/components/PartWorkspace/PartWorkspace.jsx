import {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { ThemeProvider, createMuiTheme, ButtonGroup, Button, Typography } from '@mui/material';

import AudioRecorder from '../AudioRecorder/AudioRecorder';

function PartWorkspace({stuff}){
    //local state to display or take away the tool elements from the workspace
    const [recordStatus, setRecordStatus] = useState(false);
    const [notesStatus, setNoteStatus] = useState(false);
    const [chordsStatus, setChordStatus] = useState(false);

    //TODO retrieve from store for the current parts 

    const dispatch = useDispatch();

   

    return(
        <>
            <ButtonGroup size='small' color='secondary'>
                <Button> 
                    Notes 
                </Button>

                <Button> 
                    Chords 
                </Button>

                <Button
                    onClick={() => setRecordStatus(true)}
                > 
                    Record 
                </Button>
            </ButtonGroup>

            <h3>{stuff}</h3>
            {recordStatus 
                && 
            <div> 
                <AudioRecorder /> 
                <Button 
                    color="error"
                    onClick={() => setRecordStatus(false)}
                >
                Delete</Button> 
            </div>}            
        </>
    )
}

export default PartWorkspace;