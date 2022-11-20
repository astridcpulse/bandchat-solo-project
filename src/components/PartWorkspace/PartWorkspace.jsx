import {useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { ThemeProvider, createMuiTheme, ButtonGroup, Button, Typography } from '@mui/material';

import AudioRecorder from '../AudioRecorder/AudioRecorder';

function PartWorkspace({part}){
    //local state to display or take away the tool elements from the workspace
    const [recordStatus, setRecordStatus] = useState(false);
    const [notesStatus, setNoteStatus] = useState(false);
    const [chordsStatus, setChordStatus] = useState(false);




    return(
        <div>
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

            {recordStatus 
                && 
            <div> 
                <AudioRecorder 
                    sound={part.sound}
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