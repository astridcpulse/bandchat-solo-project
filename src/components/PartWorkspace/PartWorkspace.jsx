import {useEffect, useState } from 'react';

import { ThemeProvider, createMuiTheme, ButtonGroup, Button, Typography } from '@mui/material';

import AudioRecorder from '../AudioRecorder/AudioRecorder';

function PartWorkspace(){
    const [recordStatus, setRecordStatus] = useState(false);
    const [notesStatus, setNoteStatus] = useState(false);
    const [chordsStatus, setChordStatus] = useState(false);


    return(
        <>
            <ButtonGroup size='small' color='secondary'>
                <Button> Notes </Button>
                <Button> Chords </Button>
                <Button
                    onClick={() => setRecordStatus(true)}
                > Record </Button>
            </ButtonGroup>


            {recordStatus && <div> <AudioRecorder /> </div>}            
        </>
    )
}

export default PartWorkspace;